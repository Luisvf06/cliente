
function crearTabla(){

    var tabla = document.createElement('table');

var cabecera = document.createElement('tr');//creo las 1 sola fila para las cabeceras
for (let i = 0; i < 20; i++) {//la fila de cabeceras tiene 20 columnas
    var elemCabecera = document.createElement('th');
    var textoCabecera = document.createTextNode('Cabecera ' + (i + 1));
    elemCabecera.appendChild(textoCabecera);
    cabecera.appendChild(elemCabecera);
}
tabla.appendChild(cabecera);


for (let i = 0; i < 19; i++) { //19 suponiendo que quiero una 20x20
    var fila = document.createElement('tr');//las 19 filas que faltan
    for (let j = 0; j < 20; j++) {
        var celda = document.createElement('td');//elementos de las filas
        var textoCelda = document.createTextNode('Elemento ' + ((i * 20) + j + 1));
        celda.appendChild(textoCelda);
        fila.appendChild(celda);
    }
    tabla.appendChild(fila);
}

var cuerpo = document.getElementsByTagName('body')[0];
cuerpo.appendChild(tabla);
}
crearTabla()



