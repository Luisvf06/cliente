/*Crear mediante DOM y a partir del siguiente array de objetos expresado en formato JSON:*/
/*<ul>

<li>
<img src="/img/img1.jpg" />
<p> descripcion1 </p>
<ul class="specs">
<li>spec1</li>
<li>spec2</li>
...
			</ul>
		</li>

		<li>
		…
		</li>
</ul>
*/
window.addEventListener('load',inicializar);
function inicializar(){
    var json = [
        { src: "/img/img1.jpg", desc: "descripcion1", specs: ["spec11", "spec12"] },
        { src: "/img/img2.jpg", desc: "descripcion2", specs: ["spec21", "spec22"] }
    ];
    var divisor= document.getElementById('todos-los-viajes')
    var lista = document.createElement('ul')
    //fuera del bucle se crea la lista ul y el divisor
    for(let elemento of json){
        //dentro del bucle se crean los li, la foto y el parrafo, los elementos que se repiten en cada objeto
        var lis = document.createElement('li')
        var foto=document.createElement('img')
        var p = document.createElement('p')
        var textoP=document.createTextNode(elemento.desc)//el texto del parrafo es el valor del elemento desc del objeto

        foto.setAttribute('src',elemento.src)
        p.appendChild(textoP)
        lis.appendChild(foto)
        lis.appendChild(p)
        var sublista=document.createElement('ul')//creo una lista dentro de la lista para las specs

        lista.appendChild(lis)//a la lista se une la foto y el parrafo dentro del elemento li
        divisor.appendChild(lista)
        for (let especificacion of elemento.specs){
            var subli= document.createElement('li')

            var espec= document.createTextNode(especificacion)
            subli.appendChild(espec)
            sublista.appendChild(subli)
            lis.appendChild(sublista)
        }
        
    }
    
}