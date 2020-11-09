$(document).ready(function(){
	// Mensaje en la consola
	console.log('J Query is Working');
	
	$.ajax({
	url: 'php/lista-carrito.php',
	type: 'GET',
	success: function(r){
		let tasks = JSON.parse(r);
		let template = '';
		tasks.forEach(task =>{
			template += `
			<tr id="${task.id}">
              <th scope="row">${task.nombre}</th>
              <td>Q. ${task.precio}</td>
              <td>${task.cantidad}</td> 
              <td><button  type="button" onClick="eliminarRow(${task.id})" class="btn btn-outline-danger"><i class="fas fa-trash"></i></button></td> 
            </tr>
			`
	  });

		$('#template-table').html(template);
	 }

  })

  $.ajax({
	url: 'php/lista-carrito.php',
	type: 'GET',
	success: function(r){
		let tasks = JSON.parse(r);
		let template = '';
		tasks.forEach(task =>{
			template = `
			<span  class="badge badge-secondary badge-pill">${task.numero}</span>
			`
	  });

		$('#numero-reg').html(template);
	 }

  })

  $.ajax({
	url: 'php/actual-cliente.php',
	type: 'GET',
	success: function(r){
		let tasks = JSON.parse(r);
		let template = '';
		tasks.forEach(task =>{
			template = `
			<div class="row">
			<div class="col-md-6 mb-3">
			  <label for="firstName">Nombre</label>
			  <input type="text" class="form-control" id="firstName" placeholder="" value="${task.nombre}" required>
			  <div class="invalid-feedback">
				Valid first name is required.
			  </div>
			</div>
			<div class="col-md-6 mb-3">
			  <label for="lastName">Apellido</label>
			  <input type="text" class="form-control" id="lastName" placeholder="" value="${task.apellido}" required>
			  <div class="invalid-feedback">
				Valid last name is required.
			  </div>
			</div>
		  </div>
		  <div class="mb-3">
			<label for="username">Nit</label>
			<div class="input-group">
			  <div class="input-group-prepend">
				<span class="input-group-text">#</span>
			  </div>
			  <input type="text" class="form-control" value="${task.id}" id="username" placeholder="808376-5" required>
			  <div class="invalid-feedback" style="width: 100%;">
				Your username is required.
			  </div>
			</div>
		  </div>
			`
	  });

		$('#todos').html(template);
	 }

  })






});


function eliminarRow(id){
	$('#'+id).remove();
	var dataString = 'id='+id;
        $.ajax({
            type: "POST",
            url: "php/eliminar-carrito.php",
            data: dataString,
            success: function(response) {			
                $('.alert-success').empty();
                $('.alert-success').append(response).fadeIn("slow");
                $('#'+parent).fadeOut("slow");
            }
        });
}




 



