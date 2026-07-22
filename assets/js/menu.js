/*=========================================================
            TRANS ALMAX SAC
            MENU RESPONSIVE
=========================================================*/


// Elementos del menú

const menuToggle = document.getElementById("menuToggle");

const navLinks = document.getElementById("navLinks");



// Abrir / cerrar menú móvil

if(menuToggle){

    menuToggle.addEventListener("click",()=>{


        navLinks.classList.toggle("active");


        // Cambiar icono hamburguesa

        const icon = menuToggle.querySelector("i");


        if(navLinks.classList.contains("active")){


            icon.classList.remove("fa-bars");

            icon.classList.add("fa-xmark");


        }else{


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");


        }


    });


}



// Cerrar menú al seleccionar una opción

document.querySelectorAll(".nav-links a").forEach(link=>{


    link.addEventListener("click",()=>{


        navLinks.classList.remove("active");


        const icon = menuToggle.querySelector("i");


        if(icon){


            icon.classList.remove("fa-xmark");

            icon.classList.add("fa-bars");


        }


    });


});

