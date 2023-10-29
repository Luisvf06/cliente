windows.addEventListener('load',inicializar);
function inicializar(){
	document.getElementById('abrirventana').addEventListener('click',abrirventana);
	document.getElementById('cerrarventana').addEventListener('click',cerrarventana);
}
var nuevaventana;
function abrirventana(){
	nuevaventana=window.open('','_blank','width=400,height=200',"scrollbars=yes");
	nuevaventana.document.write('el ojo es la ventana a tu alma');
}
function cerrarventana(){
	if(nuevaventana){
		nuevaventana.close();
		nuevaventana=null;
	}
}

