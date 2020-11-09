var cal=[], i=0, mul=[];
var oper=0;

$(document).ready(function(){
    //llenar tabla
    $.ajax({
        url: 'php/modal1.php',
        type:'GET',
        success: function(respuesta){
            let menu= JSON.parse(respuesta);
            
            let templase = '';
            
            menu.forEach(element => {
                templase += `
                        <tr>
                            <th scope="row">${element.id}</th>
                            <td>${element.des}</td>
                            <td>${element.nombre}</td>
                            <td>  
                                <button type="submit" class="btn btn-success btn-sm btn-block" onclick="agregar(${element.id})">
                                    <i class="fas fa-plus fa-xs"></i>
                                </button>   
                            </td>
                        </tr> 
                `
                
            });
            $('#productos').html(templase);
        }
    })
   document.getElementById("Modificar").style.display = "none";
    document.getElementById("id2").style.display = "none";
    document.getElementById("id").style.display = "none";
    document.getElementById("id3").style.display = "none";
 
});

//agregar datos a tabla
function agregar(id){
    cadena="id="+id;
    
    $.ajax({
        type:"POST",
        url: 'php/modal2.php',
        data: cadena,
        success: function(respuesta){
            let menu= JSON.parse(respuesta);
            let templase = '';        
            menu.forEach(element => {
                templase += `
                        <tr id="${element.id}">
                            <th scope="row">${element.nombre}</th>
                            <td>
                                
                                <input type="text" id="can${element.id}" class="form-control txt-tabla" >
                            </td>
                            <td>
                                <select id="med${element.id}"  class="form-control txt-tabla">
                                    <option selected>Pequeño</option>
                                    <option>Mediano</option>
                                    <option>Grande</option>
                                </select>
                            </td>
                            <td>
                                <input type="text" id="cos${element.id}" onkeyup="Calculos(${element.id})" class="form-control txt-tabla" >
                            </td>
                            <td>  
                                <button type="button" class="btn btn-danger btn-sm btn-block" onclick="eliminar(${element.id})">
                                    <i class="fas fa-trash fa-xs"></i>
                                </button> 
                            </td>
                            <td>  
                                <div id="Check${element.id}" class="custom-control custom-switch" style="display:none;">
                                    <input type="checkbox" class="custom-control-input" onclick="IngreElim(${element.id})" id="customSwitch${element.id}"   >
                                    <label class="custom-control-label" for="customSwitch${element.id}"></label>
                                </div>
                            </td>  
                        </tr> 
                `
                cal[i]=element.id;
                i=i+1;
            });
            $('#productoselect').append(templase);
           
        }

    });
    

}


