/*Crea un documento html, donde existirán 2 contenedores. En uno de ellos, existe dentro un
elemento que podrá ser copiado (no movido) al otro contenedor.*/
function iniciarArrastre(e) {
    e.dataTransfer.setData('text/plain', e.target.textContent);
    }//funcion que se ejecuta al empezar el arrastre. El valor del objeto del evento, se transfiere a donde sea que vaya como texto plano

  // Función para manejar la soltura del elemento
function soltarElemento(e) {
    e.preventDefault();//evita que el evento actue de forma automatica
    var data = e.dataTransfer.getData('text/plain');//recoge el valor del setdata de la primera funcion

    // Crear un nuevo elemento y agregarlo al contenedor de destino
    var nuevoElemento = document.createElement('div');
    nuevoElemento.textContent = data;//hace que el nuevo elemento tenga el valor del elemento del contenedor inicial
    e.target.appendChild(nuevoElemento);//hace que el contenedor 2 agregue el elemento copiado
    }

  // Evitar el comportamiento predeterminado para permitir soltar elementos
function permitirSoltar(e) {
    e.preventDefault();
}

  // Crear contenedor 1
var contenedor1 = document.createElement('div');
contenedor1.id = 'contenedor1';
contenedor1.classList.add('container');
document.body.appendChild(contenedor1);
contenedor1.style.backgroundColor='blue'

  // Crear contenedor 2
var contenedor2 = document.createElement('div');
contenedor2.id = 'contenedor2';
contenedor2.classList.add('container');
document.body.appendChild(contenedor2);
contenedor2.style.backgroundColor='red'
contenedor2.style.height='200px'
  // Crear un elemento dentro del contenedor 1
var elemento = document.createElement('div');
elemento.textContent = 'Arrástrame';
elemento.draggable = true;
elemento.addEventListener('dragstart', iniciarArrastre);
contenedor1.appendChild(elemento);

  // Agregar eventos para permitir soltar elementos en los contenedores
contenedor1.addEventListener('dragover', permitirSoltar);
contenedor2.addEventListener('dragover', permitirSoltar);
contenedor2.addEventListener('drop', soltarElemento);