<?php 
    include('conexion.php');
    
    $id=   $_POST["id2"];
    $nom=  $_POST["nom2"];
    $num=  $_POST["num2"];
    $tam=  $_POST["tam2"];
    $por=  $_POST["por2"];


    $img= $_FILES["fileImg"]["name"];

    
    if(isset($img)&& $img!=""){
        $tipo =$_FILES['fileImg']["type"];
        
        $temp =$_FILES['fileImg']["tmp_name"];

        $query="  UPDATE RECETA SET NOMBRE='$nom',PORCION=$num,TAMANIO='$tam',MARGEN=$por,IMAGEN='$img 'WHERE ID=$id; ";
        $result = mysqli_query($con,$query);

        move_uploaded_file($temp,'../img/'.$img);
    }else{
        $query="  UPDATE RECETA SET NOMBRE='$nom',PORCION=$num,TAMANIO='$tam',MARGEN=$por WHERE ID=$id; ";
        $result = mysqli_query($con,$query);
    }
?>