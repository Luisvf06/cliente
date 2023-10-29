//Hacer un programa que sume todos los parámetros pasados como argumentos de entrada en la llamada. El número de argumentos de entrada es desconocido
function suma(...n){
    var sumatorio=0;
    for(let i=0;i<n.length;i++){
        sumatorio+=n[i];
    }console.log(sumatorio)
}
suma(2,3,4)