var enlace= document.createElement('a')
var texto=document.createTextNode('Texto del elemento enlace')
enlace.setAttribute('href','')
enlace.appendChild(texto)
var cuerpo=document.getElementsByTagName('body')[0]
cuerpo.appendChild(enlace)
enlace.addEventListener('click', function (e) {
    mostrarCoordenadas(e);
});

function mostrarCoordenadas(e) {
    var x = e.pageX;
    var y = e.pageY;
    e.preventDefault();
    var texto=document.createTextNode('X: '+ x + ' Y: '+y)
    var p=document.createElement('p')
    p.appendChild(texto)
    cuerpo.appendChild(p)
}