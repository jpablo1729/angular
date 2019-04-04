<?php 

session_start();

$_POST = json_decode(file_get_contents('php://input'), true);

if(isset($_POST) && !empty($_POST)) {
    $username = $_POST['username'];
    $password = $_POST['password'];

    if($username == 'admin' && $password == 'admin') {
        $_SESSION['user'] = 'admin';
        ?>
        {
            "success": true,
            "secret": "You are logged as administrator. Be responsable with your actions!"
        }
        <?php
    } else {
        ?>
        {
            "success": false,
            "secret": "Invalid credentials"
        }
        <?php
    }
} else {
    ?>
    {
        "success": false,
        "secret": "only POST acces accepted"
    }
    <?php
}

?>
        