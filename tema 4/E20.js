//Implementar funciones para el ejercicio anterior para imprimir los datos y para buscar una persona por apellidos, por DNI o por fechanacimiento. ¿cómo podríamos optimizar la búsqueda? 
function agregardatos(){
    var lista=[]
    var datos=prompt('introduce nombre, apellido, dni y fecha nacimietno separados por comas');
    while(datos!==""){
        var fila=datos.split(',')
        lista.push(fila);
        var datos=prompt('introduce nombre, apellido, dni y fecha nacimietno separados por comas');
    }
    return lista
}
var ejer19=agregardatos()
var parametro_nombre=prompt('introduce un nombre para buscar')
function buscarnombre(lista,parametro){
    var nombre=lista.find((persona)=>persona[0]==parametro)
    console.log(nombre)
    document.write(nombre)
    return nombre
}

var parametro_apellido=prompt('introduce un apellido para buscar')
function buscarapellido(lista,parametro){
    var apellido=lista.find((persona)=>persona[1]==parametro)
    console.log(apellido)
    document.write(apellido)
    return apellido
}

var parametro_dni=prompt('introduce un dni para buscar')
function buscarapellido(lista,parametro){
    var dni=lista.find((persona)=>persona[2]==parametro)
    console.log(dni)
    document.write(dni)
    return dni
}
buscarnombre(ejer19,parametro_nombre)

var parametro_fecnac=prompt('introduce una fecha de nacimiento para buscar')
function buscarfecnac(lista,parametro){
    var fecha=lista.find((persona)=>persona[3]==parametro)
    console.log(fecha)
    document.write(fecha)
    return fecha
}

