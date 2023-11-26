class Banco{
    constructor(nombre,rama,){
        this.nombre=nombre;
        this.rama=rama;
    }
    agregarRama(nombre){
        this.rama.push(nombre)
    }
    eliminarRama(nombre){
        const indice= this.rama.indexOf(nombre);
        this.rama.splice(indice,1)
    }
    ordenarRama(){
        this.rama.sort((a, b) => a.localeCompare(b))//localcompare es para las mayusculas, para ordenar de forma normal basta con .sort, el a-b es para numeros
    }
    filtrarRama(){
        var ramaFiltrada= this.rama.filter(function(rama){return rama.length >5})
        return ramaFiltrada
    }
    imprimirBanco(){
        document.write('<br>',this.nombre,'<br>',this.rama)
    }
}