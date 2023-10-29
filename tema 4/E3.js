//Realizar un programa que calcule el número de cifras de un número. Deberá implementarse una función numCifras(numero) que devuelva el número de cifras del mismo. Utiliza el operador spread.
function numCifras(numero){
    var contador=0;
    if(numero==Math.ceil(numero) & numero==Math.floor(numero))
    {
        while(numero>=1){
            contador+=1;
            numero=numero/10 
        }
        console.log(numero*(10**contador),' tiene ',contador,' dígitos');
    }else{
        var cadena = numero.toString();
        var decimal = cadena.indexOf('.');
        var decimales = cadena.length - decimal - 1;
        while(numero>=1){
            contador+=1;
            numero=numero/10
            
        }
        console.log(numero*10**contador,' tiene ',contador+decimales,' dígitos');
    }
}
numCifras(5445.245);