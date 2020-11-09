
$(document).ready(function(){
    //llenar tabla
    $.ajax({
        url: 'php/inventario.php',
        type:'GET',
        success: function(respuesta){
            let menu= JSON.parse(respuesta);
            
            let templase = '';
            
            menu.forEach(element => {
                templase += `
                <tr>
                    <th scope="row">${element.id}</th>
                    <td>${element.nombre}</td>
                    <td>${element.marca}</td>
                    <td>${element.cantidad}</td>
                    <td>${element.medida}</td>
                    <td>${element.precio}</td>
                </tr> 
                `
                
            });
            $('#tablaizq').html(templase);
        }
    })
    
});
