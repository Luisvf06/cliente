window.addEventListener('load',inicializar);

function inicializar(){
    document.getElementById('boton').addEventListener('click',recogerDatos())
    for(let i=0;formulario.elements.length;i++){
        if(formulario.elements[i].type=="text"){
            formulario.elements[i]=formulario.elements[i].toUpperCase()
        }
    }

    function recogerDatos(){
            var formulario= document.getElementById("formulario")//aqui tengo el objeto formulario, que es una array de sus elementos
            return formulario
    }
    function convertirMayusc(datos){
        for (let dato=0; dato<datos.length;dato++){
            
        }
    }
}
