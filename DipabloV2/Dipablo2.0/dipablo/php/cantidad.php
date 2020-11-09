<?php

	include('conexion.php');

	$key = $_POST['id'];

	$query = "SELECT *FROM RECETA WHERE ID=$key";
	$result = mysqli_query($con,$query);

	$query2=  "SELECT id, precio_venta FROM COSTO_REAL WHERE RECETA_id=(SELECT id FROM RECETA)";
	$result2 = mysqli_query($con,$query2);

	if(!$result){
		echo 'Consulta fallida ';
	}

	$json = array(); //Variable json  
	while(($fila = mysqli_fetch_array($result)) && ($fila2 = mysqli_fetch_array($result2))){ 
		//Crear objetos para esta variable 
		$json[] = array(
			'id' => $fila['id'],
			'nombre' => $fila['nombre'],
			'descripcion' => $fila['descripcion'],
			'precio' => $fila2['precio_venta'],
			'index' => $fila2['id'],
			'imagen' => $fila['imagen']
		);
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;

?>