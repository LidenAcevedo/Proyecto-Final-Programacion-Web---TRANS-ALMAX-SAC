/*=========================================================
        TRANS-ALMAX SAC
        SISTEMA PROFESIONAL DE COTIZACIONES
        FRONTEND + NODE.JS
=========================================================*/


document.addEventListener("DOMContentLoaded",()=>{


const formulario =
document.getElementById("quotationForm");



if(!formulario){

console.log(
"Formulario no encontrado"
);

return;

}




formulario.addEventListener(
"submit",
(e)=>{


e.preventDefault();




// CAPTURA DE DATOS


const cotizacion = {


nombre:
document.getElementById("nombre").value.trim(),



correo:
document.getElementById("correo").value.trim(),



telefono:
document.getElementById("telefono")?.value.trim() || "",




servicio:

Array.from(

document.querySelectorAll(
'input[name="servicio"]:checked'
)

)

.map(item => item.value),




origen:
document.getElementById("origen").value.trim(),




destino:
document.getElementById("destino").value.trim(),




fecha:
document.getElementById("fecha")?.value || "",




peso:
document.getElementById("peso")?.value || "",




mensaje:
document.getElementById("mensaje").value.trim(),



fechaSolicitud:
new Date().toLocaleString("es-PE")


};






// ============================
// VALIDACIONES
// ============================


if(

cotizacion.nombre === "" ||

cotizacion.correo === "" ||

cotizacion.origen === "" ||

cotizacion.destino === "" ||

cotizacion.servicio.length === 0


){


alert(
"⚠️ Complete todos los campos obligatorios"
);


return;


}







const correoValido =
/^[^\s@]+@[^\s@]+\.[^\s@]+$/;



if(
!correoValido.test(cotizacion.correo)
){


alert(
"⚠️ Ingrese un correo electrónico válido"
);


return;


}








console.log(
"📦 Enviando cotización:",
cotizacion
);







// ============================
// ENVIO A NODE.JS
// ============================


fetch(
"http://localhost:5502/guardar-cotizacion",
{


method:"POST",



headers:{


"Content-Type":
"application/json"


},



body:
JSON.stringify(cotizacion)



}

)




.then(
respuesta=>respuesta.json()
)




.then(
(data)=>{


console.log(
"Respuesta servidor:",
data
);




if(data.ok){


alert(

"✅ Cotización registrada correctamente\n\n"+

"Código de seguimiento: "+

data.codigo+

"\n\nTRANS-ALMAX SAC se comunicará con usted."

);



formulario.reset();



}else{


alert(
"❌ Error al guardar la cotización"
);


}



}

)







.catch(
(error)=>{


console.error(
"Error servidor:",
error
);



alert(

"⚠️ No se pudo conectar con Node.js.\n\n"+

"Verifique que servidor.js esté ejecutándose."

);



}

);



}


);



});


