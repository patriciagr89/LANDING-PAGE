var i;

document.addEventListener('DOMContentLoaded', function (event)  {
    //Aqui dentro programar todo el codigo que modifique al DOM
    
    //creacion del acordeon para el template cv
    const accordion = document.getElementsByClassName("accordion"); //accedemos a los elementos con la clase 'accordion'

    for (i = 0; i < accordion.length; i++) {
        //añadimos el evento al hacer click
        accordion[i].addEventListener("click", function(event) {
            //alterna entre agregar y eliminar la clase 'active'
            this.classList.toggle("active");
            
            //alterna entre ocultar y mostrar el panel
            var panel = this.nextElementSibling;
            if (panel.style.display === "block") {
            panel.style.display = "none";
            } else {
                panel.style.display = "block";
            }
        });
    }

    //validaciones del contenido del formulario del template contacto
    const form = document.getElementById("form-box"); //recogemos el formulaRIO
    const nombre = document.getElementById("nombre");
    const email = document.getElementById("email");

    //hacemos las validaciones al ejecutar el evento 'submit'
    form.addEventListener("submit", function(event) {
        event.preventDefault(); // cancela el comportamiento por defecto

        if (nombre.value.length < 3) {
            alert("El nombre debe de tener al menos 3 caracteres");
            return; //con return rompemos el evento si no cumple las validaciones
        } 

        if (!validarEmail(email.value)) {
            alert("Introduzca un email correcto");
            return;
        }

        form.submit(); //enviamos si pasa los validaciones
    });
});

function validarEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}