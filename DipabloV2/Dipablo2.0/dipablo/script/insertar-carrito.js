$(document).ready(function(){  


$('#carrito').submit(function(e) {

    var languages = [];  
    $('.get_value').each(function(){  
        if($(this).is(":checked"))  
        {  
                languages.push($(this).val());  
        }  
    });  

    languages = languages.toString();  

    const postData = { //Creacion del objeto 
        telefono: $('#telefono').val(),
        celular: $('#celular').val(),
        dire: $('#address').val(),
        descripcion: $('#description').val(),
        languages: languages
    };
    $.post('php/insertar-carrito.php', postData, function (response) {
        alert('Datos ingresados correctamente');
    });
    e.preventDefault();
});

});