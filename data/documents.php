<?php
	require 'session.php';
	$basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $documents = $basecamp('GET', '/projects/'.$_GET['project'].'/documents.json');
    echo json_encode($documents);
?>