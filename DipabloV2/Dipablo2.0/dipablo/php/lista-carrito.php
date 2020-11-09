<?php

include ('conexion.php');

	$query = "SELECT cantidad,id,
	(SELECT precio_venta FROM costo_real WHERE id=COSTO_REAL_id),
	(SELECT nombre FROM receta WHERE id=(SELECT RECETA_id FROM costo_real WHERE id=COSTO_REAL_id))
	FROM det_orden WHERE ORDEN_id=(SELECT id FROM orden ORDER BY ID DESC LIMIT 1);"; 
	$result = mysqli_query($con,$query); 

	if(!$result){					
		die('La consulta fallo :( '. mysql_error($con)); 
    }
    
    $row_cnt = $result->num_rows;

		$json = array(); //Variable json  
	while($fila = mysqli_fetch_array($result)){ 
		//Crear objetos para esta variable 
		$json[] = array(

			'cantidad' => $fila[0],
			'id' => $fila[1],
			'precio' => $fila[2],
            'nombre' => $fila[3],
			'numero'=> $row_cnt
			
		);
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;
	
?>