<?php
function connectDB() {
    $host = 'localhost';
    $userName = 'root';
    $password = 'root';
    $dataBase = 'react-php';

    $connection = mysqli_connect($host, $userName, $password, $dataBase);

    if (!$connection) {
        die('Error connect to data base');
    } else {
        echo "";
    }

    return $connection;
}
