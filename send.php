<?
if((isset($_POST['name'])&&$_POST['name']!="")&&(isset($_POST['surname'])&&$_POST['surname']!="")&&(isset($_POST['email'])&&$_POST['email']!="")){
        $to = 'popelaleksandr@gmail.com'; 
        $subject = 'Contact form'; 
        $message = '
                <html>
                    <head>
                        <title>'.$subject.'</title>
                    </head>
                    <body>
                        <p>Name: '.$_POST['name'].'</p>
                        <p>Surname: '.$_POST['surname'].'</p>
                        <p>Email: '.$_POST['email'].'</p>
                        <p>Message: '.$_POST['textarea'].'</p>                  
                    </body>
                </html>'; 
        $headers  = "Content-type: text/html; charset=utf-8 \r\n";
        $headers .= "From: Scriptum \r\n"; 
        mail($to, $subject, $message, $headers);
}
?>