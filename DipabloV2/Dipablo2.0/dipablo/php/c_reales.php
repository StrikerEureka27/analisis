<?php 
    include('conexion.php');

    $query="SELECT costo_real.id,costo_real.mano_obra,costo_real.operativo,costo_real.costo_real,
    costo_real.utilidad,costo_real.ganancia,costo_real.precio_venta,
    (SELECT receta.nombre FROM mydb.receta WHERE receta.id=costo_real.RECETA_id),
    (SELECT receta.costo_porcion FROM mydb.receta WHERE receta.id=costo_real.RECETA_id)
    FROM mydb.costo_real";
    $result = mysqli_query($con, $query);

    if(!$result){
        die('Consulta fallida '.mysqli_error($con));
    }

    $json = array();

    while($row = mysqli_fetch_row($result)){
        
        $json[] = array(
            'id' => $row[0],
            'm_obra'=>$row[1],
            'g_opera'=>$row[2],
            'c_reales'=>$row[3],
            'utilidad'=>$row[4],
            'ganancia'=>$row[5],
            'p_venta'=>$row[6],
            'nombre'=>$row[7],
            'c_porcion'=>$row[8],

        );
    }
    $jsonstring = json_encode($json);
    echo $jsonstring;

?>