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
no existe ningún punto y aparte y las palabras son todas correctas
var texto=("casa. aguas, parque. y caña, ley, cana y canasta, ayuda acostar  acomodar");
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
Contar cuántos nombres se han leído, cuántos comienzan C.*/
/*var cadena = 'Carmen Cana Celeste Gabriela';
var regex = /\b\w+\b/gi;
var regexC = /^C/gi;
var comienzan_conC = 0;

var palabras = cadena.match(regex);
var numPalabras = palabras.length;

for (let i = 0; i < palabras.length; i++){
    regexC.lastIndex = 0;
    if(regexC.test(palabras[i])){
        comienzan_conC++;
    }
}
document.write("La cadena contiene " + numPalabras + " de las cuales " + comienzan_conC + " comienzan por C");*/


/*Pedimos una cadena de texto que sabemos que puede contener paréntesis. Realiza un script que extraiga la cadena que se encuentra entre los paréntesis. 
Ejemplo: Si escribimos el texto “Hola (que) tal” se mostrará “que”. 
Si no existe el signo “(“ mostrará una cadena vacía y si existe el signo  “(“pero no el signo “)” 
mostrará desde el primer paréntesis hasta el final.*/
/*var cadena=( "esto es una cadena (con parentesis) en medio"); //no funciona
var reParentesis=new RegExp(/\(.*\)/)
if (reParentesis.exec(cadena)!=null){
    console.log(reParentesis.exec(cadena));
}else{console.log()}//no se hace la condicion de falta de parentesis
var regu=new RegExp(/[\b(.*)\b]/gi);

var parentesis= regu.exec(cadena);

document.write(parentesis);
console.log(parentesis);*/


//Realiza un script que pida una cadena de texto y la devuelva al revés. 
//Es decir, si tecleo “hola que tal” deberá mostrar “lat euq aloh”.

/*
var cadena = prompt("Ingresa una cadena");

var inversa = "";
for (var i = cadena.length - 1; i >= 0; i--) {
    inversa += cadena.substring(i, i + 1);
}

document.write(inversa);
console.log(inversa);
*/


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
/*var texto=prompt("introduce una palabra");
var inversa= " ";
for(i=texto.length-1;i>=0;i--){
    inversa+=texto[i];
    console.log(inversa);
}
if(texto==inversa.trim()){
    console.log(texto," es un palindromo");
}else{console.log(texto, " no es un palindromo")}*/


/*9 Realiza un supertrim de una cadena, eliminando todos los espacios duplicados*/
/*
var espacio = new RegExp(/\s\s/);
var cadena = "una cadena  random con muchos espacios";
var comprobar = cadena.search(espacio);

while (comprobar != -1 && cadena.indexOf("  ") != -1) {
    cadena = cadena.replace("  ", " ");
    comprobar = cadena.search(espacio);
}

console.log(comprobar, cadena);
*/

/*10Diseña un programa que indique el carácter más repetido dentro de una cadena de caracteres.*/


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


//Ejercicios con Math

/*Hacer un programa que muestre un menú de opciones con las siguientes operaciones posibles:
Redondeo a su inmediato superior de un número
Redondeo a su inmediato inferior de un número
Redondeo al número más cercano
Cálculo del número máximo entre dos dados
Cálculo del número mínimo entre dos dados
Cálculo de un número elevado a otro
Cálculo de la raíz cuadrada de un número
*/
/*
document.write('Elija una opcion: <br> 1: redondear un numero a su inmediato superior <br> 2: redondear un numero a su inmediato inferior <br> 3: Redondear al numero mas cercano<br>')
document.write('4:Calcular el numero maximo entre dos <br>5:calcular el minimo entre dos numeros <br> 6:Calcular la potencia de dos numeros<br>7:Calcular la raiz cuadrada de otro numero')

var entrada=parseInt(prompt('Escoge una operación'));
switch(entrada){
    case(1):
    var entrada2=parseFloat(prompt('introduce un numero'))
    document.write(Math.ceil(entrada2));
    break;
    case(2):
    var entrada2=parseFloat(prompt('introduce un numero'))
    document.write(Math.floor(entrada2));
    break;
    case(3):
    var entrada2=parseFloat(prompt('introduce un numero'))
    document.write(Math.round(entrada2));
    break;
    case(4):
    var entrada2=parseFloat(prompt('introduce un numero'))
    var entrada3=parseInt(prompt('Introduce otro numero'));
    document.write('el maximo entre',entrada2,' y ',entrada3,' es ',Math.max(entrada2,entrada3));
    break;
    case(5):
    var entrada2=parseFloat(prompt('introduce un numero'))
    var entrada3=parseFloat(prompt('introduce un numero'))
    document.write('el minimo entre',entrada2,' y ',entrada3,' es ',Math.min(entrada2,entrada3));
    break;
    case(6):
    var base=parseFloat(prompt('introduce un numero'))
    var potencia=parseFloat(prompt('introduce un numero'))
    document.write(base**potencia);
    break;
    case(7):
    var entrada2=parseFloat(prompt('introduce un numero'))
    document.write(Math.sqrt(entrada2));
    break;
    default:document.write('opcion no valida')
}
*/
/*17 Un proyectil disparado a un ángulo ​A tiene un alcance horizontal ​R dado por la siguiente expresión:

Siendo ​V la velocidad inicial y ​G = 9,8 m/seg. Calcúlese el alcance limitando los ángulos de 0 a 90 y ​V a valores positivos.
*//*
var v=parseFloat(prompt('velocidad inicial'))
var angulo=(Math.PI*(parseInt(prompt('introduce un angulo'))))/180
var g= 9.8;
var r;
if (v<0 ||angulo<0||angulo>90){
    document.write('datos no validos')
}else{r=(2*(v**2)*Math.sin(angulo)*Math.cos(angulo))/g}
document.write(r);
*/

