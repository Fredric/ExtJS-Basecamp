<?php

	require 'session.php';
	
	$basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $todos = $basecamp('GET', '/projects/'.$_GET['project'].'/todolists/'.$_GET['id'].'.json');
 
    echo json_encode($todos);
?>