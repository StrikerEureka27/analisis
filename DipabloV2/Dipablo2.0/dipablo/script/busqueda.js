$(document).ready(function(){

    console.log('Jquery is working!');

    $('#search').keyup(function(){
       let search =  $('#search').val();
       console.log(search);
       $.ajax({
           url: 'php/busqueda.php', 
           type: 'POST', 
           data: { search },
           success: function(response){
               let clients =  JSON.parse(response);
               let template = '';
               clients.forEach(client =>{
                   template += `
                <li class="list-group-item d-flex justify-content-between lh-condensed">
                    <div>
                        <h6 class="my-0">${client.nombre} ${client.apellido}</h6>
                        <small class="text-muted"> nit: ${client.nit}</small>
                    </div>
                </li>
                   `
               });
               $('#lista-cliente').html(template);
           }
       })
    })

    $.ajax({
        url: 'php/cuenta-cliente.php',
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

      $('#carrito').submit(function(e) {

        var languages = [];  
        $('.get_value').each(function(){  
            if($(this).is(":checked"))  
            {  
                    languages.push($(this).val());  
            }  
        });  
        
        
        languages = languages.toString();
        console.log(languages);

        const postData = { //Creacion del objeto 
            nombre: $('#firstName').val(),
            apellido: $('#lastName').val(),
            nit: $('#search').val(),
            languages: languages
        };
        $.post('php/insertar-orden.php', postData, function (response) {
            // alert('Datos ingresados correctamente');
        });
        e.preventDefault();
    });


});


