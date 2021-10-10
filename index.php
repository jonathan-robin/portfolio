<?php 
    header('Access-Control-Allow-Origin: *');
    header('Access-Control-Allow-Methods: GET, POST');
    header('Access-Control-Allow-Headers: X-Requested-With');
    header('Access-Control-Allow-Credentials: true');

    use PHPMailer\PHPMailer\PHPMailer;
    use PHPMailer\PHPMailer\Exception;


    $email = $_GET['email'];
    $name = $_GET['name'];
    $message = $_GET['message'];

    // echo($email)

    require "vendor/autoload.php"; 

    // $mail = new PHPMailer(true); 
        
    // try {
    //         $mail->SMTPDebug = SMTP::DEBUG_SERVER;                      //Enable verbose debug output
    //         $mail->isSMTP();                                            //Send using SMTP
    //         $mail->Host       = 'smtp.gmail.com';                     //Set the SMTP server to send through
    //         $mail->SMTPAuth   = true;                                   //Enable SMTP authentication
    //         $mail->Username   = 'robin.jonathan.dev@gmail.com';                     //SMTP username
    //         $mail->Password   = '***********';   
    //         $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS;                           //SMTP password
    //         $mail->Port       = 587;                                    //TCP port to connect to, use 465 for `PHPMailer::ENCRYPTION_SMTPS` above
 
    //         $mail->setFrom('robin.jonathan.dev@gmail.com', 'Contact');
    //         $mail->addAdress('robin.jonathan.dev@gmail.com');

    //         // $mail->setFrom($email, $name);
    //         // $mail->addAddress('robin.jonathan.dev@gmail.com', 'Contact'); 
    //         $mail ->addReplyTp($email, $name);
    //         $mail ->addCC('robinjonathan1993@gmail.com');
    //         $mail->addBCC('contact@jonathan-robin.com');
            
    //         $mail->SMTPSecure = 'tls';
    //         $mail->SMTPSecure = 'ssl';
    //         $mail->isHTML(true);                                  //Set email format to HTML
    //         $mail->Subject = 'Demande de contact';
    //         $mail->Body =          
    //         'Name : ' .$name . '<br />
    //                             Email : ' .$email. '<br />
    //                            <b>Message</b> : ' .$message;

    //         $mail->AltBody = 'This is the body in plain text for non HTML mail clients';
            
            mail('contact@jonathan-robin.com', 'Contact portofolio', $message, $email, $name);
            // $mail->send();
            echo 'Message has been sent';
    // } catch (Exception $e) {
    //         echo "Message could not be sent. Mailer Error: {$mail->ErrorInfo}";
    // }
        echo 'welcome';
?>