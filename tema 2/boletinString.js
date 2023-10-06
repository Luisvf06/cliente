/*a Comprobar que el nombre de usuario contiene al menos tres letras. Si no es así, debe
aparecer un mensaje por pantalla indicando que el texto no cumple tener al menos tres
letras. Debe aparecer el mensaje: “El nombre no cumple tener al menos tres letras”.
var usuario = prompt("introduce un correo");
var regu = new RegExp(/\w{3,}\@/);//la comda del 3 hace que devuelva 3 o más
if (regu.test(usuario)){
    alert("cumple la condicion");
}else{alert("no cumple la condicion de 3 letras");}*/

/*b) Comprobar que el correo electrónico contiene el carácter @ (arroba) y el carácter .
(punto). De no ser así, deberá aparecer un mensaje indicando que al correo electrónico
le falta uno o ambos caracteres. Por ejemplo si el correo es pacogmail.com deberá
aparecer el mensaje: “Falta el símbolo @ en el correo electrónico”.*/
var regu = new RegExp(/\w{3,}\@\w{1,}\./);
var usuario=prompt("introduce un correo");
if (regu.test(usuario)){
    alert("contiene @ y .");
}else{alert("no tiene @ y/o .")}



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
var palabras=(texto.split(separator=", ")).lenght;
var Regularexp= new RegExp ("a*","g")
var empiezaA=0

/*2.2 Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. 
Contar cuántos nombres se han leído, cuántos comienzan C.*/
var cadena=prompt("introduce una serie de nombres");

var empiezaC=0;
var regu= new RegExp(/\w+ \s | \w+$ |\w+\,/)
var reguC=new RegExp(/^c\w+ \s | ^c\w+\, /)
var nombres=regu.exec(cadena);


/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. 
Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. 
Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” 
mostrará desde el primer paréntesis hasta el final.*/
var cadena=prompt("introduce una cadena");
var abrir=cadena.search("(");
var cerrar=cadena.search(")");

cadena.substr(from=abrir,cerrar-abrir)



