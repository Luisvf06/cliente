window.addEventListener('load',inicializar)
function inicializar(){
    var enlace = document.getElementById('enlace')
    function cambiarFondo(){
        enlace.style.backgroundColor='lightblue';
    }
    function devolverFondo(){
        enlace.style.backgroundColor='white'
    }
    enlace.addEventListener('mouseover',cambiarFondo)
    enlace.addEventListener('mouseout',devolverFondo)
}