window.addEventListener('load',inicializar);
function inicializar(){
    var listaCuadrados=document.getElementById("lista")
    function cuadradillo(){
        var lista=document.getElementsByTagName('ul')[0]
        lista.setAttribute('type','square')
    }
    cuadradillo()

    function agregarModeloPrincipio(){
        var elementoUno=document.getElementsByTagName('li')[0]
        var nuevoHijo= document.createElement('li')
        var nuevoModelo=document.createTextNode('Ford')
        nuevoHijo.appendChild(nuevoModelo)
        elementoUno.insertAdjacentElement('beforebegin',nuevoHijo)
        
    }
    function agregarModeloMedio(){
        var longitud=document.getElementsByTagName('li').length
        var medio=Math.round(longitud/2)
        var elementoMedio=document.getElementsByTagName('li')[medio]
        var nuevoHermano=document.createElement('li')
        var nuevoModelo=document.createTextNode('Kia')
        nuevoHermano.appendChild(nuevoModelo)
        elementoMedio.insertAdjacentElement('afterend',nuevoHermano)


    }

    function agregarModeloFinal(){
        var longitud=document.getElementsByTagName('li').length
        var elementoFinal=document.getElementsByTagName('li')[longitud-1]
        var nuevoHijo= document.createElement('li')
        var nuevoModelo=document.createTextNode('Skoda')
        nuevoHijo.appendChild(nuevoModelo)
        elementoFinal.insertAdjacentElement('afterend',nuevoHijo)
    }
    agregarModeloPrincipio()
    agregarModeloMedio()
    agregarModeloFinal()
}