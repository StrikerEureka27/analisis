$(document).ready(function(){
	// Mensaje en la consola
	console.log('J Query is Working');
	
	$.ajax({
	url: 'php/recetatabla1.php',
	type: 'GET',
	success: function(r){
		let tasks = JSON.parse(r);
		let template = '';
		tasks.forEach(task =>{
			template += `
			<tr>
	            <th scope="row"> ${task.nombre} </th>
	            <td>${task.proveedor}</td>
	            <td>${task.marca}</td>
	            <td>  
               		<button type="submit" onClick="capturar(${task.id})" class=" ml-3 btn btn-success"><i class="fas fa-plus"></i></button>   
            	</td>
            </tr> 
			`
	  });

		$('#tablaizq').html(template);
	 }

  })


});



function capturar(id){
		cadena = "id=" + id;
		$.ajax({
			url: 'php/recetatabla2.php',
			type: 'POST',
			data: cadena, 
	success: function(r){
		let tablas = JSON.parse(r);
		let disenio = '';
		tablas.forEach(tabla =>{
			disenio += `
				  <tr id="${tabla.id}">
                            <th scope="row">${tabla.nombre}</th>
                            <td>
                                <input type="text" class="form-control txt-tabla" >
                            </td>
                            <td>
                                <input type="text" class="form-control txt-tabla">
                            </td>
                            <td>
                                <input type="text" class="form-control txt-tabla" >
                            </td>
                            <td>  
                                <button type="button" class="btn btn-danger btn-sm btn-block" onclick="eliminar(${tabla.id})">
                                    <i class="fas fa-trash fa-xs"></i>
                                </button> 
                           </td>
                    </tr> 
			`
	 		 });
			$('#tablader').append(disenio);
		}		

	});
}

function eliminar(id){
    $('#'+id).remove();
}



function enviarTexto(){
    var txtnom=document.getElementById("nom2").value;
    var txtnum=document.getElementById("num2").value;
    var txttam=document.getElementById("tam2").value;
    var txtpor=document.getElementById("por2").value;
    
    document.getElementById("nom").value=txtnom;
    document.getElementById("num").value=txtnum;
    document.getElementById("tam").value=txttam;
    document.getElementById("por").value=txtpor;
    
   
}