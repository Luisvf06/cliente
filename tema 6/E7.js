/*Basándote, en el código del ejercicio 6, añade un enlace que al pulsarlo haga aparecer
y desaparecer la tabla creada en el ejercicio 5 (borrándola, mediante métodos DOM).*/
//Al final copié y pegué el codigo de los ej 5 y 6 para facilitar el trabajo
function crearEnlace() {
    var divisor = document.createElement('div');
    divisor.setAttribute('id', 'divisor');

    var link = document.createElement('a');
    var direccion = document.createAttribute('href');
    var texto=document.createTextNode('Enlace para abrir y cerrar la tabla')
    link.appendChild(texto)
    direccion.value = '';
    link.setAttributeNode(direccion);
    link.setAttribute('target','_self')
    // Asi es mas facil pero esta bien saber la otra link.setAttribute('href', 'https://google.es');

    divisor.appendChild(link);

    var cuerpo = document.querySelector('body');
    cuerpo.appendChild(divisor);


}
    crearEnlace() 
function crearTabla(){

    var tabla = document.createElement('table');

    var cabecera = document.createElement('tr');//creo las 1 sola fila para las cabeceras
    for (let i = 0; i < 20; i++) {//la fila de cabeceras tiene 20 columnas
        var elemCabecera = document.createElement('th');
        elemCabecera.style.border='1px solid black'
        var textoCabecera = document.createTextNode('Cabecera ' + (i + 1));
        elemCabecera.appendChild(textoCabecera);
        cabecera.appendChild(elemCabecera);//meto el th en el tr

    }
    tabla.appendChild(cabecera);//meto el tr en el table
    

    for (let i = 0; i < 19; i++) { //19 filas suponiendo que quiero una 20x20
        var fila = document.createElement('tr');//las 19 filas que faltan
        for (let j = 0; j < 20; j++) {
            var celda = document.createElement('td');//elementos de las filas
            var textoCelda = document.createTextNode('Elemento ' + ((i * 20) + j + 1));
            celda.appendChild(textoCelda);
            celda.style.border='1px solid black'
            fila.appendChild(celda);//meto cada uno de los elementos en la fila. 20 elementos por cada fila hasta pasar a la siguiente
        }
        tabla.appendChild(fila);
        tabla.style.border= '1px solid black'
    }

    var cuerpo = document.getElementsByTagName('body')[0];
    cuerpo.appendChild(tabla);
}
crearTabla()

function borrarTabla(){
    var tabla=document.getElementsByTagName('table')[0]
    var cuerpo=document.getElementsByTagName('body')[0]
    cuerpo.removeChild(tabla)
}

function crearBorrar() {
    var enlace = document.getElementsByTagName('a')[0];
    var tabla = document.getElementsByTagName('table')[0];

    enlace.addEventListener('click', function (event) {
        event.preventDefault();  //hace que la pagina no se actualice tras clicar y se reinicie

        if (document.getElementsByTagName('table')[0]) {
            borrarTabla();
        } else {
            crearTabla();
        }
    });
}

crearBorrar();
