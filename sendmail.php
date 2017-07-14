<?php 
    //change this to your email. 
    $to = "congresoautismocotii@gmail.com";
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
	$message = $_POST['message'];	

    //begin of HTML message 
    $message ="
	<html>
		<body>
			<h3>¡".$_POST['name']." te ha enviado un mensaje!</h3>
			<p>Asunto: ".$subject."</p>
			<p>".$message."</p>
		</body>
	</html>";
   //end of message 
    $headers  = "From: $email\r\n"; 
    $headers .= "Content-type: text/html\r\n";

    //options to send to cc+bcc 
    //$headers .= "Cc: [email]maa@p-i-s.cXom[/email]"; 
    //$headers .= "Bcc: [email]email@maaking.cXom[/email]"; 
    
    $envio = mail($to, "Mensaje enviado desde congresoautismoaba.com", $message, $headers); 

    echo $envio;
?>