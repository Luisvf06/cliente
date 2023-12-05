class integrante{
    constructor(dni,nombre,apellidos){
        this.dni=dni
        this.nombre=nombre
        this.apellidos=apellidos
    }
    mostrarIntegrante(){
        document.write('<br>DNI: ',this.dni,'<br>Nombre: ',this.nombre,'<br>Apellidos: ',this.apellidos)
    }
}