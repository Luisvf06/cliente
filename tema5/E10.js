/*Usar el evento de entrada de teclado para validar onthefly
(sobre la marcha) en los campos de textos del formulario de la figura.*/
window.addEventListener('load', inicializar);

function inicializar() {
    var formulario = document.getElementById('formulario');
    var elementos = formulario.elements;

    for (let elemento of elementos) {
        if (elemento.type === 'text') {
            elemento.addEventListener('input', validar);
        }
    }

    function validar(event) {
        var entrada = event.target;
        var mensajeError = document.getElementById(entrada.id + 'Error');

        mensajeError.textContent = '';

        if (!entrada.checkValidity()) {
            mensajeError.textContent = entrada.validationMessage;
            return false;
        }

        return true;
    }
}
