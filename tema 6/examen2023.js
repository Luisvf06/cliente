window.addEventListener('load',crearTodo)
var json=  [{titular: "Noticia 1",	resumen: "Resumen de la noticia 1",descripcion: "Esta es la noticia 1"},{titular: "Noticia 2",resumen: "Resumen de la noticia 2",descripcion: "Esta es la noticia 2"},{titular: "Noticia 3",resumen: "Resumen de la noticia 3",descripcion: "Esta es la noticia 3"}];

var divisor=document.getElementById('noticias')
var contador=1
function crearTodo(){
    for(let noticia of json){
    var subdivisor=document.createElement('div')
    var titular=document.createElement('h1')
    var textoTitular=document.createTextNode('Noticia '+contador)
    titular.appendChild(textoTitular)
    
    
    var parrafo=document.createElement('p')
    var resumen=document.createTextNode('resumen'+contador)
    parrafo.setAttribute('id',resumen)

    var textoResumen=document.createTextNode('Resumen de la noticia '+contador)
    parrafo.appendChild(textoResumen)

    var foto=document.createElement('img')
    foto.setAttribute('src','./imagenes/mostrar.png')
    foto.setAttribute('name','mostrar')
    foto.style.width='30px'
    var notici=document.createElement('h4')
    notici.style.display='none'

    var texnoNoticia=document.createTextNode('Esta es la noticia '+contador)
    notici.appendChild(texnoNoticia)
    subdivisor.appendChild(titular)
    subdivisor.appendChild(parrafo)
    subdivisor.appendChild(foto)
    subdivisor.appendChild(notici)
    divisor.appendChild(subdivisor)
    contador++
    }
    evento()
}

function evento(){
    for(let foto of document.getElementsByTagName('img')){
        foto.addEventListener('click',function(){
            var hermano=foto.nextElementSibling;
            var hermano2=hermano.nextElementSibling;
            if(foto.getAttribute('name')==='mostrar'){
                
                hermano.style.display='block'
 
                foto.setAttribute('name','ocultar')
                foto.setAttribute('src','./imagenes/ocultar.webp')
            }else{hermano.style.display='none'
                    foto.setAttribute('name','mostrar')
                    foto.setAttribute('src','./imagenes/mostrar.png')}
        })
        }
    }

