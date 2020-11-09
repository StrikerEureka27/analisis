<?php

include "conexion.php";

$search = $_POST['search'];

if(!empty($search)){
    $query = "SELECT *FROM CLIENTE WHERE nit LIKE '$search%'";
    $result = mysqli_query($con, $query);
    if(!$result){
        die('Error de consulta'.mysqli_error($con));
    }

    

    $json = array();
    while($fila =  mysqli_fetch_array($result)){
        $json[] = array(
			'nit' => $fila['nit'],
			'nombre' => $fila['nombre'],
			'apellido' => $fila['apellido'],
			'precio' => $fila['nit'],
            'direccion' => $fila['direccion'],
            'telefono' => $fila['telefono'],
            'telefono2' => $fila['telefono2'],
            'descripcion' => $fila['descripcion']

		);
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

}





?>