/*====================================================
        TRANS-ALMAX SAC
        ADMIN DASHBOARD PRO
====================================================*/


let cotizacionesGlobal = [];





document.addEventListener(
"DOMContentLoaded",
()=>{


cargarCotizaciones();




document
.getElementById("btnActualizar")
.addEventListener(
"click",
()=>{

cargarCotizaciones();

}

);





document
.getElementById("buscarCotizacion")
.addEventListener(
"keyup",
(e)=>{


buscarCliente(
e.target.value
);


}

);





});








function cargarCotizaciones(){



fetch(
"http://localhost:5502/cotizaciones"
)


.then(res=>res.json())


.then(datos=>{


cotizacionesGlobal = datos;


mostrarTabla(datos);


actualizarContadores(datos);



})


.catch(error=>{


console.error(error);


alert(
"Error conectando con servidor"
);


});


}










function mostrarTabla(datos){


const tabla =
document.getElementById(
"tablaCotizaciones"
);



tabla.innerHTML="";




datos.forEach(cotizacion=>{



let servicios =

Array.isArray(cotizacion.servicio)

?

cotizacion.servicio.join("<br>")

:

cotizacion.servicio;





let fila =
document.createElement(
"tr"
);





fila.innerHTML = `


<td>

${cotizacion.codigoCotizacion || cotizacion.codigo}

</td>


<td>

${cotizacion.nombre}

</td>



<td>

${servicios}

</td>



<td>

${cotizacion.origen}
-
${cotizacion.destino}

</td>



<td>

${cotizacion.fechaRegistro || ""}

</td>




<td>

<select>

<option>
Pendiente
</option>

<option>
En proceso
</option>

<option>
Finalizado
</option>


</select>


</td>


<td>

<button

class="btn-delete"

onclick="eliminarCotizacion(${cotizacion.id})">

🗑️ Eliminar

</button>

</td>




`;




tabla.appendChild(fila);



}

);



}









function actualizarContadores(datos){



document
.getElementById(
"totalCotizaciones"
)
.textContent =
datos.length;





let totalServicios=0;



datos.forEach(c=>{


if(Array.isArray(c.servicio)){


totalServicios +=
c.servicio.length;


}else{


totalServicios++;

}


});





document
.getElementById(
"totalServicios"
)
.textContent =
totalServicios;



}










function buscarCliente(texto){



let resultado =

cotizacionesGlobal.filter(

c=>

c.nombre
.toLowerCase()
.includes(
texto.toLowerCase()
)


);



mostrarTabla(resultado);



}










function eliminarCotizacion(id){

    const confirmar = confirm(
        "¿Eliminar esta cotización?"
    );

    if(!confirmar){
        return;
    }

    fetch(
        `http://localhost:5502/eliminar-cotizacion?id=${id}`,
        {
            method: "DELETE"
        }
    )

    .then(respuesta => respuesta.json())

    .then(data => {

        if(data.ok){

            alert(
                "✅ Cotización eliminada correctamente."
            );

            location.reload();

        }else{

            alert(
                "❌ No se pudo eliminar la cotización."
            );

        }

    })

    .catch(error => {

        console.error(error);

        alert(
            "⚠️ Error al conectar con el servidor."
        );

    });

}