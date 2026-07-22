const http = require('http');
const fs = require('fs');
const path = require('path');


const PUERTO = 5502;



const servidor = http.createServer((req,res)=>{


// ===============================
// CORS
// ===============================

res.setHeader(
'Access-Control-Allow-Origin',
'*'
);


res.setHeader(
'Access-Control-Allow-Headers',
'Content-Type'
);


res.setHeader(
'Access-Control-Allow-Methods',
'GET, POST, OPTIONS'
);



if(req.method==="OPTIONS"){

res.writeHead(200);
res.end();

return;

}





// =================================================
// GUARDAR COTIZACIONES
// =================================================


if(
req.url==="/guardar-cotizacion"
&&
req.method==="POST"
){


let cuerpo="";



req.on(
"data",
chunk=>{

cuerpo+=chunk;

}

);



req.on(
"end",
()=>{


try{


const datos =
JSON.parse(cuerpo);



const carpeta =
path.join(
__dirname,
"database"
);



if(!fs.existsSync(carpeta)){

fs.mkdirSync(carpeta);

}




const archivo =
path.join(
carpeta,
"cotizaciones.json"
);



if(!fs.existsSync(archivo)){

fs.writeFileSync(
archivo,
"[]"
);

}




let cotizaciones =
JSON.parse(
fs.readFileSync(
archivo,
"utf8"
)
);



datos.id =
cotizaciones.length + 1;



datos.codigoCotizacion =

"COT-" +

String(datos.id)
.padStart(5,"0");



datos.fechaRegistro =

new Date()
.toLocaleString("es-PE");



cotizaciones.push(datos);




fs.writeFileSync(

archivo,

JSON.stringify(
cotizaciones,
null,
4
)

);




console.log(
"================================="
);

console.log(
"📦 NUEVA COTIZACIÓN GUARDADA"
);

console.log(datos);


console.log(
"================================="
);




res.writeHead(
200,
{
"Content-Type":
"application/json"
}
);



res.end(

JSON.stringify({

ok:true,

codigo:
datos.codigoCotizacion

})

);



}

catch(error){


console.log(
error
);



res.writeHead(
500,
{
"Content-Type":
"application/json"
}
);



res.end(

JSON.stringify({

ok:false

})

);



}



}

);



return;


}








// =================================================
// ENVIAR COTIZACIONES AL PANEL ADMIN
// =================================================


if(
req.url==="/cotizaciones"
&&
req.method==="GET"
){



const archivo =

path.join(

__dirname,

"database",

"cotizaciones.json"

);





if(fs.existsSync(archivo)){



const datos =

fs.readFileSync(

archivo,

"utf8"

);



res.writeHead(
200,
{
"Content-Type":
"application/json"
}
);



res.end(datos);



}

else{


res.writeHead(
200,
{
"Content-Type":
"application/json"
}
);



res.end("[]");



}



return;


}

// ===============================
// GUARDAR COTIZACION
// ===============================

if(
    req.url === "/guardar-cotizacion"
    &&
    req.method === "POST"
){

   // todo tu código de guardar
   // ...
   
   return;

}



// ===============================
// ELIMINAR COTIZACION
// ===============================

if(
    req.url.startsWith("/eliminar-cotizacion")
    &&
    req.method === "DELETE"
){

    const id =
    parseInt(
        req.url.split("=")[1]
    );


    const archivo =
    path.join(
        __dirname,
        "database",
        "cotizaciones.json"
    );


    try{

        let cotizaciones =
        JSON.parse(
            fs.readFileSync(
                archivo,
                "utf8"
            )
        );


        const nuevasCotizaciones =
        cotizaciones.filter(
            cotizacion =>
            cotizacion.id !== id
        );


        fs.writeFileSync(
            archivo,
            JSON.stringify(
                nuevasCotizaciones,
                null,
                4
            )
        );


        res.writeHead(
            200,
            {
                "Content-Type":
                "application/json"
            }
        );


        res.end(
            JSON.stringify({
                ok:true
            })
        );


    }catch(error){


        res.writeHead(
            500,
            {
                "Content-Type":
                "application/json"
            }
        );


        res.end(
            JSON.stringify({
                ok:false
            })
        );


    }


    return;

}






// =================================================
// SERVIR ARCHIVOS HTML CSS JS IMAGENES
// =================================================



let archivoSolicitado =

req.url==="/"

?

"index.html"

:

req.url;



let rutaArchivo =

path.join(

__dirname,

archivoSolicitado

);





fs.readFile(

rutaArchivo,

(error,contenido)=>{



if(error){


res.writeHead(404);

res.end(
"Archivo no encontrado"
);


return;


}





const extension =
path.extname(rutaArchivo);



const tipos = {


".html":
"text/html",

".css":
"text/css",

".js":
"application/javascript",

".json":
"application/json",

".jpg":
"image/jpeg",

".png":
"image/png",

".webp":
"image/webp"


};





res.writeHead(

200,

{

"Content-Type":

tipos[extension] ||

"text/plain"

}

);



res.end(contenido);



}



);



});







servidor.listen(

PUERTO,

()=>{


console.log(
"===================================="
);


console.log(
" TRANS ALMAX SAC - SERVIDOR"
);


console.log(
"===================================="
);


console.log(
"🚀 Servidor activo:"
);


console.log(

`http://localhost:${PUERTO}`

);


console.log(
"===================================="
);



}

);

