/*Crear un formulario que pida la dirección de envío del usuario. La
próxima vez que el usuario acceda a la página, se rellenará la dirección
utilizando el valor de la cookie.*/
window.addEventListener('load',entrada)//cuando se carga la pagina se llama la funcion entrada
var boton=document.getElementsByTagName('input')[1]

function crearCookie(nombre,valor,dias){
    var caduca="";
    if(dias){
        var fecha=new Date()//fecha de hoy por defecto
        fecha.setTime(fecha.getTime()+(dias*24*60*60*1000));//sumamos los días que queremos que tarde en caducar
        caduca=";caduca= "+fecha.toUTCString();
    }
    document.cookie=nombre+"="+valor+";"+caduca+"; path=/";//la cookie tendra el nombre que pasamos por parametro en la llamada que hacemos en la funcion datos, el valor del input y los dias que pasamos en la funcion datos
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
            return elemento.substring(nombre.length,elemento.length)//devuelve solo el valor
        }
    }
    return null;
}

function datos(){//accede al valor del input y llama a la funcion crearcookie
    var direccionDato= document.getElementById('texto').value
    crearCookie('direccion',direccionDato,365)//el valor que se le pasa es el recogido en el input
}

function entrada(){
    var direccion = usarCookie('direccion');//carga la funcion usar cookie en una variable
    if (direccion){//si existe una cookie con ese nombre
        var campo = document.getElementById('texto');
        campo.value = direccion; // nada más cargar la pagina el campo tendra ese texto (porque se llama con el evento load)
    }
}
boton.addEventListener('click',datos)

/*
1º boton event listener datos
2º ffuncion datos llama a crearcookies
3º window load llama a entrada(se ejecuta antes pero ahora hace cosas por el if)
4º funcion entrada llama a usarcookie
*/

