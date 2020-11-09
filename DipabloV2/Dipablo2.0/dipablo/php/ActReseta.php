<?php 
    include('conexion.php');
    
    $id=   $_POST["id"];
    $cosM=  $_POST["cosM"];
    $cosT=  $_POST["cosT"];
    $cosP=  $_POST["cosP"];
    
    $query="  UPDATE RECETA SET COSTO_PORCION=$cosP, COSTO_MATERIA=$cosM, COSTO_TOTAL=$cosT WHERE ID=$id; ";
    $result = mysqli_query($con,$query);

    mysqli_close($close);

?>

