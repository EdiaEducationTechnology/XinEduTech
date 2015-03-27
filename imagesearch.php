<?php
header("Content-Type: application/json");

// Get the query
$q=isset($_GET['q']) ? $_GET['q'] : "";

// Get the remote IP
if (!empty($_SERVER['HTTP_CLIENT_IP'])) {
    $ip = $_SERVER['HTTP_CLIENT_IP'];
} elseif (!empty($_SERVER['HTTP_X_FORWARDED_FOR'])) {
    $ip = $_SERVER['HTTP_X_FORWARDED_FOR'];
} else {
    $ip = $_SERVER['REMOTE_ADDR'];
}

// Build the URL
$url = "https://ajax.googleapis.com/ajax/services/search/images?v=1.0&q=" . urlencode($q) ."&userip=" . $ip;

// Send the request
$ch = curl_init();
curl_setopt($ch, CURLOPT_URL, $url);
curl_setopt($ch, CURLOPT_RETURNTRANSFER, 1);
curl_setopt($ch, CURLOPT_REFERER, "http://blog.educatietechnologie.nl/");
$body = curl_exec($ch);
curl_close($ch);

// Echo it.
echo $body;

?>