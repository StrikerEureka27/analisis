<?php

 $server = "localhost";
 $user = "dipablo";
 $pass = "1234";
 $db = "mydb";

 $con = mysqli_connect($server,$user,$pass,$db);
 
 if(!$con){

    die("Conexion fallida".$con->connect_error());

}else{

  //echo "Correcto";

}


?>
