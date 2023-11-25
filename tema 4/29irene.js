/*29. Crear un objeto Aula que contenga los alumnos de un aula y tenga los siguientes métodos:
buscar un alumno del aula por DNI.
ordenar por nota para un alumno en particular
ordenar el array de alumnos por apellido
imprimir los alumnos de un aula. 
 */

class Aula {
    constructor(alumnos){
        this.alumnos=alumnos;
    }
    //métodos
    buscarDNI(dni){
        this.alumnos.find((al)=>al.dni==dni);
    };

    ordenarPorNota(alumno){
        return [...alumno.notas].sort(([amodulo,anota],[bmodulo,bnota])=>bnota-anota)
    }

    ordenarPorApellido(){
        return this.alumnos.sort((a,b)=>a.apellido.localeCompare(b.apellido));
    };

    imprimirAula(){
        //document.write("Datos del Aula: <br>");
        return this.alumnos.forEach((alumno) => {alumno.imprimirAlumno();
        //document.write("<br>");
        });
}
}
let a1= new Aula()