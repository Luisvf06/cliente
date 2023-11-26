class Empleado{
    constructor(nombre,sueldo){
        this.nombre=nombre;
        this.sueldo=sueldo
    }
    calcularSalarioAnual(){
        var salarioAnual=this.sueldo*14
        return salarioAnual;
    }
}