
$(function(){
	// Mensaje en la consola
	console.log('J Query is Working');
	
	 
	$.ajax({
		url: 'php/menu.php',
		type:'GET',
		success: function(respuesta){
			let menu= JSON.parse(respuesta);
			let templase = '';
			
			menu.forEach(element => {
				templase += `
		
			<div class="card bg-dark text-white">
				<img src="img/${element.imagen}" class="card-img">
					<div class="card-img-overlay">
				  		<h5 class="card-title">${element.nombre}</h5>
						  <p class="card-text" style="font-size: 35px;"><i class="fab fa-quora"></i> ${element.precio}</p>
						  <button type="button" class="btn btn-outline-light" data-toggle="modal" onClick="enviarDatos(${element.id}), enviarNombres(${element.id})" data-target="#exampleModal">Agregar</button>
					</div>
			  </div>
				`
			});
			$('#carta').html(templase);
		}
	})

});

	
	// Función para capturar los datos del usuario
	//El funcionamiento del formulario hace que cuando le demos al boton se actualize la pagina
// 	$('#insumos').submit(function(e) {
// 		const postData = { //Creacion del objeto 
// 			nombre: $('#inputInsumo').val(),
// 			proveedor: $('#inputProveedor').val(),
// 			fcompra: $('#inputCompra').val(),
// 			fvence: $('#inputVencimiento').val(),
// 			cantidad: $('#inputCantidad').val(),
// 			marca: $('#inputMarca').val(),
// 			stipo: $('#selectTipo').val(),
// 			spaquete: $('#selectPaquete').val()
// 		};
// 		$.post('php/principal3.php', postData, function (response) {
// 			Swal.fire({
//   icon: 'success',
//   title: 'Datos guardados',
// 	})
// 		});
// 		e.preventDefault();
// 	});


$(document).ready(function(){

	// document.getElementById('input_s').value = 1;
	
	$.ajax({
		url: 'php/captura-orden.php',
		type: 'POST',
		success: function(respuesta){
			let lists = JSON.parse(respuesta);
			let template = '';
			lists.forEach(element => {
				template = `
				<input type="text" hidden id="detalleid" value="${element.id}" ></input>
				`
			});
			$('#orden').html(template);
		}
		
	})



    $('#insertarimg').submit(function(e){
        var datos = new FormData($('#insertarimg')[0])
        $.ajax({
            url:'php/Img.php',
            type: 'POST',
            data: datos,
            contentType: false,
            processData: false,
            success: function (datos){
                $('#respuesta').html(datos);
            }
        })

        e.preventDefault();
	});
	
	


	});	 
	 
	// menu

	function enviarDatos(id){
		document.getElementById("ajax").value = id; 
		cadena = "id=" + id;
		$.ajax({
			url: 'php/cantidad.php',
			type:'POST',
			data: cadena,
			success: function(respuesta){
				let menu = JSON.parse(respuesta);
				let templase = '';
				menu.forEach(element => {
					templase += `
		<div class="card" style="width: 18rem;">
        	<img src="img/${element.imagen}" class="card-img-top" alt="...">
			  <div class="card-body">
				<input type="text" id="real" hidden value="${element.index}" ></input>
			  	<input id="input-nombre" hidden  value="${element.nombre}" ></input>
			  	<h6 name="labelPrecio" id="labelPrecio"  class="card-title"><i class="fas fa-dollar-sign"></i>  ${element.precio}</h6>
			  	<input id="input-precio" hidden value="${element.precio}" ></input>
				<p class="card-text">${element.descripcion}</p>
				<h6>Cantidad: </h6><input type="text"  value="1"  id="input_s">
			</div>
        </div>
					`
				});
				$('#carta-bd').html(templase);
			}
		})

		
	
	}

	function enviarNombres(id){
		cadena = "id=" + id;
		$.ajax({
			url: 'php/cantidad.php',
			type:'POST',
			data: cadena,
			success: function(respuesta){
				let menu = JSON.parse(respuesta);
				let templase = '';
				menu.forEach(element => {
					templase += `
					<h4>${element.nombre}</h4>
					`
				});
				$('#combo-nombre').html(templase);
			}
		})
	}


	
	function suma(){
		var valor = parseInt(document.getElementById('input_s').value);
		valor = valor + 1;
		document.getElementById('input_s').value = valor;
	}

	function resta(){
		if(parseInt(document.getElementById('input_s').value)>=1){
			var valor = parseInt(document.getElementById('input_s').value);
			valor -=  + 1;
			document.getElementById('input_s').value = valor;
		}
	}

		
	function insertarDetalle(){
		var aux = document.getElementById("detalleid").value;
		console.log(aux); 
		const postData = { //Creacion del objeto 
			orden: $('#detalleid').val(),
			real: $('#real').val(),
			cantidad: $('#input_s').val()
		};

		console.log(postData);
		$.post('php/carrito.php', postData, function (response){
			console.log('Datos guardados');
		});
		

		}
 




	

	
	
