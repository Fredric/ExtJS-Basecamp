<?php
	require 'session.php';
	$basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $uploads = $basecamp('GET', '/projects/'.$_GET['project'].'/attachments.json');
    echo json_encode($uploads);
?>