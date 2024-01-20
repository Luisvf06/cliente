/*Añadir un botón de reseteo de formulario con confirmación antes de borrar*/
window.addEventListener('load',inicializar);
function inicializar(){
    var formulario = document.getElementById('formulario');
    var reseteo= document.getElementById('reseteo')
    function borrar(){
        var borrado= confirmar()
        if (borrado===true){
            /*
            for (let element of formulario.elements){
                if( element.type !== 'button'){
                    element.value=""
                }
                
            }*/
            formulario.reset()
        }
    }
    function confirmar(){
        return confirm('Seguro que quieres borrar los datos introducidos?')

    }
    reseteo.addEventListener('click',borrar)
}