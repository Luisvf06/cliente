window.addEventListener('load',inicializar);

function inicializar(){
    var caracteres="";
    var longitud= caracteres.length;
    var etiqueta= document.getElementById('caracteres')
    var texto= document.createTextNode(longitud+'/145')
    etiqueta.appendChild(texto)
    function escribir(){
        var regex= /[a-z0-9,\.; ]+/gim;
        var mensaje= document.getElementById('mensaje');
        //si el textarea no esta vacio
        if (mensaje.value!==""){
            var longitud= mensaje.value.length;
            var etiqueta= document.getElementById('caracteres')
            var texto= document.createTextNode(longitud+'/145')
            etiqueta.innerHTML=texto.nodeValue
            if(regex.exec(mensaje.value).length===1){//si es 1 es que no hay ningun caracter invalido en la cadena
                if (mensaje.value.length >=145){
                    mensaje.setAttribute('disabled','true')
                    var nuevoNodo= document.createElement('p')
                    var nuevoTexto= document.createTextNode('Se ha alcanzalo el límite de carácteres')
                    nuevoNodo.appendChild(nuevoTexto)
                    mensaje.insertAdjacentElement('afterend',nuevoNodo)
                }
            }else{var caracterInvalido= document.createElement('p')
            var texto2= document.createTextNode('Se ha alcanzalo el límite de carácteres')
            caracterInvalido.appendChild(texto2)
            mensaje.insertAdjacentElement('beforestart',caracterInvalido)}
        }
        return texto
    }
    var mensaje= document.getElementById('mensaje');
    mensaje.addEventListener('input',escribir)
}