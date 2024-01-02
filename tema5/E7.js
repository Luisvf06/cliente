/*Crear un formulario con los botones de opción que representan
diferentes colores. Utilice el atributo id para cada botón de radio.
Cambiar el fondo del formulario al color seleccionado.*/
window.addEventListener('load',inicializar);

function inicializar(){
    function cambiarColor(){
        var formulario= document.getElementById('formulario');
        var colorSeleccionado = document.querySelector('input[name="colores"]:checked');
        document.body.style.backgroundColor=(colorSeleccionado.value)
    }

    
    var llamada = document.getElementsByTagName('input')
    for (let elemento of llamada){
        elemento.addEventListener('change',cambiarColor)
    }
}
