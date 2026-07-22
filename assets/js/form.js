/*=========================================================
            TRANS ALMAX SAC
            VALIDACIÓN DE FORMULARIOS
=========================================================*/


document.addEventListener("DOMContentLoaded",()=>{



    // =====================================================
    // ARRAY DE SOLICITUDES
    // Simulación de futura conexión con backend
    // =====================================================


    let solicitudes = [];





    // =====================================================
    // FUNCIÓN MENSAJE
    // =====================================================


    function mostrarMensaje(texto){

        alert(texto);

    }






    // =====================================================
    // FORMULARIO CONTACTO
    // =====================================================


    const contactForm = document.getElementById("contactForm");



    if(contactForm){



        contactForm.addEventListener("submit",(e)=>{


            e.preventDefault();



            const nombre = document
            .getElementById("contactoNombre")
            .value
            .trim();



            const correo = document
            .getElementById("contactoCorreo")
            .value
            .trim();



            const asunto = document
            .getElementById("contactoAsunto")
            .value
            .trim();



            const mensaje = document
            .getElementById("contactoMensaje")
            .value
            .trim();






            if(nombre === ""){

                mostrarMensaje(
                    "Ingrese su nombre completo"
                );

                return;

            }





            if(correo === ""){

                mostrarMensaje(
                    "Ingrese su correo electrónico"
                );

                return;

            }





            const expresionCorreo =
            /^[^\s@]+@[^\s@]+\.[^\s@]+$/;





            if(!expresionCorreo.test(correo)){


                mostrarMensaje(
                    "Ingrese un correo electrónico válido"
                );

                return;


            }





            if(asunto === ""){

                mostrarMensaje(
                    "Ingrese el asunto del mensaje"
                );

                return;

            }





            if(mensaje === ""){

                mostrarMensaje(
                    "Ingrese su mensaje"
                );

                return;

            }






            const confirmar = confirm(

                "¿Desea enviar este mensaje a TRANS-ALMAX SAC?"

            );






            if(confirmar){



                solicitudes.push({


                    nombre:nombre,

                    correo:correo,

                    asunto:asunto,

                    mensaje:mensaje


                });




                console.log(
                    "Solicitudes registradas:",
                    solicitudes
                );




                mostrarModalTrans();



                contactForm.reset();



            }





        });



    }









    // =====================================================
    // FORMULARIO COTIZACIÓN
    // =====================================================


    const quotationForm =
    document.getElementById("quotationForm");





    if(quotationForm){



        quotationForm.addEventListener("submit",(e)=>{


            e.preventDefault();





            const confirmar = confirm(

                "¿Confirma enviar la solicitud de cotización?"

            );







            if(confirmar){



                solicitudes.push({


                    tipo:"Cotización",

                    fecha:new Date().toLocaleString()


                });





                console.log(

                    "Cotizaciones registradas:",
                    solicitudes

                );






                mostrarModalTrans();





                quotationForm.reset();



            }





        });



    }






});