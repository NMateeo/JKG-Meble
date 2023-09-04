<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'PHPMailer/src/Exception.php'
require 'PHPMailer/src/PHPMailer.php'
require 'PHPMailer/src/SMTP.php'

if(isset($_POST["send"])) {
    $mail = new PHPMailer(true);

    $mail->isSMTP();
    $mail->Host = '..'; // gmail karola
    $mail->SMTPAuth = true;
    $mail->Username = ''; // gmail  nadawcy
    $mail->Password = ''; // haslo nadawcy
    $mail->SMTPSecure = 'ssl';
    $mail->Port = 465;

    $mail->setForm('') // gmail nadawcy
    $mail->addAddress($_POST['email']);

    $mail->isHTML(true);

    $mail->Body = $_POST["msg"]

    $mail->send();
}

$email = $_POST["email"];
$message = $_POST["msg"];

?>