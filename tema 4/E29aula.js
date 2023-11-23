class Aula{
    constructor(){
        this.alumnos=[];//entiendo que es un array
    }agregarAlumno(alumno){
        this.alumnos.push(alumno)
    }
    buscarDni(dni){
        var resultado;
//se puede hacer con un for pero hay que hacerlo con find
        resultado=this.alumnos.find((alumno)=>alumno.dni===dni);
        console.log(resultado)
        document.write('<br>',resultado.imprimir_alumno())
}
}

/*buscarDni(dni){
//se puede hacer con un for pero hay que hacerlo con find
        for(let i=0;i<this.alumnos.length; i++){
            var resultado=alumno.find((persona)=>persona[i][2]==dni)
        }document.write(resultado);
        console.log(resultado);
    }*/