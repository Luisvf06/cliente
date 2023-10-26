window.addEventListener('load',inicializar);
    var ventana;
    function inicializar(){
        document.getElementById('abrir').addEventListener('click','abrirVentana');
        document.getElementById('abrir-detener').addEventListener('click','abrirVentanaDetenida');
        document.getElementById('cerrar').addEventListener('click','cerrarVentana');
        document.getElementById('dar-foco').addEventListener('click','darFocoVentana');
        document.getElementById('quitar-foco').addEventListener('click','quitarFocoVentana');
    }

function abrirVentana() {
ventana = window.open("", "_blank", "width=300px","height=300%","resizable=yes","scrollbars=yes");
ventana.document.write('<div style="height:2000px; border: 2px solid black;"><input type="button" id="scroll" value="scroll absoluto"></input></div>');

}

function abrirVentanaDetenida() {
// La ventana se cierra a los 5 segundos
ventana = window.open("", "ventana-flotante", "width=500,height=500,resizable=yes,scrollbars=yes,location=no");
ventana.setTimeout(cerrarVentana,5000)
}

function cerrarVentana() {

if (ventana) {
ventana.close();
}
}

function darFocoAVentana() {//
// No sé si es esto lo que pide
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
if (ventana) {
ventana.scrollTo(0, 1000);
}
}

function scrollRelativo() {
if (ventana) {
ventana.scrollBy(0, 10);
}
}



// Inicializamos la ventana
window.addEventListener("load", asignarEventos);
    
