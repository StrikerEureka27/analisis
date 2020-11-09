
$(document).ready(function() {

    //llenar tabla
    $.ajax({
        url: 'php/c_reales.php',
        type:'GET',
        success: function(respuesta){
            let menu= JSON.parse(respuesta);          
            let templase = '';
            menu.forEach(element => {
                templase += `
                        <tr>
                            <th scope="row">${element.nombre}</th>
                                <td><input type="text" value="${element.c_porcion}" id="c_porc${element.id}" class="form-control txt-tabla" disabled></td>
                                <td><input type="text" value="${element.m_obra}" id="m_obra${element.id}" onkeyup="Suma(${element.id})" class="form-control txt-tabla" ></td>
                                <td><input type="text" value="${element.g_opera}" id="g_opera${element.id}" onkeyup="Suma(${element.id})" class="form-control txt-tabla" ></td>
                                <td><input type="text" value="${element.c_reales}" id="c_reales${element.id}" class="form-control txt-tabla" disabled></td>
                                <td><input type="text" value="${element.utilidad}" id="utilidad${element.id}" onkeyup="Porsentaje(${element.id})" class="form-control txt-tabla" ></td>
                                <td><input type="text" value="${element.ganancia}" id="ganancia${element.id}" class="form-control txt-tabla" disabled></td>
                                <td><input type="text" value="${element.p_venta}" id="p_venta${element.id}" class="form-control txt-tabla" disabled></td>
                            <td>
                            <button type="submit" class="btn btn-success btn-sm btn-block" onclick="Guardar(${element.id})">
                                <i class="fas fa-save"></i>
                            </button> 
                            </td>
                        </tr>
                `
                
            });
            $('#resetas').html(templase);
        }
    })
});

function Suma(id){
    var nom_0 = '#c_porc'+id;
    var nom_1 = '#m_obra'+id;
    var nom_2 = '#g_opera'+id;
    var nom_3 = 'c_reales'+id; 

    var c_porc = new Number($(nom_0).val());
    var m_obra = new Number($(nom_1).val());
    var g_opera = new Number($(nom_2).val());
    var ope=0;

    ope=m_obra+g_opera+c_porc;
    
    document.getElementById(nom_3).value=ope;
}
function Porsentaje(id){
    var nom_0= '#utilidad'+id;
    var nom_1= '#c_reales'+id;
    var nom_2 = 'ganancia'+id; 
    var nom_3 = 'p_venta'+id; 

    var c_reales = new Number($(nom_1).val()); 
    var utilidad= new Number($(nom_0).val());
    var oper1=0, oper2;

    oper1=c_reales * (utilidad/100);
    oper2=oper1+c_reales;


    document.getElementById(nom_2).value=oper1;
    document.getElementById(nom_3).value=oper2;
}
function Guardar(id){
    var nom_1 = '#m_obra'+id;
    var nom_2 = '#g_opera'+id;
    var nom_3 = '#c_reales'+id;
    var nom_4= '#utilidad'+id;
    var nom_5 = '#ganancia'+id; 
    var nom_6 = '#p_venta'+id; 
    const postDatos={
        id: id,
        m_obra:  $(nom_1).val(),
        g_opera:  $(nom_2).val(),
        c_reales: $(nom_3).val(),
        utilidad: $(nom_4).val(),
        ganancia: $(nom_5).val(),
        p_venta: $(nom_6).val()
    }

    console.log(postDatos);
    $.post('php/Mod_c_rea les.php',postDatos,function(response){
            
    });
            
}