window.addEventListener('load',inicializar);

function inicializar(){
    function respuesta(){
        var respuesta1 = document.querySelector('input[name="preg1"]:checked');
        var respuesta2 = document.querySelector('input[name="preg2"]:checked');
        var respuestasCorrectas = "";
        if (respuesta1 && respuesta1.value === "4") {
            respuestasCorrectas += "Pregunta 1: ¡Correcto!\n";
        } else {
            respuestasCorrectas += "Pregunta 1: Incorrecto. La respuesta correcta es 4.\n";
        }

        if (respuesta2 && respuesta2.value === "6") {
            respuestasCorrectas += "Pregunta 2: ¡Correcto!";
        } else {
            respuestasCorrectas += "Pregunta 2: Incorrecto. La respuesta correcta es 6.";
        }

        // Mostrar respuestas correctas en el campo de texto
        document.getElementById('respuestasCorrectas').value = respuestasCorrectas;
    }
    var boton= document.getElementById('boton');
    boton.addEventListener('click',respuesta)
}