<?php
// Файлы phpmailer
require 'phpmailer/PHPMailer.php';
require 'phpmailer/SMTP.php';
require 'phpmailer/Exception.php';

// Переменные, которые отправляет пользователь
$name = $_POST['name'];

if (isset($_POST['email'])) {
    $email = $_POST['email'];
} else {
    $email = '';
}
$phone = $_POST['phone'];

// Формирование самого письма
$title = "Новая заявка с сайта onheet";
$body = "
<h2>Новая заявка</h2>
<b>Имя:</b> $name<br>
<b>Почта:</b> $email<br>
<b>Телефон:</b> $phone<br>
";

// Настройки PHPMailer
$mail = new PHPMailer\PHPMailer\PHPMailer();
try {
    $mail->isSMTP();
    $mail->CharSet = "UTF-8";
    $mail->SMTPAuth   = true;
    //$mail->SMTPDebug = 2;
    $mail->Debugoutput = function($str) {$GLOBALS['status'][] = $str;};

    // Настройки вашей почты
    $mail->Host       = 'smtp.mail.ru'; // SMTP сервера вашей почты
    $mail->Username   = ''; // Логин на почте
    $mail->Password   = ''; // Пароль на почте
    $mail->SMTPSecure = 'ssl';
    $mail->Port       = 465;
    $mail->setFrom('', ''); // Адрес самой почты и имя отправителя

    // Получатель письма
    $mail->addAddress('');

    // Прикрепление файлов к письму
    if (isset($_FILES['file'])
        && $_FILES['file']['error'] == UPLOAD_ERR_OK
    ) {
        $mail->addAttachment($_FILES['file']['tmp_name'],
            $_FILES['file']['name']);
    }


// Отправка сообщения
    $mail->isHTML();
    $mail->Subject = $title;
    $mail->Body = $body;

// Проверяем отравленность сообщения
    if ($mail->send()) {$response = "success";}
    else {$response = "error";}

} catch (Exception $e) {
    $response = "error";
    $status = "Сообщение не было отправлено. Причина ошибки: $mail->ErrorInfo";
}

// Отображение результата
echo json_encode(["response" => $response]);
