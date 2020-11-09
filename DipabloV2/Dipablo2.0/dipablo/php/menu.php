<?php

include ('conexion.php');

	$query = "SELECT *FROM RECETA"; //Hacemos la consulta y la guardamos en la varible $query
	$result = mysqli_query($con,$query); //Para sacar el resultado de la consulta 

	$query2=  "SELECT precio_venta FROM COSTO_REAL WHERE RECETA_id=(SELECT id FROM RECETA)";
	$result2 = mysqli_query($con,$query2);


	if(!$result){					//Opcional, pero nos da mas detalles del error
		die('La consulta fallo :( '. mysql_error($con)); 
	}

		$json = array(); //Variable json  
	while(($fila = mysqli_fetch_array($result)) && ($fila2 = mysqli_fetch_array($result2)) ){ 
		//Crear objetos para esta variable 
		$json[] = array(
			'id' => $fila['id'],
			'nombre' => $fila['nombre'],
			'descripcion' => $fila['descripcion'],
			'precio' => $fila2['precio_venta'],
			'imagen' => $fila['imagen']

		);

	}

	$jsonstring = json_encode($json);
	echo $jsonstring;
	
?>