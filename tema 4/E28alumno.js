class Alumno extends Persona{
    constructor(nombre,apellidos,dni,fecha_nacimiento,curso,notas){
        super(nombre,apellidos,dni,fecha_nacimiento);
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.fecha_nacimiento=fecha_nacimiento;//no sé por que si quito los this.atrb que ya están en super, tengo problemas con la fecha de nacimiento
        this.curso=curso;
        this.notas=notas;//map de array
    };imprimir_alumno(){
        
        document.write("Nombre: " + this.nombre + "<br>","Apellidos: " + this.apellidos + "<br>","DNI: " + this.dni + "<br>","Fecha de Nacimiento: " + this.fecha_nacimiento + "<br>","Curso: " + this.curso + "<br>","Notas:<br>");
        for (const asignatura in this.notas) {
            const notasAsignatura = this.notas[asignatura];
            document.write("  " + asignatura + ": " + notasAsignatura.join(", ") + "<br>");
        }
    };
    calcularMedia() {
        /*
        var listaNotas=[...this.notas.values()]
        var suma = listaNotas.reduce((acumulador, nota) => acumulador + nota, 0);
        var media= suma /listaNotas.length
        console.log('media', media)
        return media;*/
        var sumaTotal=0;
        for (let[asignatura,notas] of this.notas){
            var sumaParcial=0;
            var i =0;
        
            for (let nota of notas){
                sumaParcial+=nota
                document.write('suma parcial',sumaParcial,'<br>')
                i+=1;
                if(i==notas.length){
                    sumaParcial=sumaParcial/notas.length
                }
            }
            sumaTotal+=sumaParcial
        }
        sumaTotal/=this.notas.size;
        document.write('<br>',sumaTotal)
    };
    obtenerMejorNota(){
        var registros=new Map();
        var mejor=0;
        for (let [asignatura,notas] of this.notas){
            for (let nota of notas){
                if (nota>mejor){
                    mejor=nota;
                    registros.set(asignatura,mejor)
                }
            }
        }for(let [asig,notaa]of registros){
            document.write(`<br>${asig}: ${notaa}`);//ahora tengo un mapa con la nota mas alta de cada asignatura, quiero la nota mas alta en total y las asignaturas en las que esté
        }
        var mejorTotal=0;
        var arrayRegistro=[...registros].sort();
    }
};
