/*Crear un formulario que contiene un conjunto de casillas de verificación con diferentes tipos de cafés espresso, cappuccino, moka, y así sucesivamente. Pida al usuario su nombre y número de habitación y seleccionar un tipo de café. Indicar al usuario que va a enviar el café a su número de habitación. Cree las cookie para recordar las preferencias del usuario. La próxima vez que el usuario entre en la página, en introduzca su nombre de usuario, se dirá que hay una tarifa especial para su (utilice el valor de la cookie) café favorito.*/
var boton = document.getElementById('boton');

boton.addEventListener('click', function () {
    guardarDatos();
});

function guardarDatos() {//recojo los datos de cada campo y creo el json, ademas creo el alert con el cafe enviado
    var cafe = document.querySelector('input[name="cafe"]:checked');
    var usuario = document.getElementById('nombre');
    var habitacion = document.getElementById("habitacion");

    if (cafe && usuario && habitacion) {
        const datosUsuario = {
            nombre: usuario.value,
            cafe: cafe.value,
            habitacion: habitacion.value
        };

        localStorage.setItem('datosUsuario', JSON.stringify(datosUsuario));
        alert(`Hola ${datosUsuario.nombre}, se ha enviado un ${datosUsuario.cafe} a la habitación ${datosUsuario.habitacion}`);
    } else {
        alert("Por favor, complete todos los campos antes de enviar el formulario.");
    }
}

function cargarDatos() {//si hay datos guardados en el localstorage enviar el alert de la promocion
    const datosUsuario = localStorage.getItem('datosUsuario');

    if (datosUsuario) {
        const datos = JSON.parse(datosUsuario);
        alert(`Hola ${datos.nombre}, hay una tarifa especial para el café ${datos.cafe}`);
    }
}
cargarDatos();