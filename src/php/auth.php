<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");

session_start();
require_once  "connect.php";

$method = $_SERVER['REQUEST_METHOD'];
$mysql = connectDB();

if ($method === 'POST') {

    $mail = $_POST['email'];
    $pass = $_POST['pass'];
    $request = mysqli_query($mysql, "SELECT * FROM `users` WHERE `email` ='" . $mail . "'");

    if (mysqli_num_rows($request) != 0) {
        $user = mysqli_fetch_assoc($request);
        if ($pass === $user['pass']) {
            $user['login'] = true;
            $data_json = json_encode($user, JSON_UNESCAPED_UNICODE);
            echo $data_json;
        }
    }
}


//$data_json = json_encode($_POST, JSON_UNESCAPED_UNICODE);
//print_r($data_json);




