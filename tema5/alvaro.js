window.addEventListener("load", inicializar)

function inicializar() {

    cargarPreferencias()
    var nombre = document.getElementById('nombre')


    function enviarNombre(){
        
        guardarPreferencias(nombre)

        alert(`Hemos guardado el nombre: ${nombre.value}.`);
    
    }

    function guardarPreferencias(nombre) {
        // Crear un objeto con las preferencias del usuario
        const preferenciasUsuario = {
            nombre: nombre.value,
            valor: 'nintendo'
        };
    
        // Convertir el objeto a JSON y guardarlo en localStorage
        localStorage.setItem("preferenciasUsuario", JSON.stringify(preferenciasUsuario));
        console.log(localStorage)
    }

    function cargarPreferencias() {
        // Obtener preferencias del usuario desde localStorage
        const preferenciasUsuario = localStorage.getItem("preferenciasUsuario");
  
        if (preferenciasUsuario) {
            // Convertir la cadena JSON de nuevo a un objeto
            const preferenciasObjeto = JSON.parse(preferenciasUsuario);
            console.log(preferenciasObjeto)
    
            // Mostrar un mensaje con las preferencias almacenadas
            alert(`Hola ${preferenciasObjeto.nombre}!`);
            
        }
    }
    

    document.getElementById('boton').addEventListener('click',enviarNombre)

    
}