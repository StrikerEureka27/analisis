<?php

	include('conexion.php');

	$query = "SELECT *FROM INVENTARIO";
	$result = mysqli_query($con,$query);

	if(!$result){
		echo 'Consulta fallida '. mysql_error();
	}

	$json = array();
	while($fila = mysqli_fetch_array($result)){
		$json[] = array(	
		'nombre' => $fila['nombre'],
		'cantidad' => $fila['cantidad'],
		);
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;
	

?>