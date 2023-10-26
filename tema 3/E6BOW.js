window.addEventListener('load',inicializar);
    var ventana;
    function inicializar(){
        document.getElementById('abrir').addEventListener('click',abrirVentana);
        document.getElementById('abrir-detener').addEventListener('click',abrirVentanaDetenida);
        document.getElementById('cerrar').addEventListener('click',cerrarVentana);
        document.getElementById('dar-foco').addEventListener('click',darFocoVentana);
        document.getElementById('quitar-foco').addEventListener('click',quitarFocoVentana);
        document.getElementById('scroll-absoluto').addEventListener('click',scrollAbsoluto)
        document.getElementById('scroll-relativo').addEventListener('click',scrollRelativo);
    }

function abrirVentana() {
ventana = window.open("", "_blank", "width=300px","height=300%","resizable=yes","scrollbars=yes");
ventana.document.write('<head><script type="text/javascript" src="E6BOW.js"></script></head><div style="height:2000px; border: 2px solid black;"><input type="button" id="scroll" value="scroll absoluto"></input><br><input type="button" id="scrollRel" value="scroll relativo"></input><br><input type="button" id="redimensionarAbs" value="Redimensionar absoluto"></input><br><input type="button" id="redimensionarRel" value="Redimensionar relativo"></input></div>');
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

function darFocoVentana() {//
// No sé si es esto lo que pide
if (ventana) {
ventana.focus();
}
}

function quitarFocoVentana() {
// Quitamos el foco a la ventana
if (ventana) {
  ventana.blur();
}
}
function scrollAbsoluto() {
  window.scrollTo(0, 1000);
  }



function scrollRelativo() {
window.scrollBy(0, 100);
}
ventana.addEventListener('load',inicializar2);
function inicializar2(){
  ventana.getElementById('scroll').addEventListener('click',scrollAbsoluto2);
  ventana.getElementById('scrollRel').addEventListener('click',scrollRelativo);
}
function scrollAbsoluto2() {//ventana emergente
ventana.scrollTo(0, 1000);
}
// Inicializamos la ventana
window.addEventListener("load", asignarEventos);
    
