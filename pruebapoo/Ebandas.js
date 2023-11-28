class Bandas{
    constructor(){
        this.bandas=[]
    }
    añadirBanda(n){
        var coincidenciaNombre=false
        for(let banda of this.bandas){
            if(banda[0].includes(n.nombre)){
                coincidenciaNombre=true;
                break
            }
        }
        if(coincidenciaNombre==false){
            this.bandas.push(n)
        }
    }
    imprimirListadoBandas(){
        for(let banda of this.bandas){
            document.write('Nombre: ',banda.nombre,'Año de formación: ', banda.formacion,'Telefono: ',banda.telefono,' Estilo: ',banda.estilo,' Integrantes: ')
            for(let integrantes of this.bandas.integrantes){
                document.write('Nombre: ',integrantes.nombre,' Apellido: ',integrantes.apellido,' DNI: ',integrantes.dni)
            }
        }
    }
    buscarBandaPorNombre(nombre){
        var banda= this.bandas.find((band)=>band.nombre==nombre)
        return banda
    }
    buscarBandasPorEstilo(estilo){
        var banda= this.bandas.filter((band)=>band.estilo=estilo)
        return banda
    }
    ordenarBandasPorAño(){
        this.bandas.sort((a,b,)=>{
            const añoA=new Date(a.creacion).getFullYear();
            const añoB=new Date(b.creacion).getFullYear();
            return añoA-añoB
            //para ordenar de forma normal seria this.bandas.sort((a,b)=>a.creacion-b.creacion)
        })
    }
    eliminarBanda(nombre) {
        const indice = this.bandas.findIndex(banda => banda.nombre === nombre);
    
        if (indice !== -1) {
            this.bandas.splice(indice, 1);
        }
    }
}