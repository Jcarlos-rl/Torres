<?php
    $destino = "a.lara@grupoconvar.mx";
    $nombre = $_POST["nombre"];
    $email = $_POST["email"];
    $tel = $_POST["telefono"];
    $mensaje = $_POST["mensaje"];
    echo $nombre." ".$email." ".$tel." ".$mensaje;
    $contenido = "Nombre: ".$nombre."\nE-mail: ".$email."\nTelefono:".$tel."\nMensaje: ".$mensaje;
    mail($destino,"Contacto Torres Cruz del Sur",$contenido);
    header("Location:index.html");
?>