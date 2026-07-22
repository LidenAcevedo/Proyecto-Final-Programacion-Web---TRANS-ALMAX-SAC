/*=========================================================
            TRANS ALMAX SAC
            SLIDER PRINCIPAL
=========================================================*/


document.addEventListener("DOMContentLoaded",()=>{


    console.log("TRANS-ALMAX SAC | Slider activo 🚛");



    // =========================================
    // CONFIGURACIÓN DEL SLIDER
    // =========================================


    const slides = document.querySelectorAll(".slide");


    let posicion = 0;



    if(slides.length > 0){



        function cambiarSlide(){


            slides.forEach((slide)=>{


                slide.classList.remove("activo");


            });




            slides[posicion].classList.add("activo");



            posicion++;



            if(posicion >= slides.length){


                posicion = 0;


            }


        }




        setInterval(cambiarSlide,4000);



    }



});