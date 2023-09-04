<?php

$email = $_POST['email'];
$msg = $_POST['msg']
$subject = "Wiadomość wysłana z formularza na stronie JKG Meble";
$to = "jkgmeble@gmail.com";

$txt = "email: " . $email . "\r\n" . "Treść: " . $msg;