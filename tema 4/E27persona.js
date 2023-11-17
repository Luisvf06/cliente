//Implementar el ejercicio 20 y 21(sólo imprimir los datos), usando objetos. (P.e. clase Persona) 
class Persona{
    constructor(nombre,apellidos,dni,fecha_nacimiento){
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.fecnac=fecha_nacimiento;
    };imprimir_persona(){
        document.write('Nombre: ', this.nombre,' apellidos: ',this.apellidos,' dni: ',this.dni,' fecha de nacimiento: ', this.fecnac)
    }
}