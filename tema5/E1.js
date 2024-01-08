window.addEventListener('load',inicializar);
//https://javascript.info/form-elements
function inicializar(){
    //convierte en mayusculas dentro de la misma pagina
    function convertirAMayusculas() {
        // Obtener el formulario y sus elementos
        var formulario = document.getElementById('formulario');
        var elementosFormulario = formulario.elements;
    
        // Iterar por los elementos del formulario
        for (var i = 0; i < elementosFormulario.length; i++) {
            var elemento = elementosFormulario[i];
    
            // Verificar si el elemento es un campo de texto o email, sin esto no funciona bien
            if (elemento.type === 'text' || elemento.type==='email') {
                // Convertir el valor a mayúsculas
                elemento.value = elemento.value.toUpperCase();
            }
        }
    }
    

    function mostrarDatos() {
        var formulario = document.getElementById('formulario');
        // Inicializar la variable de mensaje
        var mensaje = '';
        
        // Itero sobre los elementos del formulario
        for (var i = 0; i < formulario.elements.length; i++) {
            var elemento = formulario.elements[i];
            // Verificar si el elemento es un campo de entrada y no un boton
            if (elemento.tagName === 'INPUT' && elemento.type !== 'button') {
                // convierto a mayuscula En este caso se usa .value y no .innerText porque es un formulario y no un dato recogido en html como un p o span
                mensaje += elemento.name + ': ' + elemento.value.toUpperCase() + '\n';//.name hace referencia al atributo name
            } else if (elemento.tagName === 'SELECT') {
                // agrega a la variable el valor de los elementos tipo select
                //primero coge el nombre del atributo value, luego de entre las opciones (elemento.options), coge el indice de la marcada )elemento.selectedIndex) y lo busca entre las opciones [ ], entonces coge su texto (.text)y  lo pasa a mayuscula
                mensaje += elemento.name + ': ' + elemento.options[elemento.selectedIndex].text.toUpperCase() + '\n';
            }
        }
    
        // nueva ventana
        var nuevaVentana = window.open('', '_blank');
        nuevaVentana.document.write('<pre>' + mensaje + '</pre>');
    }
    
    // busca el boton
    var boton = document.getElementById('boton');
    
    // funcion del boton
    boton.addEventListener('click',convertirAMayusculas)
    boton.addEventListener('click', mostrarDatos);

    //ejercicio3 añadir edad despues de fecnac y que no se pueda editar
    function calcularEdad(){
        var hoy= new Date();
        var diaC= document.getElementById('dia').value;//cojo el valor de dia mes y año
        var mesC=document.getElementById('mes').value;
        var anhoC=document.getElementById('ano').value;
        
        var cumple= new Date(anhoC,mesC-1,diaC);//con los valores cogidos creo un objeto fecha
        var edadMs=hoy-cumple;
        var edad=Math.floor(edadMs/(365*24*60*60*1000));
        document.getElementById('edad1').value = edad;
    }
    var salidaAnho=document.getElementById('ano');
    salidaAnho.addEventListener('blur',calcularEdad)
    document.getElementById('edad').innerHTML=calcularEdad

    /*forma 2 No entiendo por qué no funciona 

    // Crear la etiqueta y la casilla de edad
var etiquetaEdad = document.createElement('label');
var casillaEdad = document.createElement('input');

// Establecer los atributos 'id'
etiquetaEdad.setAttribute("id", 'etiquetaEdad');
casillaEdad.setAttribute('id', 'casillaEdad');

// Crear el texto para la etiqueta de edad
var nombreEtiqueta = document.createTextNode('Edad actual:');

// Agregar el texto como hijo de la etiqueta
etiquetaEdad.appendChild(nombreEtiqueta);

// Obtener el elemento con el ID 'edad1'
var forma1 = document.getElementById('edad1');

// Insertar la etiqueta y la casilla después del elemento con el ID 'edad1'
forma1.insertAdjacentElement('afterend', etiquetaEdad);
etiquetaEdad.insertAdjacentElement('afterend', casillaEdad);

// Asignar el valor a la casilla de edad (por ejemplo, 25 en este caso)
casillaEdad.value = calcularEdad();
*/
    

}

//stoppropagation-->para propagacion evento
//preventdefault -->no hace la accion por defecto

