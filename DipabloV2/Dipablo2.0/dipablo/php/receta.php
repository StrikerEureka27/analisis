<?php

    include('conexion.php');

    $query = "SELECT *FROM RECETA";
    $result = mysqli_query($con,$query);

    if(!$result){
        echo 'consulta fallida '.mysqli_error($con);
    }
    $json = array();
    while($row = mysqli_fetch_row($result)){
        $json[] = array(
            'id'=>$row[0],
            'id_insumo'=>$row[1],
            'cantidad'=>$row[2],
            'medida'=>$row[3],
            'unidad'=>$row[4]
        );
    }

    $jsonstring = json_encode($json);
    echo $jsonstring;

?>