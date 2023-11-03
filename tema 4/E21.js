//mayorEdad: filtrará del array los usuarios mayores de edad e imprimirá sus datos en una nueva ventana

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

function mayorEdad(fecha){
    for(let i=0;i<lista.length;i++){
        lista.find((elemento)=>elemento[2]>=fecha)
    }
}