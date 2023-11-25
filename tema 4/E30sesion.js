class Sesion{
    constructor(){
        this.calificaciones=[]
    }
    agregarFuncion(piloto,escuderia,tiempo){
        var actual= this.calificaciones.find((sesion)=>sesion.piloto.nombre === piloto.nombre);
        if(actual){
            if(actual.tiempo>tiempo){
                actual.tiempo=tiempo;
            }
        }else{this.calificaciones.push(new Piloto(piloto,escuderia,tiempo))}
    }
    eliminarSesion(piloto) {
        const indice = this.calificaciones.findIndex((sesion) => sesion.piloto.nombre === piloto.nombre);
    
        if (indice !== -1) {
        this.calificaciones.splice(indice, 1);
        }
    }
    
    ordenarPorTiempo() {
        this.calificaciones.sort((a, b) => a.tiempo - b.tiempo);
    }
    
    ordenarPorNombre() {
        this.calificaciones.sort((a, b) => a.piloto.nombre.localeCompare(b.piloto.nombre));
        }
    }
