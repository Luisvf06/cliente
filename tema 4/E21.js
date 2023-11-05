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
    var parametrofecha=new Date(parametro)//YYYY-MM-DD
    var mayores=lista.filter((persona)=>persona[3]<=parametrofecha)

    console.log(mayores)

    return mayores
}
buscarfecha(agregardatos(),mayorEdad())