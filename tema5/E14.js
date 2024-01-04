/*Crear un formulario que contiene un conjunto de casillas de verificación con diferentes tipos de cafés espresso, cappuccino, moka, y así sucesivamente. Pida al usuario su nombre y número de habitación y seleccionar un tipo de café. Indicar al usuario que va a enviar el café a su número de habitación. Cree las cookie para recordar las preferencias del usuario. La próxima vez que el usuario entre en la página, en introduzca su nombre de usuario, se dirá que hay una tarifa especial para su (utilice el valor de la cookie) café favorito.*/
window.addEventListener('load', inicializar);

function inicializar() {
    var formulario = document.getElementById('formulario');
    var boton = document.getElementById('boton');

    boton.addEventListener('click', function() {
        var usuario = document.getElementById('nombre').value;
        var habitacion = document.getElementById('habitacion').value;
        var cafe = document.getElementById('cafe').value;

        // Validar que los campos obligatorios estén completos
        if (usuario && habitacion && cafe) {
            crearCookie(usuario, habitacion, cafe);
        } else {
            alert("Por favor, complete todos los campos antes de enviar.");
        }
    });
    function crearCookie(usuario, habitacion, cafe) {
        // Obtén la fecha actual y agrega 1 día
        var expirationDate = new Date();
        expirationDate.setDate(expirationDate.getDate() + 1);

        // Formatea la fecha de expiración en el formato de cookie
        var expires = "expires=" + expirationDate.toUTCString();

        // Crea la cookie
        document.cookie = `usuario=${usuario}; habitacion=${habitacion}; cafe=${cafe}; ${expires}; path=/;`;

        alert("Cookie creada. La próxima vez que ingreses tu nombre, se mostrará tu café favorito.");
    }
}


