<?php
header('Access-Control-Allow-Origin: *');
header("Access-Control-Allow-Headers: X-API-KEY, Origin, X-Requested-With, Content-Type, Accept, Access-Control-Request-Method");
header("Content-Type: text/html; charset=utf-8");

session_start();
require_once  "connect.php";

$method = $_SERVER['REQUEST_METHOD'];
$mysql = connectDB();

if ($method === 'POST') {
    $email = $_POST['email'];
    $name = $_POST['name'];
    $phone = $_POST['phone'];
    $pass = $_POST['pass'];
    $repeatPass = $_POST['repeatPass'];
    $city = $_POST['city'];

    if (mb_strlen($name) < 3 || mb_strlen($name) > 50) {
        echo 'Недопустимая длинна имени!';
        exit();
    } else if (mb_strlen($pass) < 2) {
        echo 'Недопустимая длинна пароля (от 2символов)!';
        exit();
    } else if ($pass !== $repeatPass) {
        echo 'Пароли не совпадают!';
        exit();
    } else {
        $request = 'INSERT INTO `users` (`name`, `email`, `phone`, `pass`, `repeatPass`, `city`) VALUES ("' . $name . '","' . $email . '", "' . $phone . '", "' . $pass . '", "' . $repeatPass . '","' . $city . '")';
        if ((mysqli_query($mysql, $request) or die(mysqli_error($mysql)))) {
            echo 'ok';
        }
    }
}


//$data_json = json_encode($_POST, JSON_UNESCAPED_UNICODE);
//print_r($data_json);





