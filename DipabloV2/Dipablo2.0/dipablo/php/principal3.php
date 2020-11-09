<?php

	include ('conexion.php');

	if(isset($_POST['nombre'])){
		$nombre = $_POST['nombre'];
		$fcompra = $_POST['fcompra'];
		$fvence = $_POST['fvence'];
		$cantidad = $_POST['cantidad'];
		$marca = $_POST['marca'];
		$stipo = $_POST['stipo'];
		$spaquete = $_POST['spaquete'];

		$consulta = "INSERT INTO INVENTARIO (NOMBRE,FECHA_COMPRA,FECHA_VENCIMIENTO,CANTIDAD,MARCA,TIPO,MEDIDA) VALUES ('$nombre',DATE('$fcompra'),DATE('$fvence'),$cantidad, '$marca', '$stipo', '$spaquete')";

		$result = mysqli_query($con,$consulta);
		if(!$result){
			die('La consulta fallo :c ');

		}
		echo 'Datos ingresados';
	}


?>



   