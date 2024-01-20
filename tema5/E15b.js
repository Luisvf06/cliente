/*Crear un formulario que pida la dirección de envío del usuario. La
próxima vez que el usuario acceda a la página, se rellenará la dirección
utilizando el valor de la cookie.*/
function guardarDireccion(){
    const correo={//creo el objeto conrreo
        direccion:document.getElementById('texto').value
    }
    localStorage.setItem('correo',JSON.stringify(correo));//almaceno el objeto convertido en formato json
}

function rellenarCampo() {
    const correo = localStorage.getItem('correo');
    if (correo) {
        const direccion = JSON.parse(correo).direccion; // coge el json y lo convierte en un objeto de js
        var entrada = document.getElementsByTagName('input')[0];
        entrada.value = direccion; // Establece el valor del campo de entrada
    }
}
var boton=document.getElementsByTagName('input')[1]
boton.addEventListener('click',guardarDireccion)

window.addEventListener('load', function () {
    const correo = localStorage.getItem('correo');
    if (correo) {
        rellenarCampo(); // Llama directamente a la función rellenarCampo
    }
});