/* 18 Escribir un subprograma que produzca una tabla de valores de la ecuación:

Donde ​t varía entre 0 y 60. El valor del incremento de ​t será introducido como parámetro de entrada.
Y=2*e**2-0.5*sen(0.5*t)*t*/
/*
var incremento=parseInt(prompt('introduce un incremento de t'))
var contador=0;
for(var t=0;t<=60;t+=incremento){
    var operacion=(2*(Math.E**2)-(0.5*t*Math.sin(0.5*parseFloat(t))))
    document.write(contador, 't= ',t,'\t\t\t'    ,operacion,'<br>')
    contador++
*/
/*Generar aleatoriamente una quiniela de n columnas. Supóngase que las probabilidades son:
➔ 50% para que salga 1
➔ 30% para que salga x
➔ 20% para que salga 2
*/
/*
var n = parseInt(prompt('Introduce el numero de columans'))
var fila=0;
var numero_random=Math.random();
for(fila;fila<13;fila++){
    document.write('Partido ',fila,' ')
    for(var columna=0;columna!=n;columna++){
        var numero_random=Math.random();
        if(columna<n-1){
            if (numero_random<=0.5){
                document.write('1');
            }else if(numero_random>0.5 && numero_random<=0.8){
                document.write('X');
            }else{document.write('2')}
        }else{
            if (numero_random<=0.5){
                document.write('1<br>');
            }else if(numero_random>0.5 && numero_random<=0.8){
                document.write('X<br>');
            }else{document.write('2<br>')}
        }
    }
}
*/
//Generar aleatoriamente una primitiva de n columnas. No funciona ninguno de los intentos
/*
var n = parseInt(prompt('Introduce el numero de columans'))
var fila=0;
var numero_random=Math.random();
for (fila;fila<11;fila++){
    var uno=(fila+1,fila+10,fila+20,fila+30,fila+40,'<br>')
    for(var columna=0;columna!=n;columna++){
        document.write(uno)
    }
}
*/
/*
var n = parseInt(prompt('Introduce el numero de columans'))
var fila=0;
var numero_random=Math.random();
for (fila;fila<11;fila++){
    var uno=(fila+1,fila*10,fila*20,fila*30,fila*40,'<br>')
    for(var columna=0;columna!=n;columna++){
        document.write(uno[0]+' '+uno[1]+' '+uno[2]+' '+uno[3]+' '+uno[4]+'<br>')
    }
}
*/

/*Realizar un programa que generalice el algoritmo del Tarot para un número de cualquier cantidad de cifras. 
Ejemplo: 999999999999999999999=9+.....9+9+9= 189 = 18 = 9.  (Pista: Usar log en base 10. No es obligatorio usarla)
*/
/*
var numero = 911;//si al completar la suma de todos los digitos queda un nº mayor a 9, no sigue ejecutandose
var suma = 0;


while(Math.log10(numero)>=0){
    suma +=numero%10;
    //numero=Math.floor(numero/10);
    numero=(numero-(numero%10))/10
}

document.write(suma);*/

//Hacer el Tarot que comprueba que la fecha de nacimiento, introducida no es mayor que la actual.
/*
var nacimiento=new Date(2018, 11, 24, 10, 33)//no se usarlo con prompt
var hoy= Date.now;
if (nacimiento>hoy){
    document.write('la fecha de nacimiento no puede se posterior al momento actual')
}else{document.write(nacimiento,' fecha correcta')}
*/

