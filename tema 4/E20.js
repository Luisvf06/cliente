//Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por fechanacimiento. ¿cómo podríamos optimizar la búsqueda? 
/*
Correcion Ivan
20 


funcion ejercicio20(){

var lista= funcionejercicio19
var parametro_busqueda=prompt("introduce un parametro de busqeuda")
for (let i=0; i<lista.length;i++){
    var res = lista[i].find(x)=>x==parametro_busqueda;
}
document.write(res)
}}


function ejercicio20(){
    var lista=ejercicio19()
    var parametro-busqueda=promopt("mete un parametro de busqueda")
    var res= lista.find(elemento)=>elemento[indicedelparametroabuscar]==parametro_busqueda)
    document.write(res)
}


var parametro_busqueda()=prompt(mete un parametro)
var lista=ejercicio19();
dni=buscarDNI(lista,parametro_busqueda)
function buscarDNI(lista,parametro_busqueda){
    return lista.find(elemento)=>elemento[2]==parametro_busqueda
}
*/
var dni;
var nombre;
var apellido;
var dni;
var nac;

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
    
}agregardatos()
var nombre1=lista.find((persona)=>persona[0]==nombre);
document.write(nombre1);
var apellidos=lista.find((persona)=>persona[1]==apellido);
document.write(apellidos);
var id= lista.find((persona)=>persona[3]==dni);
document.write(id);
var fecnac=lista.find((persona)=>persona[2]==nac);
document.write(fecnac);

