<?php

include ('conexion.php');

	$query = "SELECT *FROM CLIENTE"; //Hacemos la consulta y la guardamos en la varible $query
	$result = mysqli_query($con,$query); //Para sacar el resultado de la consulta 

	if(!$result){					//Opcional, pero nos da mas detalles del error
		die('La consulta fallo :( '. mysql_error($con)); 
    }
    
    $row_cnt = $result->num_rows;

		$json = array(); //Variable json  
	while($fila = mysqli_fetch_array($result)){ 
		//Crear objetos para esta variable 
		$json[] = array(
            'numero'=> $row_cnt
		);
	}

	$jsonstring = json_encode($json);
	echo $jsonstring;
	
?>