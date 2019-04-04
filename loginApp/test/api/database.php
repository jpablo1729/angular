<?php 

session_start();

$user = $_SESSION['user'];

if($user == 'admin') {
    echo '{
        "success": true,
        "secret": "You are logged as administrator."
    }';
} else {
    echo '{
        "success": false,
        "secret": "Who fuck are you?"
    }';
}

?>
        