<?php
	session_start();
	require 'basecamp.php';
	$appName = 'MyApp';
	$appContact = 'yourname@example.com';
	$basecampAccountId = '1861179';
	$basecampUsername = $_SESSION['user'];
	$basecampPassword = $_SESSION['pass'];
?>