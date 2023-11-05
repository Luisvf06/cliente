//Dada una cadena leída por teclado, realizar un programa que extraiga los números queaparecen en dicha secuencia e imprima por pantalla dichos números y su suma.
function cadena(){
    var a=prompt('introduce una cadena alfanumerica');
    var regu=(/[0-9]+/gm);
    var lista=a.match(regu);
    var suma=0;
    for(let i=0;i<lista.length;i++){
        suma+=parseInt(lista[i],10)
        document.write(lista[i])
    }document.write(suma)
}cadena()