//eliminar fila de la tabla
function eliminar(id){
  /*  var id_insumo = id;
    var cantidad = '#can'+id;
    var medida = '#med'+id;
    var u_costo = '#cos'+id;
    const postDatos={
        id_res: $('#id3').val(),
        id_ins: id_insumo,
        cant: $(cantidad).val(),
        medi: $(medida).val(),
        u_cos: $(u_costo).val(),

    }
    console.log(deletDatos);
    $.post('php/eliminarDatos.php',deletDatos,function(response){
            
    });*/

    var costoT=0;
    var costoP=0;
    if(mul[id]!=null){
        oper=oper-mul[id];
        mul[id]=null;
    }
    

    var num =document.getElementById("num").value;
    var por =document.getElementById("por").value;
    por='0.'+por;

    if(por!=0){
        costoT=oper+(oper*por);
        if(num!=0){
            costoP=costoT/num;
        }
    }
    document.getElementById("cosM").value=oper;
    document.getElementById("cosP").value=costoP;
    document.getElementById("cosT").value=costoT;


    $('#'+id).remove(); 

}
//enviar datos de un input a otro
function enviarTexto(){
    var txtnom=document.getElementById("nom2").value;
    var txtnum=document.getElementById("num2").value;
    var txttam=document.getElementById("tam2").value;
    var txtpor=document.getElementById("por2").value;
    
    document.getElementById("nom").value=txtnom;
    document.getElementById("num").value=txtnum;
    document.getElementById("tam").value=txttam;
    document.getElementById("por").value=txtpor;

    //insertar en receta
    var datos = new FormData($('#formModal')[0])
    $.ajax({
        url:'php/InsertReseta.php',
        type: 'POST',
        data: datos,
        contentType: false,
        processData: false,
        success: function (id){
            document.getElementById("formModal").reset();
            let menu= JSON.parse(id);
             menu.forEach(element => {
                document.getElementById("id2").value=element.id;
                document.getElementById("id3").value=element.id;
                
                document.getElementById("id").value=element.id;
                document.getElementById("nom2").value=element.nom;
                document.getElementById("num2").value=element.num;
                document.getElementById("tam2").value=element.tam;
                document.getElementById("por2").value=element.por;
             });
             
        }
    })
   
}
function ModificarReseta(){
    var txtnom=document.getElementById("nom2").value;
    var txtnum=document.getElementById("num2").value;
    var txttam=document.getElementById("tam2").value;
    var txtpor=document.getElementById("por2").value;
    
    document.getElementById("nom").value=txtnom;
    document.getElementById("num").value=txtnum;
    document.getElementById("tam").value=txttam;
    document.getElementById("por").value=txtpor;

    //insertar en receta
    var datos1 = new FormData($('#formModal')[0])
    $.ajax({
        url:'php/ModReseta.php',
        type: 'POST',
        data: datos1,
        contentType: false,
        processData: false,
        success: function (id){
            
        }
    })
}
//Actualizr receta
function Actualizar(){
    document.getElementById("cosM").disabled = false;
    document.getElementById("cosT").disabled = false;
    document.getElementById("cosP").disabled = false;

    
    var datos3 = new FormData($('#Form_Act')[0])
    $.ajax({
        url:'php/ActReseta.php',
        type: 'POST',
        data: datos3,
        contentType: false,
        processData: false,
        success: function (id){
            
        }
    })
    document.getElementById("cosM").disabled = true;
    document.getElementById("cosT").disabled = true;
    document.getElementById("cosP").disabled = true;
    
}

//ocultar boton
function Ocultar(){
    document.getElementById("Inseratar").style.display = "none";
    document.getElementById("Modificar").style.display = "block";
}

function Calculos(id){

    var costoT=0;
    var costoP=0;
    
    var nom1 = '#cos'+id;
    var nom2 = '#can'+id;
    var cos=$(nom1).val();
    var can=$(nom2).val();
    
    if(mul[id]!=null){   
        oper=oper-mul[id];
        mul[id]=0;
        mul[id]=(cos*can);
        oper=oper+mul[id];
 
    }else{
        mul[id]=(cos*can);       
        oper=oper+mul[id];
    }
            
    


    var num =document.getElementById("num").value;
    var por =document.getElementById("por").value;
    por='0.'+por;

    if(por!=0){
        costoT=oper+(oper*por);
        if(num!=0){
            costoP=costoT/num;
        }
    }
    var chec='Check'+id;
    document.getElementById("cosM").value=oper;
    document.getElementById("cosP").value=costoP;
    document.getElementById("cosT").value=costoT;
    document.getElementById(chec).style.display= "block";
}
    
function IngreElim(id){
    var nuevo= 'customSwitch'+id;
    var checkBox = document.getElementById(nuevo);
    if (checkBox.checked == true){
       
        
        var id_insumo = id;
        var cantidad = '#can'+id;
        var medida = '#med'+id;
        var u_costo = '#cos'+id;
        const postDatos={
            id_res: $('#id3').val(),
            id_ins: id_insumo,
            cant: $(cantidad).val(),
            medi: $(medida).val(),
            u_cos: $(u_costo).val(),

        }
        console.log(postDatos);
        $.post('php/ingresrDatos.php',postDatos,function(response){
            
        });

    } else {
        const deletDatos={
            id_res: $('#id3').val(),
            id_ins: id,
        }
        console.log(deletDatos);
        $.post('php/eliminarDatos.php',deletDatos,function(response){
            
        });
    }
}