var cuerpo=document.getElementsByTagName('body')[0]
var formulario=document.createElement('form')
cuerpo.appendChild(formulario)
var entrada=document.createElement('input')
entrada.setAttribute('type','text')
formulario.appendChild(entrada)
var boton=document.createElement('input')
boton.setAttribute('type','button')
boton.setAttribute('value','Enviar')
formulario.appendChild(boton)

function recogerDato() {
    var regu = /^[A-Z]{3}-[0-9]{1,5}$/;
    if (regu.test(entrada.value)) {
        return entrada.value;
    } else {
        alert('El código introducido no es válido');
        return null; // Devolvemos null si el código no es válido
    }
}
function crearCookie(){
    var codigo = recogerDato();
            if (codigo !== null) {
                document.cookie = 'codigo=' + codigo;
                alert('Código almacenado con éxito: ' + codigo);
            }
        }
        boton.addEventListener('click',crearCookie)
