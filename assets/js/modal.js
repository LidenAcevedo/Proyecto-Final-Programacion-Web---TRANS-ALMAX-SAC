/*=========================================================
            TRANS ALMAX SAC
            MODALES
=========================================================*/


document.addEventListener("DOMContentLoaded",()=>{


    console.log("TRANS-ALMAX SAC | Modal activo 🚛");



    // =====================================================
    // CREACIÓN DEL MODAL DINÁMICO
    // =====================================================


    const modal = document.createElement("div");


    modal.className = "modal-trans";



    modal.innerHTML = `

        <div class="modal-contenido">

            <span class="cerrar-modal">&times;</span>

            <h2>TRANS-ALMAX SAC 🚛</h2>

            <p>
            Solicitud recibida correctamente.
            </p>

            <p>
            Nuestro equipo revisará la información
            y se comunicará con usted.
            </p>

            <button class="btn-modal">
                Aceptar
            </button>

        </div>

    `;



    document.body.appendChild(modal);






    // =====================================================
    // ELEMENTOS DEL MODAL
    // =====================================================


    const cerrar =
    modal.querySelector(".cerrar-modal");



    const botonAceptar =
    modal.querySelector(".btn-modal");






    // =====================================================
    // FUNCIÓN ABRIR MODAL
    // =====================================================


    function abrirModal(){


        modal.classList.add("mostrar");


    }





    // =====================================================
    // FUNCIÓN CERRAR MODAL
    // =====================================================


    function cerrarModal(){


        modal.classList.remove("mostrar");


    }






    // EVENTO CLICK X


    cerrar.addEventListener("click",()=>{


        cerrarModal();


    });






    // EVENTO BOTÓN ACEPTAR


    botonAceptar.addEventListener("click",()=>{


        cerrarModal();


    });







    // CERRAR AL HACER CLICK FUERA


    window.addEventListener("click",(e)=>{


        if(e.target === modal){


            cerrarModal();


        }


    });






    // =====================================================
    // FUNCIÓN GLOBAL PARA USAR DESDE OTROS JS
    // =====================================================


    window.mostrarModalTrans = abrirModal;



});