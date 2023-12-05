class bandas{
    constructor(){
        this.bandas=[]
    }
    imprimirListadoBandas(){
        for(let banda of this.bandas){
            document.write('Nombre: ',banda.nombre,'<br>Año de formación: ', banda.formacion,'<br>Telefono: ',banda.telefono,'<br>Estilo: ',banda.estilo,'<br>Integrantes: ')
            for(let integrantes of banda.integrantes){
                document.write('<br>Nombre: ',integrantes.nombre,'<br>Apellido: ',integrantes.apellidos,'<br>DNI: ',integrantes.dni)
            }
        }
    }
    buscarBandaPorNombre(nombre){
        var banda= this.bandas.find((band)=>band.nombre===nombre)
        return banda
    }
    ordenarBandasPorAño(){
        this.bandas.sort((a,b,)=>{
            const añoA=new Date(a.formacion).getFullYear();
            const añoB=new Date(b.formacion).getFullYear();
            return añoA-añoB
        })
    }
    
}