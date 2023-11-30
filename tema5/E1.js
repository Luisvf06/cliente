window.addEventListener('load',inicializar);

function inicializar(){
    
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
    boton.addEventListener('click', mostrarDatos);

    //ejercicio3 añadir edad despues de fecnac y que no se pueda editar
    function calcularEdad(){
        var hoy= new Date();
        var diaC= document.getElementById('dia').value;
        var mesC=document.getElementById('mes').value;
        var anhoC=document.getElementById('año').value;
        
        var cumple= new Date(anhoC,mesC-1,diaC);
        var edadMs=hoy-cumple;
        var edad=Math.floor(edadMs/365*24*60*60*1000)
        document.getElementById('edad').value = edad;
    }
    var boton2=document.getElementById('boton2');
    boton2.addEventListener('click',calcularEdad)
}
