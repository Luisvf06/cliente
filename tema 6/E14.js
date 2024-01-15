/*Crea un documento html, donde existirán 4 contenedores. En uno de ellos, existen dentro una serie de elementos que podrán ser movidos a otro contenedor, arrastrados a una papelera donde serán eliminados.
https://developer.mozilla.org/en-US/docs/Web/API/HTMLElement/drop_event
*/


function crearElemento(){
    var div1 = document.createElement('div');
div1.setAttribute('id', 'div1');
div1.setAttribute('draggable','true')
var div2 = document.createElement('div');
div2.setAttribute('id', 'div2');
div2.setAttribute('draggable','true')
var p1 = document.createElement('p');
var p2 = document.createElement('p');
var texto = document.createTextNode('parrafo1');
p1.appendChild(texto);


var texto2 = document.createTextNode('parrafo2');
p2.appendChild(texto2);

div2.appendChild(p1);
div2.appendChild(p2);

var div3 = document.createElement('div');
div3.setAttribute('id', 'div3');
var p3=document.createElement('p')
var texto3 = document.createTextNode('parrafo3 ');
p3.appendChild(texto3);
div3.appendChild(p3)
div3.setAttribute('draggable','true')
var div4 = document.createElement('div');
div4.setAttribute('id', 'div4');
var p4=document.createElement('p')
var texto4 = document.createTextNode('parrafo4');
p4.appendChild(texto4);
div4.appendChild(p4)
div4.setAttribute('draggable','true')
var body = document.getElementsByTagName('body')[0]; 
body.appendChild(div1);
body.appendChild(div2);
body.appendChild(div3);
body.appendChild(div4);


var papelera= document.createElement('span')
var textoPapelera=document.createTextNode('<i class="fa-solid fa-trash"></i>')
papelera.appendChild(textoPapelera)
body.appendChild(papelera)
}
var boton=document.getElementsByTagName('input')[0]
boton.addEventListener('click',crearElemento)
function borrar(){
    for (let elemento of document.body.elements){
        if (elemento.getElementsByTagName() !=='i' ){
            elemento.preventDefault()
            if (elemento.pageX=== papelera.pageX &&elemento.pageY===papelera.pageY){
                elemento.remove()
            }
        }
    }
}

function arrastrar(){
    for (let elemento of document.body){
        elemento.preventDefault()
        elemento.addEventListener('drop',borrar)
    }
}
arrastrar()