/*=========================================================
            TRANS ALMAX SAC
            SCRIPT GENERAL
=========================================================*/

document.addEventListener("DOMContentLoaded",()=>{

    console.log("TRANS-ALMAX SAC | Scripts activos");

    // =========================================
    // ANIMACIÓN AL HACER SCROLL
    // =========================================

    const elements = document.querySelectorAll(
        ".service-card, .fleet-card, .process-card, .why-card, .testimonial-card"
    );

    const reveal = ()=>{

        elements.forEach(element=>{

            const position = element.getBoundingClientRect().top;

            const windowHeight = window.innerHeight;

            if(position < windowHeight - 80){

                element.classList.add("visible");

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();

});
