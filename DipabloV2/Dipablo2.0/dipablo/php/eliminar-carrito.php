<?php

include ('conexion.php');

    $item = $_POST['id'];

	$query = "DELETE FROM DET_ORDEN WHERE ID='$item'"; //Hacemos la consulta y la guardamos en la varible $query
	$result = mysqli_query($con,$query); //Para sacar el resultado de la consulta 

	if(!$result){					//Opcional, pero nos da mas detalles del error
		die('La consulta fallo :( '.mysql_error($result)); 
    }
    
    
	
?>