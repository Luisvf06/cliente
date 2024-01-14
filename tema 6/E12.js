var imagen= document.createElement('img')
imagen.setAttribute('src','foto.png')
var cuerpo=document.getElementsByTagName('body')[0]
cuerpo.appendChild(imagen)

function detectarCoordenadas() {
    document.addEventListener('mousemove', (e) => {
        imagen.style.position="absolute";
        imagen.style.left=e.pageX+'px';
        imagen.style.top=e.pageY+'px';
    });
}
detectarCoordenadas()