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
        for (var[asignatura,notas] of this.notas){
            var sumaParcial=0;
            var i =0;
            var sumaTotal=0;
            for (let nota of notas){
                sumaParcial+=nota
                i+=1;
                if(i==notas.length){
                    sumaParcial/=notas.length
                }document.write(sumaParcial)
                    }
                }
                
            }
        
    

    // Función para calcular la media total de todas las asignaturas
    calcularMediaTotal() {
        let sumaTotal = 0;
        let totalNotas = 0;

        for (const [asignatura, notasAsignatura] of this.notas.entries()) {
            const mediaAsignatura = this.calcularMedia();

            sumaTotal += mediaAsignatura * notasAsignatura.length;  // Sumar la suma ponderada
            totalNotas += notasAsignatura.length;  // Sumar el total de notas
        }
        document.write(sumaTotal/totalNotas);
        return sumaTotal / totalNotas;
    }
};
