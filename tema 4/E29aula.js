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
        return [...alumno.notas].sort(([aclave,anota],[bclave,bnota])=>bnota-anota)     

        }
    
    ordenarApellido(){
    return this.alumnos.sort((a,b)=>a.apellidos.localeCompare(b.apellidos))
        }
    
    imprimirAula(){
        return this.alumnos.forEach((alumno) => {alumno.imprimirAlumno();
            //document.write("<br>");
            });
    }
}
