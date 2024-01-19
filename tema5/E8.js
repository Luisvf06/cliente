/*Usar JS para validar el formulario de la figura y evitar el envío hasta que esté
correcto.*/
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
    nombre.addEventListener('blur',function(){
        if (!nombre.checkValidity()) {
            document.getElementById('nombreError').textContent = "Ingrese un nombre válido.";
            validacionCorrecta = false;
        }else{document.getElementById('nombreError').textContent=""}
    })

    apellido.addEventListener('blur',function(){
        if (!apellido.checkValidity()) {
            document.getElementById('apellidoError').textContent = "Ingrese apellidos válidos.";
            validacionCorrecta = false;
        }else{document.getElementById('apellidoError').textContent=""}
    })

    usuario.addEventListener('blur',function(){
        if (!usuario.checkValidity()) {
            document.getElementById('usuarioError').textContent = "Ingrese un nombre de usuario válido.";
            validacionCorrecta = false;
        }else{document.getElementById('usuarioError').textContent=""}
    })
    
    contra.addEventListener('blur',function(){
        if (!contra.checkValidity()) {
            document.getElementById('contrasenaError').textContent = "Ingrese contraseña válida.";
            validacionCorrecta = false;
        }else{document.getElementById('contrasenaError').textContent=""}
    })
    
    dia.addEventListener('blur',function(){
        if (!dia.checkValidity()) {
            document.getElementById('diaError').textContent = "Ingrese dia válido.";
            validacionCorrecta = false;
        }else{document.getElementById('diaError').textContent=""}
    })
    
    mes.addEventListener('blur',function(){
        if (!mes.checkValidity()) {
            document.getElementById('mesError').textContent = "Ingrese dia válido.";
            validacionCorrecta = false;
        }else{document.getElementById('mesError').textContent=""}
    })
    
    ano.addEventListener('blur',function(){
        if (!ano.checkValidity()) {
            document.getElementById('anoError').textContent = "Ingrese año válido.";
            validacionCorrecta = false;
        }else{document.getElementById('anoError').textContent=""}
    })
    
    telefono.addEventListener('blur',function(){
        if (!telefono.checkValidity()) {
            document.getElementById('telefonoError').textContent = "Ingrese telefono válido.";
            validacionCorrecta = false;
        }else{document.getElementById('telefonoError').textContent=""}
    })
    
    correo.addEventListener('blur',function(){
        if (!correo.checkValidity()) {
            document.getElementById('emailError').textContent = "Ingrese correo válido.";
            validacionCorrecta = false;
        }else{document.getElementById('emailError').textContent=""}
    })
    
        return validacionCorrecta;
    }
validar()

