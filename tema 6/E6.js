
function crearEnlace() {
    var divisor = document.createElement('div');
    divisor.setAttribute('id', 'divisor');

    var link = document.createElement('a');
    var direccion = document.createAttribute('href');
    var texto=document.createTextNode('Enlace a google')
    link.appendChild(texto)
    direccion.value = 'https://google.es';
    link.setAttributeNode(direccion);
    link.setAttribute('target','_blank')
    // Asi es mas facil pero esta bien saber la otra
    // link.setAttribute('href', 'https://google.es');

    divisor.appendChild(link);

    var cuerpo = document.querySelector('body');
    cuerpo.appendChild(divisor);


}

crearEnlace();

