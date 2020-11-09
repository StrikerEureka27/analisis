
$(document).ready(function(){
    //llenar tabala 
    $.ajax({
        url: 'php/receta.php',
        type: 'GET',
        success: function(respuesta){

            let menu= JSON.parse(respuesta);
            let templase = '';

            menu.forEach(element => {
                templase += `
                <tr>
                    <th>${element.id}</th>
                    <td>${element.id_insumo}</td>
                    <td>${element.cantidad}</td>
                    <td>${element.medida}</td>
                    <td>${element.unidad}</td>
                </tr>
                `
            });
            $('#tablaizq').html(templase);
        }
    })
});