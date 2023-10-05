/*1 Leer de teclado una serie de nombres hasta que aparezca la palabra "ULTIMO". 
Contar cuántos nombres se han leído, cuántos comienzan C y cuántos contienen la ñ.
var nombre= prompt("introduce un nombre");
var contador=0
var comienzaC=0;
var contieneNH=0;
while (nombre!='ULTIMO'){
    contador +=1;
    for (var i=0;i<nombre.length;i++){
        if (nombre.charAt(i)=='ñ'){
            contieneNH +=1;
    }
}
    if (nombre.indexOf("C")==0){
        comienzaC +=1;
    }
    nombre= prompt("introduce un nombre");
}
console.log(contador, comienzaC,contieneNH);*/

/*2 Leer un texto de la entrada estándar y contar cuántas palabras tiene, cuántas de ellas empiezan por A. 
Suponemos que una palabra está separada de otra por uno o más espacios, un tabulador o un salto de línea y el texto acaba con un punto, 
no existe ningún punto y aparte y las palabras son todas correctas*/
var texto=prompt("introduce un texto");
var palabras=texto.split(separator=", ");
var palabra1=palabras[0];
document.write(palabra1);

/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. 
Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. 
Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” 
mostrará desde el primer paréntesis hasta el final.*/
var cadena=prompt("introduce una cadena");
var abrir=cadena.search("(");
var cerrar=cadena.search(")");

cadena.substr(from=abrir,cerrar-abrir)



