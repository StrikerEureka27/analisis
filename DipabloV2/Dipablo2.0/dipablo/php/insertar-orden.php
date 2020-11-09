<?php 
    include('conexion.php');
    
    if(isset($_POST['nombre'])){

        $nit =  $_POST["nit"];    
        $nombre =  $_POST["nombre"];
        $apellido =  $_POST["apellido"];
        $estado = $_POST["languages"];

        if($estado=='nuevo'){

            $query="INSERT INTO CLIENTE (nit,nombre,apellido) VALUES ($nit,'$nombre', '$apellido')";
            $result = mysqli_query($con,$query);

            $query2 = "INSERT INTO ORDEN (fecha, CLIENTE_nit) VALUES ('2020-10-25', $nit)";
            $result2 = mysqli_query($con,$query2);

            if(!$result){

                die('query failed');

            }else{

                echo "todo bien ";

            }

    }else{

        $query2 = "INSERT INTO ORDEN (fecha, CLIENTE_nit) VALUES ('2020-10-25', $nit)";
        $result2 = mysqli_query($con,$query2);

    }
    

}
    
?>