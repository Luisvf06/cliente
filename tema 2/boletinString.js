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
/*var regu=new RegExp(/.*@\w+\.\w+/i);
do {var email=prompt("introduce un email")}
while (regu.test(email)==false);
var reguUsuario=new RegExp(/.*(?=@)/);
var reguServer=new RegExp(/@(.*?)\.(.*)/ig);
var usuario= reguUsuario.exec(email);
var dominio= reguServer.exec(email);
document.write("email ",email,"\n", "usuario" , usuario,"\n dominio ", dominio);
//luis.vazquez.franco.al@iespoligonosur.org
*/
/*8 Realizar un programa que compruebe si una palabra es palíndromo, es decir, 
si se lee igual de izquierda a derecha que de derecha a izquierda. Por ejemplo: RADAR, ARA....*/
var texto=prompt("introduce una palabra");
var inversa="";
for(i=texto.length;i>0;i--){
    inversa+=texto[i];
}
if(texto==inversa){
    document.write(texto," es un palindromo");
}else{texto, " no es un palindromo"}





/*12 Realiza un programa que compruebe mediante expresiones regulares si un usuario ha introducido una matrícula de vehículo válida. 
Si el usuario añade la matrícula correctamente, formatea la cadena para que todas sean guardadas (imagina que luego se guardarán en una BBDD) 
de la misma forma, en mayúsculas y con un guión entre letras y números, por ejemplo: ABC-1234.*/
/*var matricula=prompt("itnroduce una matricula");
var regu=/[a-z]{3}\d{4}/im;
var formateado="";
if (regu.test(matricula)==true){
    formateado=matricula.substring(0,3)+"-"+matricula.substring(3,7);
    document.write(formateado);
}else{document.write("matricula no valida")}
*/
/*13 Diseña un programa que valide un código postal español, debe tener 5 números y el código postal «más alto» debería ser 52999. 
Es decir, no existe un código postal en España que empiece por 53 o superior.*/
/*var cp= parseInt(prompt("introduce un codigo postal valido"));
var regu=(/\d{5}/);
if (regu.test(cp)==true){
while (cp<=999|cp>52999){
    cp=parseInt(prompt("introduce un codigo postal valido"));
}if (cp>=1000|cp<=52999){
    document.write("codigo postal valido");
}}else{document.write("introduce un código")}*/

/*14 Valida con una expresión regular el horario de formato de 24 hrs, por ejemplo 14:45 o 08:12.*/
/*var hora="00:00";
var rege=(/\d{2}:\d{2}/);
if (rege.test(hora)==true){
    var horas= hora.substring(0,2);
    var minutos=hora.substring(3,5);
    if (horas>24|horas<0|minutos<0|minutos>60){
        document.write("hora no valida")
    }else{document.write(hora," tiene un formato valido")}
}document.write("hora ",hora)*/

/*15 Los números pueden tener entre 1 y 3 dígitos. 
Solicita el ingreso de la cordenada de un punto. El formato a ingresar por teclado es (999,999)*/
/*var regu=/\d{3},\d{3}/;
var coordenada=prompt("introduce las coordenadas de un punto entre 0 y 999");
while(regu.test(coordenada)==false | coordenada.length!=7){
    coordenada=prompt("introduce las coordenadas de un punto entre 0 y 999");
}document.write("coordenadas validas");
*/

