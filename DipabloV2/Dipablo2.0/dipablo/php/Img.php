<?php 
    include('conexion.php');
    
    $id=  $_POST["id"];
    $nom=  $_POST["nom"];
    $des=  $_POST["des"];
    $pre=  $_POST["pre"];


    $img= $_FILES["fileImg"]["name"];

    
    if(isset($img)&& $img!=""){
        $tipo =$_FILES['fileImg']["type"];
        
        $temp =$_FILES['fileImg']["tmp_name"];

        $query="INSERT INTO menu value($id,'$nom', '$des','$pre','$img')";
        $result = mysqli_query($con,$query);


        move_uploaded_file($temp,'../img/'.$img);

    }
    
?>