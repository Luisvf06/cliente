/*Crear un formulario que utiliza un campo de entrada de texto, que pida
al usuario que escriba su nombre en letras mayúsculas. El botón de
envío será una imagen. Validar que el formulario no está vacío y que
el usuario ha escrito su nombre sólo con letras mayúsculas. Envíe el
formulario a un programa de servidor si es correcto.*/
window.addEventListener('load',inicializar);

function inicializar(){
    var formulario = document.getElementById('formulario');
    var nombreInput = document.getElementById('nombre');
    var mensajeError = document.getElementById('mensaje');

    function validar() {
        mensajeError.style.display = 'none';
        mensajeError.innerHTML = '';

        if (nombreInput.value === "") {
            mensajeError.style.display = 'block';
            mensajeError.appendChild(document.createTextNode('El campo no puede estar en blanco'));
        } else if (nombreInput.value !== nombreInput.value.toUpperCase()) {
            mensajeError.style.display = 'block';
            mensajeError.appendChild(document.createTextNode('El nombre debe estar en mayúsculas'));
        } else {

            formulario.submit()
        }
    }


            var boton=document.getElementById('boton')
    boton.addEventListener('click',validar)
    }

    
