/*Crear un formulario que contenga un cuadro de texto. Después de que
el usuario introduzca texto, todas las letras se convertirán en minúsculas,
tan pronto como haga clic en cualquier otro lugar el formulario.*/
window.addEventListener('load',inicializar);
function inicializar(){
    var texto= document.getElementById('minusc');
    function convertirMinusculas(){
        texto.value= texto.value.toLowerCase();
    }
    texto.addEventListener('blur',convertirMinusculas)
}