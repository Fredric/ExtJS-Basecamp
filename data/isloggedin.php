<?php
require 'session.php';

if(isset($_SESSION['user'])){
    $basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $user = $basecamp('GET', '/people/me.json');
	$result = array('success' => true, 'user' => $user);
	echo json_encode($result);
}else{
	$result = array('success' => false, 'user' => $_SESSION['user']);
	echo json_encode($result);
}


?>