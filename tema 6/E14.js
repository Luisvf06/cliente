/*Crea un documento html, donde existirán 4 contenedores. En uno de ellos, existen dentro una serie de elementos que podrán ser movidos a otro contenedor, arrastrados a una papelera donde serán eliminados.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event
*/

function crearElementoMovil(text) {
    var div = document.createElement('div');
    div.className = 'draggable';
    div.setAttribute('draggable','true')//para que un elemento sea arrastrable necesita el atributo draggable
    

    var p = document.createElement('p');
    p.textContent = text;

    div.appendChild(p);
    return div;
}

function crearPapelera() {
    var basura = document.createElement('div');
    basura.id = 'basura';
    basura.className = 'basura';

    var i = document.createElement('i');
    i.className = 'fas fa-trash';

    basura.appendChild(i);
    return basura;
}

function establecerMovimiento(element) {//oye el evento dragstart
    element.addEventListener('dragstart', function (e) {
        e.dataTransfer.setData('text/plain', 'anything'); // sin esto no funciona en firefox
        this.classList.add('dragging');
    });

    element.addEventListener('dragend', function () {
        this.classList.remove('dragging');
    });
}

var contenedor = document.createElement('div');
contenedor.className = 'contenedor';

var div1 = crearElementoMovil('Parrafo 1');
var div2 = crearElementoMovil('Parrafo 2');
var div3 = crearElementoMovil('Parrafo 3');
var div4 = crearElementoMovil('Parrafo 4');

establecerMovimiento(div1);
establecerMovimiento(div2);
establecerMovimiento(div3);
establecerMovimiento(div4);

contenedor.appendChild(div1);
contenedor.appendChild(div2);
contenedor.appendChild(div3);
contenedor.appendChild(div4);

var basura = crearPapelera();

basura.addEventListener('dragover', function (e) {//se activa cuando algo es arrastrado encima del elemento basura
    e.preventDefault();//evita que el elemento arrastrado vuelva a su posicion
});

basura.addEventListener('drop', function (e) {
    var elementoMovil = document.querySelector('.dragging');
    elementoMovil.parentNode.removeChild(elementoMovil);
});

document.body.appendChild(contenedor);
document.body.appendChild(basura);