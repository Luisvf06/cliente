/*Crear un formulario que contiene dos campos de texto contraseña.
Cuando el usuario sale de cada campo de texto, utilice el controlador
de eventos para Blur y comprobar si el usuario ha introducido nada en
el campo respectivo. Si el usuario no lo hizo, enviar una alerta para
decírselo, y utilizar el método focus() para devolver el foco al campo de texto
que el usuario acaba de abandonar.*/
window.addEventListener('load', inicializar);

function inicializar() {
    var formulario = document.getElementById('formulario');
    var elementos = formulario.elements;

    // Declarar la función fuera de la función inicializar
    function comprobarTexto() {
        for (let elemento of elementos) {
            if (elemento.tagName === 'INPUT') {
                if (elemento.value === "") {
                    elemento.addEventListener('blur', devolver);
                }
            }
        }
    }

    // Función manejadora de eventos
    function devolver() {
        alert('El campo no puede estar vacío');
        this.focus();
        // Remover el event listener después de ejecutarlo
        this.removeEventListener('blur', comprobarTexto);
    }

    for (let elemento of elementos) {
        elemento.addEventListener('blur', comprobarTexto);
    }
}
