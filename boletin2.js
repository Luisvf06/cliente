//Calcular el área y el volumen de la esfera cuyo radio se pide al usuario.
/*radio=prompt("introduce el radio de la esfera");
volumen=(4/3)*Math.PI*radio**3;
area=4*Math.PI*radio**2;
console.log("Volumen: ",volumen," área: ",area);*/

//2 Diseñar un algoritmo para hallar el valor absoluto de un número leído de teclado y presentarlo en pantalla.
/*
numero=prompt("ingresa un numero");
if (numero<0){
    console.log(numero*-1);
}
else{
    console.log(numero);
}
*/
/*Realiza un algoritmo que lea un dato de teclado y calcule e imprima su inverso. 
Considere el caso especial del valor 0 mostrando el mensaje de error correspondiente.*/

/*numero=prompt("introduce un nº")
inverso=numero*-1;
if (numero!=0){
    console.log(inverso);
}
else{
    console.log("Error, el nº no puede ser 0");
}*/

/*Escriba un algoritmo que lea un instante de tiempo dado en horas y minutos y escriba como respuesta los mensajes “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con las siguientes reglas:
a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.
*/

horas=new Date(0,0,0,7,45,12);
hora=horas.getHours();
minuto=horas.getMinutes();
segundo=horas.getSeconds();

if ((hora>7) & (hora<=14 & minuto==0)){
    console.log("Buenos días");
} else if ((hora==7 & minuto>=30) & (hora<14) ||(hora==14&minuto<=30)){
    console.log("Buenos días");
}
else if ((hora >14)&(hora<=20 & minuto<=30)){
    console.log("buenas tardes")
}
else if ((hora ==14 & minuto>=1)&(hora<=20 & minuto<=30)){
    console.log("buenas tardes");
}
else if((hora>20)&(hora<=7 & minuto==29)){
    console.log("Buenas noches");
}
else if((hora>=20 & minuto>=31) & (hora<=7 & minuto==29)){
    console.log("Buenas noches");
}
else{
    console.log("Error");
}

/*Para comprobar si un año es o no bisiesto se usa la siguiente regla: 
“Un año es bisiesto si es divisible por 400, o bien es divisible por 4 pero no por 100”. 
Diseñar un programa que utilizando una variable lógica que tenga valor cierto si el año es bisiesto y falso si no lo es.*/
var bisiesto;
/*anho=prompt("introduce un año");
if (anho%400==0){
        bisiesto=true;
        console.log(bisiesto);
    }
else if(anho%4==0 & anho%100!=0){
    bisiesto=true;
    console.log(bisiesto)
}
else if (anho%4==0 & anho%100==0 & anho%400!=0){
    bisiesto=false;
    console.log(bisiesto);
}*/

/*Diseñar un algoritmo que tomando las coordenadas cartesianas de un punto en el plano y calcule e imprima el cuadrante al que pertenece dicho punto. 
También debe detectar cuando está en el origen o sobre un eje.*/
/*
var x=1
var y=0
if (x==0 & y==0){
    console.log("Punto de origen");
}
else if(x==0 & y!=0){
    console.log("está sobre el eje Y");
}
else if(x!=0 & y==0){
    console.log("está sobre el eje X");
}
else if(x>0&y>0){
    console.log("primer cuadrante");
}
else if(x<0&y>0){
    console.log("segundo cuadrante");
}
else if(x<0&y<0){
    console.log("tercer cuadrante")
}
else if(x>0&y<0){
    console.log("cuarto cuadrante");
}
*/
//Diseñar un algoritmo para escribir en pantalla los n primeros números naturales, sus cuadrados, sus cubos y la suma de todos ellos
var n=4;
var suma=0
for(var i=0;i<=n;i++){
    suma +=i;
    console.log("numero: ",i);
    console.log("Cuadrados: ",i*i);
    console.log("cubos: ",i*i*i);
    
}
console.log("suma: ",suma);

