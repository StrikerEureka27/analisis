<?php

    include 'conexion.php';

    $query = "SELECT * FROM ORDEN WHERE id=(SELECT max(id) FROM ORDEN);";
	$result = mysqli_query($con,$query);
    
    if(!$result){
		echo 'Consulta fallida ';
	}

	$json = array(); //Variable json  
	while($fila = mysqli_fetch_array($result)){ 
		//Crear objetos para esta variable 
		$json[] = array(
			'id' => $fila['id']
		);
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;





?>