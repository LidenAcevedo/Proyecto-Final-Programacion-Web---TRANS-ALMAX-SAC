/*=========================================================
            TRANS ALMAX SAC
            APP PRINCIPAL
=========================================================*/


document.addEventListener("DOMContentLoaded",()=>{


    console.log("TRANS-ALMAX SAC | Scripts activos 🚛");



    // =====================================================
    // AÑO AUTOMÁTICO FOOTER
    // =====================================================


    function actualizarFooter(){


        const year = document.querySelector(".footer-bottom p");


        if(year){


            const currentYear = new Date().getFullYear();


            year.innerHTML =
            `© ${currentYear} TRANS-ALMAX SAC | Todos los derechos reservados.`;


        }


    }



    actualizarFooter();





    // =====================================================
    // BOTÓN SUBIR ARRIBA
    // =====================================================


    function botonArriba(){


        const btnTop = document.getElementById("btnTop");


        if(btnTop){


            window.addEventListener("scroll",()=>{


                if(window.scrollY > 500){


                    btnTop.classList.add("show");


                }else{


                    btnTop.classList.remove("show");


                }


            });



            btnTop.addEventListener("click",()=>{


                window.scrollTo({


                    top:0,


                    behavior:"smooth"


                });



            });



        }


    }



    botonArriba();





    // =====================================================
    // ARRAY DE SERVICIOS TRANS-ALMAX SAC
    // Cumple requisito: Arrays + Bucles
    // =====================================================


    const servicios = [


        "Transporte Nacional",

        "Transporte Local",

        "Logística Integral",

        "Almacenamiento",

        "Distribución"


    ];




    servicios.forEach((servicio)=>{


        console.log(
            "Servicio disponible: " + servicio
        );


    });






    // =====================================================
    // FUNCIÓN MENSAJE EMPRESA
    // =====================================================


    function mensajeEmpresa(nombre){


        return `Gracias ${nombre}, TRANS-ALMAX SAC atenderá su solicitud.`;


    }




    // =====================================================
    // EVENTO DE PRUEBA PARA INTERACCIÓN
    // Requisito: alert + prompt + confirm
    // =====================================================


    const botonContacto = document.querySelector(".btn-contacto");



    if(botonContacto){


        botonContacto.addEventListener("click",()=>{


            let nombreUsuario = prompt(
                "Ingrese su nombre para continuar:"
            );



            if(nombreUsuario){


                let respuesta = confirm(

                    "¿Desea solicitar información sobre nuestros servicios?"

                );



                if(respuesta){


                    alert(
                        mensajeEmpresa(nombreUsuario)
                    );


                }else{


                    alert(
                        "Consulta cancelada. Gracias por visitar TRANS-ALMAX SAC."
                    );


                }



            }



        });



    }




    // =====================================================
    // VALIDACIÓN GENERAL DE BOTONES CTA
    // =====================================================


    const botones = document.querySelectorAll("a");


    botones.forEach((boton)=>{


        boton.addEventListener("mouseenter",()=>{


            boton.style.cursor="pointer";


        });



    });





});



/*=========================================================
        CONTADORES HERO PRINCIPAL
=========================================================*/


const heroCounters = document.querySelectorAll(".hero-stats .counter");


heroCounters.forEach(counter => {


    const target = Number(counter.dataset.target);


    let valor = 0;


    const velocidad = target / 100;



    const actualizarHero = () => {


        if(valor < target){


            valor += velocidad;


            if(valor > target){

                valor = target;

            }


            counter.innerText =
            Math.floor(valor).toLocaleString() + "+";


            requestAnimationFrame(actualizarHero);


        }else{


            counter.innerText =
            target.toLocaleString() + "+";


        }


    };


    actualizarHero();


});





/*=========================================================
        CONTADORES DINÁMICOS ESTADÍSTICAS
=========================================================*/


const counters = document.querySelectorAll(".statistics .counter");


function iniciarContadores(){


    console.log("🚀 Iniciando contadores estadísticas");


    counters.forEach(counter => {


        const target = Number(counter.dataset.target);


        let valor = 0;


        const velocidad = target / 100;



        const actualizar = () => {


            if(valor < target){


                valor += velocidad;


                if(valor > target){

                    valor = target;

                }


                if(target >= 1000){


                    counter.innerText =
                    Math.floor(valor).toLocaleString() + "+";


                }else{


                    counter.innerText =
                    Math.floor(valor) + "+";


                }


                requestAnimationFrame(actualizar);


            }else{


                if(target >= 1000){


                    counter.innerText =
                    target.toLocaleString() + "+";


                }else{


                    counter.innerText =
                    target + "+";


                }


            }


        };


        actualizar();


    });


}



/*=========================================================
        ACTIVAR CONTADORES AL VER ESTADÍSTICAS
=========================================================*/


function iniciarContadores(){

    console.log("🚀 Iniciando contadores...");

    counters.forEach(counter => {

        const objetivo = Number(counter.dataset.target);

        console.log("Contador encontrado:", objetivo);


        let actual = 0;

        const velocidad = objetivo / 100;


        function actualizar(){

            actual += velocidad;


            if(actual < objetivo){

                counter.textContent = Math.ceil(actual);

                requestAnimationFrame(actualizar);

            }else{

                counter.textContent = objetivo;

            }

        }


        actualizar();


    });


}



/*=========================================================
        OBSERVER DE ESTADÍSTICAS
=========================================================*/


const statisticsSection =
document.querySelector(".statistics");


if(statisticsSection){


    console.log("📊 Sección estadísticas encontrada");


    const contadorObserver = 
    new IntersectionObserver(entries=>{


        entries.forEach(entry=>{


            if(entry.isIntersecting){


                console.log("✅ Observer activado");


                console.log("Contadores:", counters);


                iniciarContadores();


                contadorObserver.disconnect();


            }


        });


    },{

        threshold: 0.3

    });



    contadorObserver.observe(statisticsSection);



}else{


    console.log("❌ No existe la sección .statistics");


}




/*=========================================================
        NAVBAR PREMIUM
=========================================================*/

const navbar = document.querySelector(".navbar");

if (navbar) {

    window.addEventListener("scroll", () => {

        if (window.scrollY > 60) {

            navbar.classList.add("navbar-scroll");

        } else {

            navbar.classList.remove("navbar-scroll");

        }

    });

}