<?php
class DummyLogger
{
    function __call($name, $arguments)
    {
        $allowedNames = array('debug', 'info', 'warn', 'error', 'fatal');
        $name = strtolower($name);

        if (!in_array($name, $allowedNames)) {
            error_log("$name is not a method of DummyLogger");
            return;
        }

        if (count($arguments) !== 1) {
            error_log("not exactly one argument to DummyLogger method");
            return;
        }

        $this->_log($name, $arguments[0]);
    }

    private function _log($level, $message)
    {
        error_log("[$level] $message");
    }
}

function basecamp_api_client($appName, $contactInfo, $accountId, $username,
    $password, $logger = NULL)
{
    if (is_null($logger)) {
        $logger = new DummyLogger;
    }

    $baseUrl = "https://basecamp.com/$accountId/api/v1";
    $credentials = "$username:$password";
    $helloHeader = "User-Agent: $appName ($contactInfo)";

    return function($method, $path, $params=array(),
        &$response_headers=array())
    use ($baseUrl, $credentials, $helloHeader, $logger)
    {
        $url = $baseUrl.'/'.ltrim($path, '/');

        $query = in_array($method, array('GET','DELETE')) ? $params : array();

        $payload = in_array($method, array('POST','PUT')) ? stripslashes(json_encode($params)) : array();

        $request_headers = in_array($method, array('POST','PUT')) ? array("Content-Type: application/json; charset=utf-8", 'Expect:') : array();
        $request_headers[] = $helloHeader;

        $logger->debug("About to send API request:\n"
                      .print_r(compact('method', 'url', 'query',
                                       'payload', 'request_headers'), 1));

        $response = curl_http_api_request_($method, $url, $credentials, $query, $payload, $request_headers, $response_headers);

        $statusCode = $response_headers['http_status_code'];
        if ($statusCode >= 400) {
            throw new Exception("HTTP error $statusCode:\n"
                               .print_r(compact('method', 'url', 'query',
                                                'payload', 'request_headers',
                                                'response_headers', 'response',
                                                'shops_myshopify_domain',
                                                'shops_token'), 1));
        }

        return json_decode($response);
    };
}

function curl_http_api_request_($method, $url, $credentials, $query='', $payload='', $request_headers=array(), &$response_headers=array())
{
    $url = curl_append_query_($url, $query);
    $ch = curl_init($url);
    curl_setopts_($ch, $credentials, $method, $payload, $request_headers);
    $response = curl_exec($ch);
    $errno = curl_errno($ch);
    $error = curl_error($ch);
    curl_close($ch);

    if ($errno) throw new Exception("cUrl error: $error", $errno);

    list($message_headers, $message_body) = preg_split("/\r\n\r\n|\n\n|\r\r/", $response, 2);
    $response_headers = curl_parse_headers_($message_headers);

    return $message_body;
}

function curl_append_query_($url, $query)
{
    if (empty($query)) return $url;
    if (is_array($query)) return "$url?".http_build_query($query);
    else return "$url?$query";
}

function curl_setopts_($ch, $credentials, $method, $payload, $request_headers)
{
    curl_setopt($ch, CURLOPT_USERPWD, $credentials);
    curl_setopt($ch, CURLOPT_HEADER, true);
    curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
    curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
    curl_setopt($ch, CURLOPT_MAXREDIRS, 3);
    curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, true);
    curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, 2);
    curl_setopt($ch, CURLOPT_CONNECTTIMEOUT, 30);
    curl_setopt($ch, CURLOPT_TIMEOUT, 30);

    if ('GET' == $method)
    {
        curl_setopt($ch, CURLOPT_HTTPGET, true);
    }
    else
    {
        curl_setopt ($ch, CURLOPT_CUSTOMREQUEST, $method);
        if (!empty($payload))
        {
            if (is_array($payload)) $payload = http_build_query($payload);
            curl_setopt ($ch, CURLOPT_POSTFIELDS, $payload);
        }
    }
    if (!empty($request_headers)) curl_setopt($ch, CURLOPT_HTTPHEADER, $request_headers);
}

function curl_parse_headers_($message_headers)
{
    $header_lines = preg_split("/\r\n|\n|\r/", $message_headers);
    $headers = array();
    list(, $headers['http_status_code'], $headers['http_status_message']) = explode(' ', trim(array_shift($header_lines)), 3);
    foreach ($header_lines as $header_line)
    {
        list($name, $value) = explode(':', $header_line, 2);
        $name = strtolower($name);
        $headers[$name] = trim($value);
    }

    return $headers;
}
?>
