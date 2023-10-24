window.addEventListener('load',inicializar);
    var ventana;
    function inicializar(){
        document.getElementById('abrir').addEventListener('click','abrirVentana');
        document.getElementById('abrir-detener').addEventListener('clic','abrirVentanaDetenida');
    }
function abrirVentana() {
// Creamos una nueva ventana
ventana = window.open("", "_blank", "width=500,height=500,resizable=yes,scrollbars=yes");

}

function abrirVentanaDetenida() {
// Creamos una nueva ventana
ventana = window.open("", "ventana-flotante", "width=500,height=500,resizable=yes,scrollbars=yes,location=no");
ventana.setTimeout(cerrarVentana,5000)
}

function cerrarVentana() {
// Cerramos la ventana
if (ventana) {
ventana.close();
}
}

function darFocoAVentana() {//voy por este
// Damos foco a la ventana
if (ventana) {
ventana.focus();
}
}

function quitarFocoAVentana() {
// Quitamos el foco a la ventana
if (ventana) {
ventana.blur();
}
}

function scrollAbsoluto() {
  // Establecemos el scroll absoluto
if (ventana) {
ventana.scrollTo(0, 1000);
}
}

function scrollRelativo() {
// Establecemos el scroll relativo
if (ventana) {
ventana.scrollBy(0, 10);
}
}

// Asociamos los eventos a los inputs type="button"
function asignarEventos() {
document.querySelector("#abrir").addEventListener("click", abrirVentana);
document.querySelector("#abrir-detener").addEventListener("click", abrirVentanaDetenida);
document.querySelector("#cerrar").addEventListener("click", cerrarVentana);
document.querySelector("#dar-foco").addEventListener("click", darFocoAVentana);
document.querySelector("#quitar-foco").addEventListener("click", quitarFocoAVentana);
document.querySelector("#scroll-absoluto").addEventListener("click", scrollAbsoluto);
document.querySelector("#scroll-relativo").addEventListener("click", scrollRelativo);
}

// Inicializamos la ventana
window.addEventListener("load", asignarEventos);
    
