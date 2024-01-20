var cuerpo=document.getElementsByTagName('body')[0]
var formulario=document.createElement('form')
cuerpo.appendChild(formulario)
var entrada=document.createElement('input')
entrada.setAttribute('type','text')
formulario.appendChild(entrada)
var boton=document.createElement('input')
var linea=document.createElement('p')
formulario.appendChild(linea)
var textoLinea=document.createTextNode('Código incorrecto')
linea.appendChild(textoLinea)
linea.style.display='none'
boton.setAttribute('type','button')
boton.setAttribute('value','Enviar')
formulario.appendChild(boton)

function recogerDato() {
    var regu = /^[A-Z]{3}-[0-9]{1,5}$/;
    if (regu.test(entrada.value)) {
        return entrada.value;
    } else {
        linea.style.display='inline-block'
        return null; 
    }
}
entrada.addEventListener('blur',recogerDato)
function crearCookie(){
    var codigo = recogerDato();
            if (codigo !== null) {
                document.cookie = 'codigo=' + codigo;
                alert('Código almacenado con éxito: ' + codigo);
            }
        }
        boton.addEventListener('click',crearCookie)

        function guardarDatos() {
            var codigoFormulario = {
                codigo: entrada.value
            };
            localStorage.setItem('codigoFormulario', JSON.stringify(codigoFormulario));
        }
        
        function cargarDatos() {
            const datos = localStorage.getItem('codigoFormulario');
            if (datos) {
                const datosParseados = JSON.parse(datos);
                var entrada = document.getElementsByTagName('input')[0];
                entrada.value = datosParseados.codigo;
            }
        }
        
        boton.addEventListener('click', guardarDatos);
        
        cargarDatos();