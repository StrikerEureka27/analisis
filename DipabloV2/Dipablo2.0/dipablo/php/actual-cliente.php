<?php

include 'conexion.php';


$query = "SELECT nit,nombre,apellido FROM CLIENTE WHERE 
nit=(SELECT cliente_nit FROM ORDEN WHERE (id=(SELECT max(id) FROM ORDEN)))";
$result = mysqli_query($con,$query);

if(!$result){
    die('Consulta fallida '.mysqli_error($con));
}

$json = array();

while($fila = mysqli_fetch_row($result)){
    $json[] = array(

        'id' => $fila[0],
        'nombre' => $fila[1],
        'apellido' => $fila[2]

    );

}

$jsonstring = json_encode($json);
echo $jsonstring;


?>