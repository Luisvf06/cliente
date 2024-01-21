window.addEventListener('load',inicializar);
function inicializar(){
    var divisor1= document.getElementById('testdiv')
    var para= document.createElement('p')
    var text1= document.createTextNode('Este es el ')
    para.appendChild(text1)
    var enfasis=document.createElement('em')
    var txt2=document.createTextNode(' contenido ')
    enfasis.appendChild(txt2)
    para.appendChild(enfasis)
    var txt3=document.createTextNode('de mi párrafo')
    para.appendChild(txt3)
    divisor1.appendChild(para)
    /*version corta
    var divisor1 = document.getElementById('testdiv');
var para = document.createElement('p');
para.innerHTML = 'Este es el <em>contenido</em> de mi párrafo';
divisor1.appendChild(para);
*/
}
