var json=[{clase_pais:"usa",ciudad_h2:"New York,NY",detalle_precio_total:"1,899",detalle_num_noches:7,precio_noche:275,ruta_imagen:"./photos/newyork.jpg",pie_imagen:"Puente Brooklyn"},
{clase_pais:"paris",ciudad_h2:"Paris,Francia",detalle_precio_total:"1,499",detalle_num_noches:5,precio_noche:300,ruta_imagen:"./photos/paris.jpg",pie_imagen:"Notre Dame de Paris"},
{clase_pais:"uk",ciudad_h2:"Londres,UK",detalle_precio_total:"2,199",detalle_num_noches:5,precio_noche:440,ruta_imagen:"./photos/london.jpg",pie_imagen:"Torre de Londres"}]

var lista= document.createElement('ul')

for (let elemento of json){
    var el=document.createElement('li')
    el.setAttribute('class',`viaje ${elemento.clase_pais}`)
    var subtitulo=document.createElement('h2')
    
    var textoSubtitulo=document.createTextNode(elemento.ciudad_h2)
    subtitulo.appendChild(textoSubtitulo)
    el.appendChild(subtitulo)
    var precio= document.createElement('span')
    var textoPrecio=document.createTextNode(elemento.detalle_precio_total)
    var por=document.createTextNode('por')
    var textoPrecio2=document.createTextNode(elemento.detalle_num_noches)
    var noches=document.createTextNode('noches')
    precio.setAttribute('class','detalle')
    precio.appendChild(textoPrecio)
    precio.appendChild(por)
    precio.appendChild(textoPrecio2)
    precio.appendChild(noches)
    el.appendChild(precio)

    var boton=document.createElement('button')
    boton.setAttribute('class','reserva')
    
    var textoBoton=document.createTextNode('Reservalo ya!')
    boton.appendChild(textoBoton)
    el.appendChild(boton)

    var sublista=document.createElement('ul')
    var subelemento=document.createElement('li')
    var imagen=document.createElement('img')
    imagen.setAttribute('src',elemento.ruta_imagen)
    subelemento.appendChild(imagen)
    var span=document.createElement('span')
    var textoSpan=document.createTextNode(elemento.pie_imagen)
    span.appendChild(textoSpan)
    subelemento.appendChild(span)
    sublista.appendChild(subelemento)
    el.appendChild(sublista)
    lista.appendChild(el)
}    
var cuerpo=document.getElementsByTagName('body')[0]
cuerpo.appendChild(lista)    
var lista=document.getElementsByTagName('ul')[0]
lista.style.visibility='hidden'
function evento(){
    var h1=document.getElementsByTagName('h1')[0]
    h1.addEventListener('click',function(){
        var lista=document.getElementsByTagName('ul')[0]
        if(lista.style.visibility==='hidden'){
            lista.style.visibility="visible"
        }else if(lista.style.visibility==='visible'){
            lista.style.visibility==='hidden'}

})
}evento()

function destacado(){
    var imagenes=document.getElementsByTagName('img')
    var pies=document.getElementsByTagName('span')
    for (let imagen of imagenes){
        imagen.addEventListener('mouseover',function(){
            var pie=imagen.nextElementSibling;
            pie.setAttribute('class', 'detalle destacado')
        })
        imagen.addEventListener('mouseout',function(){
            var pie=imagen.nextElementSibling;
            pie.setAttribute('class', 'detalle')
        })
    }
}
destacado()

function ejercicioC(){
    var botones=document.getElementsByClassName('reserva')
    for (let boton of botones){
        boton.addEventListener('click',function(){
            var entrada=document.createElement('input')
            entrada.setAttribute('placeholder','nombre')
            var botonEnvio=document.createElement('button')
            boton.insertAdjacentElement('afterend',entrada)
            entrada.insertAdjacentElement('afterend',botonEnvio)

            if(entrada&&entrada.value!==""){
                botonEnvio.addEventListener('click',function(){
                    const datosEntrada=this.localStorage.getItem('nombre')
                    var nombreEntrada=document.getElementsByTagName('input')[0].value
                    datosEntrada={datos:nombreEntrada}
                    localStorage.setItem('nombre',JOSN.stringify(nombreEntrada))
                    
                })
            }
        })
    }
}
ejercicioC()
