/*Usar JS para validar el formulario de la figura y evitar el envío hasta que esté
correcto.*/
window.addEventListener('load',inicializar)
function inicializar(){
    document.getElementById('botonEnvio').addEventListener('click', function () {
        if (validar()) {
            alert("Formulario válido. Puedes enviar los datos.");
        } else {
            alert("Formulario inválido. Revise los campos marcados.");
        }
    });
    function validar() {
        var nombre = document.getElementById('nombre');
        var apellido = document.getElementById('apellido');
        var usuario = document.getElementById('usuario');
        var contra = document.getElementById('contra');
        var dia = document.getElementById('dia');
        var mes = document.getElementById('mes');
        var ano = document.getElementById('ano');
        var telefono = document.getElementById('telefono');
        var correo = document.getElementById('correo');
    
        var validacionCorrecta = true;
    
        if (!nombre.checkValidity()) {
            document.getElementById('nombreError').textContent = "Ingrese un nombre válido.";
            validacionCorrecta = false;
        }
    
        if (!apellido.checkValidity()) {
            document.getElementById('apellidoError').textContent = "Ingrese apellidos válidos.";
            validacionCorrecta = false;
        }
    
        if (!usuario.checkValidity()) {
            document.getElementById('usuarioError').textContent = "Ingrese un nombre de usuario válido.";
            validacionCorrecta = false;
        }
    
        if (!contra.checkValidity()) {
            document.getElementById('contrasenaError').textContent = "Ingrese una contraseña válida.";
            validacionCorrecta = false;
        }
    
        if (!dia.checkValidity()) {
            document.getElementById('diaError').textContent = "Ingrese un día válido.";
            validacionCorrecta = false;
        }
    
        if (!mes.checkValidity()) {
            document.getElementById('mesError').textContent = "Ingrese un mes válido.";
            validacionCorrecta = false;
        }
    
        if (!ano.checkValidity()) {
            document.getElementById('anoError').textContent = "Ingrese un año válido.";
            validacionCorrecta = false;
        }
    
        if (!telefono.checkValidity()) {
            document.getElementById('telefonoError').textContent = "Ingrese un número de teléfono válido.";
            validacionCorrecta = false;
        }
    
        if (!correo.checkValidity()) {
            document.getElementById('emailError').textContent = "Ingrese un correo electrónico válido.";
            validacionCorrecta = false;
        }
    
        return validacionCorrecta;
    }
}


