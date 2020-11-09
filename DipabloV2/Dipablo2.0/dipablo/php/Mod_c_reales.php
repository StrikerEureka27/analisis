<?php 
    include('conexion.php');
    
    $id=   $_POST["id"];
    $m_obra=  $_POST["m_obra"];
    $g_opera=  $_POST["g_opera"];
    $c_reales=  $_POST["c_reales"];
    $utilidad=  $_POST["utilidad"];
    $ganancia=  $_POST["ganancia"];
    $p_venta=  $_POST["p_venta"];

    $query="  UPDATE costo_real SET mano_obra=$m_obra,operativo=$g_opera,costo_real=$c_reales,utilidad=$utilidad,ganancia=$ganancia,precio_venta=$p_venta WHERE id=$id; ";
    $result = mysqli_query($con,$query);
        

?>