<?php

include ('conexion.php');

if(isset($_POST['cantidad'])){

    $cantidad = $_POST['cantidad'];
    $orden = $_POST['orden'];
	$real = $_POST['real'];
   

	$query = "INSERT INTO DET_ORDEN (cantidad,ORDEN_id,COSTO_REAL_id) VALUES ('$cantidad',$orden,$real)";
	$result = mysqli_query($con,$query);
	

	if(!$result){
		die('La consulta fallo :c ');
	}else{
		echo 'Datos ingresados';
	}

	


}
?>