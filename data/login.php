<?php
	require 'session.php';

	$basecampUsername = $_POST['user'];
	$basecampPassword = $_POST['pass'];
    $basecamp = basecamp_api_client($appName, $appContact,
    $basecampAccountId, $basecampUsername, $basecampPassword);
    $user = $basecamp('GET', '/people/me.json');
    $_SESSION['user'] = $_POST['user'];
    $_SESSION['pass'] = $_POST['pass'];

    echo json_encode($user);

?>