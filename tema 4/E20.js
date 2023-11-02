//Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por edad. ¿cómo podríamos optimizar la búsqueda? 
var matriz=[
    ['luis','vazquez','29','1234A'],
    ['Paco','perez','30','12312312a'],
    ['ana','pan','10','2312']
]
var dni='2312';
var nombre='ana';
var apellido='vazquez';
var dni='1234A';
var anhos='10';
/*
var dato='12312312a'
const fila = matriz.findIndex(fila=>fila.includes(dato));
const columna = matriz[fila].indexOf(dato);
document.write(fila,' ',columna)

var busca;
function buscarapellido(dato){
    for(let i=0;i<matriz.length;i++){
        for(let j=1;j<matriz[0];j++){
            busca=matriz[i][1].indexOf(dato)
        }
    }
*/
var datos=prompt('introduce nombre, apellido y dni separados por comas');
var lista=[]
var fila=datos.split(',')
lista.push(fila)
var sublista=[]

function agregardatos(datos){
    while(datos!==""){
        var datos=prompt('introduce nombre, apellido y dni separados por comas');
        var fila=datos.split(',')
        lista.push(fila);
    }
    for (i=0;i<lista.length-1;i++){
        sublista.push(lista[i])
    }
    
}
var id= matriz.find((persona)=>persona[3]==dni);
document.write(id);
var nombre1=matriz.find((persona)=>persona[0]==nombre);
document.write(nombre1);
var apellidos=matriz.find((persona)=>persona[1]==apellido);
document.write(apellidos);




var name=matriz.find((persona)=>persona)
