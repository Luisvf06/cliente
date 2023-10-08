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
/*var regu = new RegExp(/\w{3,}\@\w{1,}\./);
var usuario=prompt("introduce un correo");
if (regu.test(usuario)){
    alert("contiene @ y .");
}else{alert("no tiene @ y/o .")}
/*


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
no existe ningún punto y aparte y las palabras son todas correctas*//*
var texto=("casa. aguas, parque. y caña, ley, cana y canasta c++, ayuda acostar  acomodar");
var regu= new RegExp(/\w+[^,][^\s][^\t]/gi);
var reguA= new RegExp(/\ba\w+[^\s][^\t]/gi);       
var coincidencias = regu.exec(texto);
var coincidenciasA=reguA.exec(texto);
var contador =0;
var contadorA=0;
while (coincidencias !== null) {
    contador ++;
    coincidencias = regu.exec(texto);
}
while (coincidenciasA !==null){
    contadorA ++;
    coincidenciasA = reguA.exec(texto)
}
document.write('palabras: ',contador,'palabras empiezan con a: ',contadorA);*/

/*2.2 Con expresiones regulares, leer desde teclado una cadena con una serie de nombres. 
Contar cuántos nombres se han leído, cuántos comienzan C.
var cadena=prompt("introduce una serie de nombres");
//(/(^c\w+|\b(y\sc)+\w*)/gmi) entrada casa, aguas, parque y caña, ley, cana y canasta c++

var regu= new RegExp(/(\w+[^\sy\s])/gmi)
var reguC=new RegExp(/^c\w+|\bc+\w*|\b(y\sc)w+/gmi)
var nombres=regu.exec(cadena).length;
var nombresC=(reguC.exec(cadena)).length;
//no da lo mismo que en la web para hacer las pruebas
document.write("empiezan por c: ",nombresC," nombres en total: ",nombres)

*/
/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. 
Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. 
Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” 
mostrará desde el primer paréntesis hasta el final.*/
/*var cadena=( "esto es una cadena (con parentesis)"); //no funciona
var regu=new RegExp(/[\b( .* )\b]/gi);
var parentesis= regu.exec(cadena);
document.write(parentesis);
console.log(parentesis);
*/

//Realiza un script que pida una cadena de texto y la devuelva al revés. 
//Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.
//var cadena=prompt("ingresa una cadena");
//var regu=new RegExp(/.*/mig);
/*var derecha=regu.exec(cadena);
var caracter=""
if (cadena.length>0){
for (var i=derecha.length-1;i>0;i--){
    caracter+=derecha[i];
}}else{console.log("no se inseta bien")}
console.log(caracter);*/
/*var cadena=prompt("ingresa una cadena"); //no funciona
var regu=new RegExp(/.*///);
/*var derecha=cadena.match(regu);
var caracter=""
for (let i=derecha.length-1;i>=0;i--){
    caracter+=derecha[i];
    console.log(caracter);
    document.write(caracter);
}
console.log(caracter);
document.write(caracter);*/

/*Hacer un programa en el que el usuario introduzca, nombre, profesión y edad separado por comas. 
Después el programa debe mostrar la edad del usuario por pantalla.*/
//var datos=prompt("nombre, profesion y edad con comas");
/*var regu=new RegExp(/\d+/gm);
var edad= regu.exec(datos);
document.write(edad);*/

/*7 Diseñar un script que lea una dirección de email y la valide. 
No se terminará hasta introducir una dirección correcta. 
Modificar el ejercicio anterior para una vez validado el correo mostrar el usuario y el servidor de correo en dos mensajes.*/
var regu=new RegExp(/.*@\w+\.\w+/i);
do {var email=prompt("introduce un email")}
while (regu.test(email)==false);
var reguUsuario=new RegExp(/.*(?=@)/);
var reguServer=new RegExp(/@(.*?)\.(.*)/ig);
var usuario= reguUsuario.exec(email);
var dominio= reguServer.exec(email);
document.write("email ",email,"\n", "usuario" , usuario,"\n dominio ", dominio);
//luis.vazquez.franco.al@iespoligonosur.org


