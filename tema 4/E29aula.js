class Aula{
    constructor(alumnos){
        this.alumnos=alumnos;
    }buscarDni(dni){
        this.alumnos.find((alumno)=>alumno.dni==dni)//se puede hacer con un for pero hay que hacerlo con find
    }
}