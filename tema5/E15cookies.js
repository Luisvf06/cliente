/*Crear un formulario que pida la dirección de envío del usuario. La
próxima vez que el usuario acceda a la página, se rellenará la dirección
utilizando el valor de la cookie.*/
window.addEventListener('load',entrada)
var boton=document.getElementsByTagName('input')[1]

function crearCookie(nombre,valor,dias){
    var caduca="";
    if(dias){
        var fecha=new Date()
        fecha.setTime(fecha.getTime()+(dias*24*60*60*1000));
        caduca=";caduca= "+fecha.toUTCString();
    }
    document.cookie=nombre+"="+valor+";"+caduca+"; path=/";
}

function usarCookie(nombre){
    var nombre=nombre+"=";
    var lista=document.cookie.split(";");
    for (var i=0;i<lista.length;i++){
        var elemento=lista[i];
        while(elemento.charAt(0)==" "){
            elemento=elemento.substring(1,elemento.length);
        }
        if (elemento.indexOf(nombre)==0){
            return elemento.substring(nombre.length,elemento.length)
        }
    }
    return null;
}

function datos(){
    var direccionDato= document.getElementById('texto').value
    crearCookie('direccion',direccionDato,365)
}

function entrada(){
    var direccion = usarCookie('direccion');
    if (direccion){
        var campo = document.getElementById('texto');
        campo.value = direccion; 
    }
}
boton.addEventListener('click',datos)



