<?php

    include('conexion.php');

    $query = "SELECT *FROM INVENTARIO";
    $result = mysqli_query($con,$query);

    if(!$result){
        echo 'consulta fallida '.mysqli_error($con);
    }
    $json = array();
    while($row = mysqli_fetch_row($result)){
        $json[] = array(
            'id'=>$row[0],
            'nombre' =>$row[1],
            'cantidad' =>$row[4],
            'marca' =>$row[5],
            'precio' =>$row[6],
            'medida' =>$row[7]
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;
?>