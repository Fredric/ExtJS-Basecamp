<?php
	require 'session.php';
	$basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $projects = $basecamp('GET', '/projects.json');
    echo json_encode($projects);
?>