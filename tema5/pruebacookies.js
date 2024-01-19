/*document.cookie= "nombre=Luis; expires= 1/1/2025;"
document.cookie="apellidos= Vazquez Franco; expires=1/1/2025*/

function crearCookie(nombre,valor,tiempo){
    const fecha=new Date();
    fecha.setTime(fecha.getTime()+(tiempo*24*60*60*1000))
    let caducidad= "expires="+fecha.toUTCString();
    document.cookie=`${nombre}=${valor};${caducidad};path=/`
}
crearCookie('nombre','pepe',2)
crearCookie('apellido','perez')
//console.log(document.cookie)

function verCookie(nombre){
    const cDecoded=decodeURIComponent(document.cookie);
    const cArray=cDecoded.split("; ");
    let result=null
    cArray.forEach(elemento=>{
        if(elemento.indexOf(nombre)==0){
            result = elemento.substring(nombre.length + 1)
        }
    })
    return result
}
console.log(verCookie('nombre'))

//Segunda parte, incorpora la parte del html
const texto1=document.querySelector("#texto1")
const texto2= document.querySelector("#texto2")
const botonenviar=document.querySelector("#enviar")
const botongalleta=document.querySelector("#boton")

botonenviar=addEventListener('click',()=>{
    crearCookie('nombre',texto1.value,365)
    crearCookie('apellido',texto2.value,365)
});
    botongalleta.addEventListener('click',()=>{
        texto1.value=verCookie('texto1')
        texto2.value=verCookie('apellido')
    })