//Hallar el menor, el mayor y la media de un conjunto de números positivos leídos de teclado.
/*
var menor=0;
var mayor=0;
entrada=prompt("introduce un numero");
menor=parseInt(entrada);
mayor=parseInt(entrada);
while(entrada !="fin"){
    entrada2=parseInt(entrada)
    if (entrada2>mayor){
        mayor=entrada2;
        media=(mayor+menor)/2;
        console.log("mayor",mayor,"menor",menor,"media: ",media)
    }
    else{
        menor=entrada2;
        media=(mayor+menor)/2;
        console.log("mayor",mayor,"menor",menor,"media: ",media)
    }
    entrada=prompt("introduce un numero");
}
*/
/*Realizar un programa que proporcione el cambio de Euros a Dólares, Libras, Yenes, Franco Suizo, Corona Noruega, según opción. 
El programa debe controlar todas las entradas y ofrecer al usuario la posibilidad de repetir o salir.*/
/*
var euro= parseFloat(prompt("introduce la cantidad a cambiar"));
var divisa = prompt("introduce la moneda de destino");
var dolar;
var libra;
var yen;
var francoSuizo;
var coronaNoruega;
switch (divisa){
    case ("dolares"):
    case ("Dolares"):
    case ("dolar"):
        console.log(euro*1.06);
        break;
    case ("Libras"):
    case ("libras"):
    case ("Libra"):
        console.log(euro *0.87);
        break;
    case ("Yenes"):
    case ("Yen"):
    case ("yenes"):
        console.log(euro*157.53);
        break;
    case ("Francos Suizos"):
    case ("Franco Suizo"):
    case ("franco suizo"):
            console.log(euro*0.97);
            break;
    case ("Coronas Noruegas"):
    case ("Corona Noruega"):
    case ("corona noruega"):
        console.log(euro*11.42);
        break;
    default:
        console.log("No se puede hacer ese cambio");
}
*/
/*Realizar un algoritmo que permita introducir la nota de una asignatura por teclado, 
la valide para que esté comprendida entre 0 y 10 y se escriba en letras de la siguiente manera:
SUSPENSO si es menor que 5
APROBADO mayor que 5 y menor que 6
BIEN entre 6 y 7
NOTABLE entre 7 y 8
SOBRESALIENTE entre 9 y 10
*/
/*
var nota = parseFloat(prompt("Introduce una nota"));
if (nota>=0 & nota<=10){
    if (nota<5){
        console.log("Suspenso");
    }
    else if(nota>=5 & nota<=6){
        console.log("Aprobado");
    }
    else if(nota>6 & nota<=7){
        console.log("Bien");
    }
    else if(nota>7 & nota<=9){
        console.log("Notable");
    }
    else if(nota>9 & nota<=10){
        console.log("Sobresaliente")
    }
    else(console.log("Nota no valida"));
}
else{console.log("Nota no válida")};
*/
/*Realizar un programa que lea una fecha de nacimiento de la forma día, mes, año, y dé como resultado el número de Tarot. 
El programa verificará si la fecha es correcta. El número de Tarot se calcula sumando los números de la fecha de nacimiento y reduciéndolos a un único dígito.
por ejemplo, si su fecha de nacimiento es 20 de julio de 1984, el número de Tarot sería: 20 + 7+ 1984 = 2011⇒ 2 + 0 + 1 + 1 = 4
 */
//var fecha= Date.parse(prompt("introduce la fecha en formato dd/mmm/yyyy"));
/*
var dia= parseInt(prompt("introduce el dia de nacimiento"));
var mes=parseInt(prompt("introduce el mes de nacimiento"));
var anho=parseInt(prompt("introduce el año de nacimiento"));
var suma= dia+mes+anho;
var cadena=suma.toString();
if (cadena.length==4){
    var tarot=  parseInt(cadena.charAt(0))+parseInt(cadena.charAt(1))+parseInt(cadena.charAt(2))+parseInt(cadena.charAt(3));    
}
else if(cadena.length==3){
    var tarot=  parseInt(cadena.charAt(0))+parseInt(cadena.charAt(1))+parseInt(cadena.charAt(2));      
}
else if(cadena.length==2){
    var tarot=  parseInt(cadena.charAt(0))+parseInt(cadena.charAt(1));    
}
else if (cadena.length==1){
    var tarot=  parseInt(cadena);    
}

console.log(tarot);
*/
/*Estamos interesados en calcular los ingresos medios de un conjunto de hombres y mujeres. 
Para ello disponemos de un documento donde se recoge si se trata de un hombre (H) o una mujer (M) y su sueldo correspondiente. 
La entrada de datos termina cuando se lee un * como sexo. 
Se validarán todas las entradas, el sexo será H o M y el sueldo entre los 1000 y 2000 euros independientemente de que el trabajador sea hombre o mujer.*/
var sexo=prompt("introduce M o H");
var salario=parseFloat(prompt("introduce el salario de esa persona"));
var suma=salario;
var contador=1;


while (sexo!="*") {

    var sexo=prompt("introduce M o H");
    if (sexo=="*"){
        break;
    }
    else{
        if (salario>=1000 & salario<=2000){
    var salario=parseFloat(prompt("introduce el salario de esa persona"));
    contador+=1;
    suma+=salario;}
}}

console.log("media: ",suma/contador, "contador: ", contador);

/*Diseñar un programa que, dada una cierta cantidad de dinero que se leerá desde la entrada estándar, 
calcule cuál es el número mínimo de monedas de curso legal que equivalen a dicha cantidad de dinero.*/