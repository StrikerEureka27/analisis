<?php 
    include('conexion.php');
    
    $nom=  $_POST["nom2"];
    $num=  $_POST["num2"];
    $tam=  $_POST["tam2"];
    $por=  $_POST["por2"];


    $img= $_FILES["fileImg"]["name"];

    
    if(isset($img)&& $img!=""){
        $tipo =$_FILES['fileImg']["type"];
        
        $temp =$_FILES['fileImg']["tmp_name"];

        $query="INSERT INTO RECETA (NOMBRE,PORCION,TAMANIO,MARGEN,IMAGEN) value('$nom',$num, '$tam',$por,'$img')";
        $result = mysqli_query($con,$query);

        move_uploaded_file($temp,'../img/'.$img);

        $query1="SELECT* FROM RECETA ORDER BY ID DESC LIMIT 1";
        $result1 = mysqli_query($con,$query1);

        while($row2 = mysqli_fetch_row($result1)){
            $id_receta=$row2[0];
            $query2="INSERT INTO COSTO_REAL (mano_obra,operativo,costo_real,utilidad,ganancia,precio_venta,RECETA_id) VALUE (0,0,0,0,0,0,$id_receta)";
            $result2 = mysqli_query($con,$query2);        
        }
        


    }
        $query1="SELECT* FROM RECETA ORDER BY ID DESC LIMIT 1";
        $result1 = mysqli_query($con,$query1);
        $json = array();
        while($row = mysqli_fetch_row($result1)){
            $json[] = array(
                'id' => $row[0],
                'nom'=>$row[1],
                'por'=>$row[2],
                'tam'=>$row[3],
                'mar'=>$row[4],
                'img'=>$row[5],
                
            );
        }
        $jsonstring = json_encode($json);
        echo $jsonstring;

    
    
    
    
?>