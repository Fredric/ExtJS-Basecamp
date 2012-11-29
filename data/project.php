<?php
	require 'session.php';
	
	$basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $project = $basecamp('GET', '/projects/'.$_GET['id'].'.json');
 
    echo json_encode($project);
?>