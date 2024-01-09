/*Modifica la siguiente función JavaScript e inclúyela dentro de un fichero .js, de manera
que no use innerHTML, es decir, crea los nodos elementos y textos necesarios y
añádelos a un HTML.
function get_fortune() {
var hoy = new
Date(); dichos= new
Array(
"Carpe Diem.",
"El silencio es oro, pero la cinta aislante es
plata.", "Una manzana al día, mantiene al doctor en la
lejanía.", "A cada uno lo suyo.",
"Si a la primera no lo consigues, inténtalo de nuevo.",
"No te conformes con la mediocridad, pelea por el
éxito", "Vive y deja vivir."
);
var n=dichos.length;
numero = Math.floor(Math.random()*n);
dicho = "Hoy es: "+hoy+ ".<br /><br />Hoy la suerte te dice:
<br /><br /><em>" +dichos[numero] +"</em>";
document.getElementById('divdicho').innerHTML =
dicho;
} */
window.addEventListener('load',inicializar);
function inicializar(){
    function get_fortune(){
        var hoy = new Date(); 
        var dichos= new Array(
        "Carpe Diem.",
        "El silencio es oro, pero la cinta aislante es plata.", "Una manzana al día, mantiene al doctor en la lejanía.", "A cada uno lo suyo.", "Si a la primera no lo consigues, inténtalo de nuevo.", "No te conformes con la mediocridad, pelea por el éxito", "Vive y deja vivir." );
        var n=dichos.length;
        var numero = Math.floor(Math.random()*n);
        var salto= document.createElement('br')
        var texto1=document.createTextNode('Hoy es: ')
        var texto2=document.createTextNode('Hoy la suerte te dice: ')
        var enfasis=document.createElement('em')

        var dicho= dichos[numero]
        enfasis.textContent=dicho
        var parrafo=document.createElement('p');
        parrafo.appendChild(texto1)
        parrafo.appendChild(document.createTextNode(hoy.toString()))
        parrafo.appendChild(salto)
        parrafo.appendChild(texto2)
        parrafo.appendChild(salto)
        parrafo.appendChild(enfasis)
        var cuerpo= document.getElementsByTagName('body')[0]
        cuerpo.appendChild(parrafo)
        }
        get_fortune()
}