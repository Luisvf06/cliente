window.addEventListener('load',inicializar);

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
        var formulario = document.getElementById('formulario');//variable que almacena el objeto formulario
        // Inicializar la variable de mensaje
        var mensaje = '';
        // Itero sobre los elementos del formulario
        for (var i = 0; i < formulario.elements.length; i++) {
            var elemento = formulario.elements[i];
            // Verificar si el elemento es un campo de entrada y no es de tipo "button"
            if (elemento.tagName === 'INPUT' && elemento.type !== 'button') {
                // convierto a mayuscula
                mensaje += elemento.name + ': ' + elemento.value.toUpperCase() + '\n';
            } else if (elemento.tagName === 'SELECT') {
                // agrega a la variable el valor de los elementos tipo select
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
}

//stoppropagation-->para propagacion evento
//preventdefault -->no hace la accion por defecto