/*Escribe un algoritmo que lea desde la entrada estándar dos fechas dadas por día, mes y año y calcule cuál de ellas es anterior a la otra.*/
/*
var fecha1=new Date(prompt('introduce una fecha en formato YYYY-MM-DD: '))
var fecha2=new Date(prompt('introduce una fecha en formato YYYY-MM-DD: '))

if(fecha1.getFullYear()>fecha2.getFullYear()){
    document.write(fecha1, ' es posterior a ',fecha2)
}else if(fecha1.getFullYear()<fecha2.getFullYear()){
    document.write(fecha2,' es posterior a ',fecha1)
}else{
    if(fecha1.getMonth()>fecha2.getMonth()){
        document.write(fecha1, ' es posterior a ',fecha2)
    }else if(fecha1.getMonth()<fecha2.getMonth()){
        document.write(fecha2, ' es posterior a ',fecha1)
    }else{
        if(fecha1.getDate()>fecha2.getDate()){
            document.write(fecha1,' es posterior a ',fecha2)
        }else if(fecha1.getDate()<fecha2.getDate()){
            document.write(fecha2,' es posterior a',fecha1)
        }else{document.write('ambas fechas son iguales')}
    }
}
*/
/*Realiza un algoritmo que solicite del usuario un tiempo dado en segundos y calcule y presente en pantalla dicho tiempo
pero expresado en horas, minutos y segundos.*/
/*
var segundos=parseInt(prompt('introduce una cantidad de segundos'));
var minutos;
var horas;
if (segundos<60){
    horas=0
    minutos=0}
    else{
while(segundos>=60){
    minutos=Math.floor(segundos/60);
    segundos=segundos%60;
    if(minutos<60){horas=0}
    else{
    while(minutos>=60){
        horas=Math.floor(minutos/60);
        minutos=minutos%60
    }}}
}document.write('hora: ',horas,' minutos: ',minutos,' segundos: ',segundos)
*/

//Calcular de un conjunto de fechas la menor, la mayor y la diferencia en segundos entre ambas.
/*
var fechas = new Set();
var minimo;
var maximo;
var menor;
var mayor;
var diferencia;
fechas.add(new Date(prompt("Introduce una fecha en formato: yyyy-mm-dd")));
fechas.add(new Date(prompt("Introduce una fecha en formato: yyyy-mm-dd")));
fechas.add(new Date(prompt("Introduce una fecha en formato: yyyy-mm-dd")));

for (const value of fechas) {
    minimo = Math.min(minimo ?? value.valueOf(), value.valueOf());
    maximo = Math.max(maximo ?? value.valueOf(), value.valueOf());
    diferencia=(maximo-minimo)/1000;
}
menor=new Date(minimo)
mayor=new Date(maximo)

document.write("El mínimo: ", menor, '<br>el maximo: ',mayor,'<br>la diferencia entre ambos: ',diferencia);
*/
/*Realizar un programa que muestre cuántos días faltan para el próximo cumpleaños del usuario y muestre “¡Felicidades!” si es el día señalado.*/
/*var cumple=new Date(prompt('introduce tu cumpleaños en formato yyyy-mm-dd'))

var dia= cumple.getDate();
var mes= cumple.getMonth();

var hoy= new Date();
var anho_hoy=hoy.getFullYear();
var dia_hoy=hoy.getDate();
var mes_hoy=hoy.getMonth();
var anho_siguiente=(hoy.getFullYear())+1

var proximo_cumple;
var diferencia;
if(mes<mes_hoy||mes==mes_hoy &&dia < dia_hoy){//aqui el mes de cumpleaños ya pasó, por lo que hay que esperar al anho siguiente
    proximo_cumple=new Date(year=anho_siguiente,month=mes,date=dia);
    diferencia= proximo_cumple-hoy;//milisegundos
    diferencia=(((diferencia/1000)/3600)/24);//dias
    document.write(diferencia)
}else if(mes==mes_hoy&&dia==dia_hoy){
    document.write('Felicidades')
}else{
    proximo_cumple=new Date(year=anho_hoy,month=mes,date=dia);
    diferencia= proximo_cumple-hoy;//milisegundos
    diferencia=(((diferencia/1000)/3600)/24);//dias  
    document.write(diferencia)
}
*/

/*Realizar un programa que calcule los días de la semana en que caerán los próximos 50 cumpleaños del usuario.*/
/*var cumple=new Date(prompt('introduce tu cumpleaños en formato yyyy-mm-dd'))

var dia=cumple.getDate();
var mes=cumple.getMonth();
var hoy=new Date();
var anho=hoy.getFullYear();
var dia_semana;

for(var i=0;i<50;i++){
    dia_semana=new Date(anho+i,mes,dia)
    document.write(anho+i,' ',dia_semana.getDay(),'<br>')
}
*/
/*En una nueva ventana, imprimir todas las propiedades del objeto navigator*/
