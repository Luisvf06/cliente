/*Hacer un programa en el que el usuario que introduzca, nombre, apellidos, DNI y fecha de nacimiento separado por comas. Esta entrada de datos se repetirá hasta que el usuario introduzca la cadena vacía. El programa debe guardar los datos en un array bidimensional.*/
var datos=prompt('introduce nombre, apellido y dni separados por comas');
var lista=[]
var fila=datos.split(',')
lista.push(fila)
var sublista=[]

function agregardatos(datos){
    while(datos!==""){
        var datos=prompt('introduce nombre, apellido, dni y fecha nacimietno separados por comas');
        var fila=datos.split(',')
        lista.push(fila);
    }
    for (i=0;i<lista.length-1;i++){
        sublista.push(lista[i])
    }
    
}return lista
agregardatos(datos)
console.log(sublista);