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
        return resultado
    }
    ordenarNota(dni) {
        // Buscar al alumno por DNI
        const alumno = this.buscarDni(dni);
    
        var notasOrdenadas = alumno.notas[1].sort((a, b) => a - b);
        
            // Imprimir las notas ordenadas (puedes ajustar esto según tus necesidades)
            document.write(notasOrdenadas + "<br>");
            console.log("Alumno no encontrado");
        }
    
    ordenarApellido(){
    var alumnosOrdenados;
    alumnosOrdenados = this.alumnos.sort((a, b) => {
a[1].apellido-b[1].apellido
    });

    console.log(alumnosOrdenados);

    
        }
    
    imprimirAlumnos(){
        for(let alumno of this.alumnos){
            document.write('<br>',alumno.nombre)
        }
    }
}
