// Función para capturar los datos del usuario
//El funcionamiento del formulario hace que cuando le demos al boton se actualize la pagina
function inventario(){
    const postData = { //Creacion del objeto 
        nombre: $('#inputInsumo').val(),
        fcompra: $('#inputCompra').val(),
        fvence: $('#inputVencimiento').val(),
        cantidad: $('#inputCantidad').val(),
        marca: $('#inputMarca').val(),
        stipo: $('#selectTipo').val(),
        spaquete: $('#selectPaquete').val()
    };
    $.post('php/principal3.php', postData, function (response) {
        Swal.fire({
                      icon: 'success',
                      title: 'Datos guardados',
        })
    });
}