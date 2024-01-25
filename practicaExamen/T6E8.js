var cuerpo= document.getElementsByTagName('body')[0]
var divisor=document.createElement('div')
divisor.setAttribute('id','todos-los-viajes')
var titulo=document.createElement('h1')
var textoTitulo=document.createTextNode('Subtítulo')
titulo.appendChild(textoTitulo)
cuerpo.appendChild(divisor)
cuerpo.appendChild(titulo)
var json= [
    {src:"/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"]},
    {src:"/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"]},
    
    ]

function crearEstructura(){
    var lista=document.createElement('ul')
    for(let objeto of json){
        var elemento=document.createElement('li')
        var imagen=document.createElement('img')
        imagen.setAttribute('src',objeto.src)
        var parrafo=document.createElement('p')
        var textoParrafo=document.createTextNode(objeto.desc)
        parrafo.appendChild(textoParrafo)
        var sublista=document.createElement('ul')
        for(let especificacion of objeto.specs){
            var subelemento=document.createElement('li')
            var texto=document.createTextNode(especificacion)
            subelemento.appendChild(texto)
            sublista.appendChild(subelemento)
        }
        elemento.appendChild(imagen)
        elemento.appendChild(parrafo)
        elemento.appendChild(sublista)
        lista.appendChild(elemento)
    }
    cuerpo.appendChild(lista)
}
crearEstructura()