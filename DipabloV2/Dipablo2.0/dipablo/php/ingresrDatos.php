<?php 
    include('conexion.php');
    
    $id_res=  $_POST["id_res"];
    $id_inv=  $_POST["id_ins"];
    $cant=  $_POST["cant"];
    $medi=  $_POST["medi"];
    $u_cos=  $_POST["u_cos"];


    $query="INSERT INTO det_receta(cantidad,medida,costo_unitario,RECETA_id,INVENTARIO_id) value($cant,'$medi',$u_cos,$id_res,$id_inv)";
    $result = mysqli_query($con,$query);
    if(!$result){
        die('query failed');
    }else{
         echo "todo bien ";
    }
    
?>