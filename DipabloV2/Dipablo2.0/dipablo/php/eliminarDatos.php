<?php 

    include('conexion.php');
    
    $id_res=  $_POST["id_res"];
    $id_inv=  $_POST["id_ins"];


    $query="DELETE FROM  det_receta WHERE (RECETA_id=$id_res && INVENTARIO_id=$id_inv)";
    $result = mysqli_query($con,$query);
    if(!$result){
        die('query failed');
    }else{
         echo "todo bien ";
    }
    
?>