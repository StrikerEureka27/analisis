<?php 
    include('conexion.php');

    $query="SELECT * from inventario";
    $result = mysqli_query($con, $query);

    if(!$result){
        die('Consulta fallida '.mysqli_error($con));
    }

    $json = array();

    while($row = mysqli_fetch_row($result)){
        $json[] = array(
            'id' => $row[0],
            'nombre'=>$row[1],
            'fecha_c'=>$row[2],
            'fecha_v'=>$row[3],
            'cantidad'=>$row[4],
            'marca'=>$row[5],
            'tipo'=>$row[6],
            'medida'=>$row[7],
            
        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>
