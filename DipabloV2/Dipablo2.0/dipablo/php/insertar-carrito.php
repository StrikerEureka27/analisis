<?php 
    include('conexion.php');
    
    if(isset($_POST['telefono'])){

        $telefono =  $_POST["telefono"];
        $celular =  $_POST["celular"];
        $dire =  $_POST["dire"];
        $des =  $_POST["descripcion"];
        $tipo = $_POST["languages"];


    
    $query="UPDATE CLIENTE SET telefono = '$telefono', telefono2 = '$celular', direccion = '$dire', descripcion = '$des' WHERE nit=(SELECT CLIENTE_nit FROM ORDEN 
    WHERE (id=(SELECT id FROM ORDEN WHERE (id=(SELECT max(id) FROM ORDEN)))))";
    $result = mysqli_query($con,$query);

    $query2="UPDATE ORDEN SET tipo_pago = '$tipo' WHERE CLIENTE_nit=(SELECT CLIENTE_nit FROM ORDEN WHERE (id=(SELECT id FROM ORDEN WHERE (id=(SELECT max(id) FROM ORDEN)))))";
    $result2 = mysqli_query($con,$query2);


    if(!$result){
        die('query failed');
    }else{
         echo "todo bien ";
    }

}
    
?>