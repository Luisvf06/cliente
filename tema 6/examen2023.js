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
    evento()//aqui llamo a la funcion que actua con el click en la foto
}

function evento(){
    for(let foto of document.getElementsByTagName('img')){//por cada elemento foto
        foto.addEventListener('click',function(){
            var hermano=foto.nextElementSibling;//vuelco en una variable al hermano de la foto
            if(foto.getAttribute('name')==='mostrar'){//si el atributo name del elemento foto tiene valor mostrar
                
                hermano.style.display='block'//se muestra el elemento h4
 
                foto.setAttribute('name','ocultar')//se cambia la foto
                foto.setAttribute('src','./imagenes/ocultar.webp')
            }else{hermano.style.display='none'
                    foto.setAttribute('name','mostrar')
                    foto.setAttribute('src','./imagenes/mostrar.png')}
        })
        }
    }

