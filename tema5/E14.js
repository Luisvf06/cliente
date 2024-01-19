/*Crear un formulario que contiene un conjunto de casillas de verificación con diferentes tipos de cafés espresso, cappuccino, moka, y así sucesivamente. Pida al usuario su nombre y número de habitación y seleccionar un tipo de café. Indicar al usuario que va a enviar el café a su número de habitación. Cree las cookie para recordar las preferencias del usuario. La próxima vez que el usuario entre en la página, en introduzca su nombre de usuario, se dirá que hay una tarifa especial para su (utilice el valor de la cookie) café favorito.*/

window.addEventListener('load',preferencias)

    function crearCookie(nombre,valor,dias){
        var caduca="";
        if(dias){
            var fecha=new Date()
            fecha.setTime(fecha.getTime()+(dias*24*60*60*1000));
            caduca=";caduca= " + fecha.toUTCString();
        }
        document.cookie= nombre + "="+ valor+";"+ caduca+ "; path=/";
    }

    function usarCookie(nombre){
        var nombre= nombre + "=";
        var lista = document.cookie.split(";");
        for (var i=0; i<lista.length;i++){
            var elemento = lista[i];
            while (elemento.charAt(0)==' '){
                elemento = elemento.substring(1,elemento.length);
            }
            if (elemento.indexOf(nombre)==0){
                return elemento.substring(nombre.length, elemento.length);
            }
        }
        return null;
    }
    function datos() {
        var usuario = document.getElementById('nombre').value;
        var habitacion = document.getElementById('habitacion').value;
        var cafes = document.getElementsByName('cafe');
        var cafeSeleccionado = "";
        
        for (let cafe of cafes) {
            if (cafe.checked) {
                cafeSeleccionado = cafe.value;
                break;
            }
        }
    
        if (usuario && habitacion && cafeSeleccionado) {
            crearCookie('usuario', usuario, 365);
            crearCookie('habitacion', habitacion, 365);
            crearCookie('cafe', cafeSeleccionado, 365);
            alert('Café enviado a la habitación ' + habitacion);
        } else {
            alert('Completa el formulario');
        }
    }
    
    function preferencias() {
        var usuario = usarCookie('usuario');
        var cafe = usarCookie('cafe');
        if (usuario && cafe) {
            alert(usuario + ', hay una oferta especial para tu café favorito: ' + cafe);
        }
    }
    var boton= document.getElementById('boton');
    boton.addEventListener('click',datos)



