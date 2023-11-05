/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.*/


function agregardatos(){
    var lista=[]
    var sublista=[]
    var datos=prompt('introduce nombre, apellido, dni y fecha nacimietno separados por comas');
    while(datos!==""){
        var fila=datos.split(',')
        lista.push(fila);
        var datos=prompt('introduce nombre, apellido, dni y fecha nacimietno separados por comas');
    }
    return lista
}

