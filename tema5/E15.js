/*Crear un formulario que pida la dirección de envío del usuario. La
próxima vez que el usuario acceda a la página, se rellenará la dirección
utilizando el valor de la cookie.*/
var direccionDato= document.getElementById('texto')
var boton=document.getElementsByTagName('input')[1]
boton.addEventListener('click',guardarDireccion)

function guardarDireccion(){
    direccionUsu={direccion:direccionDato.value};
    localStorage.setItem('direccion',JSON.stringify(direccionUsu))//almaceno el objeto convertido en formato json
}



window.addEventListener('load',()=>{
    const direccionUsu=localStorage.getItem('direccion')
    if(direccionUsu){
        const objetoDireccion=JSON.parse(direccionUsu);// coge el json y lo convierte en un objeto de js
        direccionDato.value=objetoDireccion.direccion
    }
})