//mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana


/*
function calcularEdad(fecha){
    var dia= fecha.getDate();
    var mes= fecha.getMonth();
    var anho=fecha.getFullYear();
    var hoy=new Date();
    var edad= hoy.getFullYear()-anho;
    var meses= hoy.getMonth()-mes;
    var dias=hoy.getDate()-dia;
    if(meses<0 || (meses ===0 &&dias<dia)){
        edad-=1;
    }
}return edad
*/

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

function mayorEdad(){
    var hoy=new Date()
    var anho=hoy.getFullYear()
    var mes=hoy.getMonth()
    var dia=hoy.getDate()
    var dieciocho= new Date(anho-18,mes,dia)
    return dieciocho
}


function buscarfecha(lista,parametro){

    var mayores=lista.filter((persona)=>new Date(persona[3])<=parametro)

    console.log(mayores)
    return mayores
}

function abrirventana(persona){
    var nuevaventana = window.open('', '_blank');
    //nuevaventana.document.write('<html><head><title>Información</title></head><body>');

    for (let i = 0; i < persona.length; i++) {
        //nuevaventana.document.body.innerHTML += '<p>' + persona[i].join(', ') + '</p>';
        nuevaventana.document.write( '<p>' + persona[i].join(', ') + '</p>');//no sé si el join es necesario
    }

    //nuevaventana.document.write('</body></html>');
    nuevaventana.document.close();
    }

//abrirventana(buscarfecha(agregardatos(),mayorEdad()))

//menorEdad: filtrará del array los usuarios menores de edad e imprimirá en una nueva ventana los días y/o años que le quedan para su mayoría de edad.

function buscarfechamenor(lista,parametro){//filtra los menores de edad

    var menores=lista.filter((persona)=>new Date(persona[3])>parametro)
    console.log(menores)

    return menores
}
    //buscarfechamenor(agregardatos(),mayorEdad()) //hasta aqui funciona
function calcularDias(fechaMayoria,nacimiento){
    var conversionDias=24*60*60*1000;
    var diasRestantes=Math.floor((nacimiento-fechaMayoria)/conversionDias)
    return diasRestantes
}
function abrirventanamenores(persona){
    var nuevaventana=window.open('','_blank');
    for (let i=0;i<persona.length;i++){
        var fechaNacimiento= new Date(persona[i][3])
        var diasRestante=calcularDias(mayorEdad(),fechaNacimiento)
        if(diasRestante>365){
            nuevaventana.document.write('<p>'+ Math.floor(diasRestante/365)+'años, '+diasRestante%365+' días'+ '</p>');
        }else{nuevaventana.document.write('<p>'+ diasRestante+' días'+ '</p>')}
        
    }nuevaventana.document.close();
}

//abrirventanamenores(buscarfechamenor(agregardatos(),mayorEdad()))

//modificaDatos: solicitará qué datos modificar, el dato por el que se va a modificar y el dni del usuario.


function buscarnombre(lista,parametro){
    var nombre=lista.find((persona)=>persona[0]==parametro)
    return nombre
}
function buscarapellido(lista,parametro){
    var apellido=lista.find((persona)=>persona[1]==parametro)

    return apellido
}
function buscardni(lista,parametro){
    var dni=lista.find((persona)=>persona[2]==parametro)

    return dni
}
function buscarfecnac(lista,parametro){
    var fecha=lista.find((persona)=>persona[3]==parametro)

    return fecha
}
function modificarDatos(parametro,valor,dni){
    let listaDatos= agregardatos();

    if(parametro==='nombre' || parametro==='Nombre'){
        let usuario=buscardni(listaDatos,dni);
        usuario.splice(0,1,valor)
        console.log(usuario)
        document.write(usuario);
        return usuario
    }
    else if(parametro==='apellidos' || parametro==='Apellidos' | parametro==='apellido'|parametro==='apellidos'){
        let usuario=buscardni(listaDatos,dni);
        usuario.splice(1,1,valor);
        console.log(usuario)
        document.write(usuario);
        return usuario
    }
    else if(parametro==='dni'||parametro==='DNI'){
        let usuario=buscardni(listaDatos,dni)
        usuario.splice(2,1,valor)
        console.log(usuario)
        document.write(usuario);
        return usuario
    }else if (parametro==='fecha de nacimiento'||parametro==='fecnac'){
        let usuario=buscardni(listaDatos,dni)
        usuario.splice(3,1,valor)
        console.log(usuario)
        document.write(usuario);
        return usuario
    }else{document.write('el parámetro introducido no es válido')}document.write(usuario);console.log(usuario)
    
}
//modificarDatos('fecnac',new Date(1994,3,6),'1234q')

//eliminaUsuario: elimina un usuario del array solicitando su dni. Además solicitaconfirmación antes de eliminar.
function eliminarUsuario(dni){
    var listaDatos=agregardatos()
    let usuario=buscardni(listaDatos,dni);
    if (usuario=true){
        let confirmacion=prompt('seguro que quieres eliminar al usuario?')
        if (confirmacion==='yes' || confirmacion==='si'||confirmacion==='s'|confirmacion==='y'){
            listaDatos=listaDatos.filter(sublista=>sublista.indexOf(dni)===-1);
        }
    }
    document.write(listaDatos)
}
eliminarUsuario('1234q')