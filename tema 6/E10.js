/* Crea un página con un div y a medida que mueves el ratón por la pantalla, dentro de el
div se visualizan las coordenadas.*/
function crearDiv(){
    var cuerpo=document.getElementsByTagName('body')[0]
    var divisor=document.createElement('div')
    divisor.setAttribute('id','divisor');
    divisor.style.height='100vh';

    cuerpo.appendChild(divisor)
}crearDiv()
function detectarCoordenadas(callback) {
    document.addEventListener('mousemove', (e) => {
        var x = e.pageX;
        var y = e.pageY;
        callback(x, y);
    });
}

function escribirCoordenadas() {
    detectarCoordenadas((x, y) => {
        var divi = document.getElementById('divisor');
        var texto = document.createTextNode(`Eje x: ${x}, Eje y: ${y}`);
        
        // Limpiar el contenido antes de añadir el nuevo texto
        divi.innerHTML = '';
        
        divi.appendChild(texto);
    });
}

escribirCoordenadas();