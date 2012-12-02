<?php
	require 'session.php';
	$basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $projects = $basecamp('GET', '/projects.json');
    
    $result = array('success' => true, 'data' => $projects);
    echo json_encode($result);
?>