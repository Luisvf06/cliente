class Jefe extends Empleado{
    constructor(nombre, sueldo, departamento){
        super(nombre,sueldo)
        this.departamento=departamento;
    }
    calcularSalarioAnual(plus){
        var salarioAnual= this.sueldo*12+plus;
        return salarioAnual;
    }
}