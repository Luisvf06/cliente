/*Añade un evento al ejercicio anterior en el que si se hace click en la imagen se oculta
toda la información relacionada con esa imagen, al hacer clic de nuevo en la imagen volverá a
aparecer toda la información anteriormente ocultada.*/
window.addEventListener('load',inicializar);
function inicializar(){
    var json = [
        { src: "/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
        { src: "/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"] }
    ];
    var divisor= document.getElementById('todos-los-viajes')
    var lista = document.createElement('ul')

    for(let elemento of json){

        var lis = document.createElement('li')
        var foto=document.createElement('img')
        var p = document.createElement('p')
        var textoP=document.createTextNode(elemento.desc)

        foto.setAttribute('src',elemento.src)
        p.appendChild(textoP)
        lis.appendChild(foto)
        lis.appendChild(p)
        var sublista=document.createElement('ul')

        lista.appendChild(lis)
        divisor.appendChild(lista)
        for (let especificacion of elemento.specs){
            var subli= document.createElement('li')

            var espec= document.createTextNode(especificacion)
            subli.appendChild(espec)
            sublista.appendChild(subli)
            lis.appendChild(sublista)
        }
        
    }

    function mostrarOcultar(){
        for(let foto of document.getElementsByTagName('img')){
            foto.addEventListener('click',function(){//cuando hagan click en la foto
                var parrafo=this.nextElementSibling;//this es el elemento foto
                var sublista=parrafo.nextElementSibling;
                if(parrafo.style.visibility!=='hidden'&&sublista.style.visibility!=='hidden'){
                    parrafo.style.visibility='hidden';
                    sublista.style.visibility='hidden';

                }else{
                    parrafo.style.visibility='visible';
                    sublista.style.visibility='visible'
                }
            })

        }
    }
    mostrarOcultar()
}