window.addEventListener('load',inicializar);
function inicializar(){
    function actualizarTituloConHora() {
        var ahora = new Date();//creo una variable con la fecha y hora actual y accedo a su hora, minuto y segundo
        var hora = ahora.getHours();
        var minutos = ahora.getMinutes();
        var segundos = ahora.getSeconds();
        var horaActual = hora + ":" + minutos + ":" + segundos;//uno las 3 variables que me interesan para montar el reloj
        document.title = "Reloj Digital - " + horaActual;
    }
    setInterval(actualizarTituloConHora, 1000);//hago que el reloj se actualice cada 1 segundo. Sin esta par el titulo no muestra el reloj
}