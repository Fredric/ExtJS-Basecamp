<?php
	require 'session.php';
	$basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $topics = $basecamp('GET', '/projects/'.$_GET['project'].'/topics.json');
    echo json_encode($topics);
?>