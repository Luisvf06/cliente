class Alumno extends Persona{
    constructor(nombre,apellidos,dni,fecha_nacimiento,curso,notas){
        super(nombre,apellidos,dni,fecha_nacimiento);
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.fecha_nacimiento=fecha_nacimiento;
        this.curso=curso;
        this.notas=notas;//map de array
    };imprimir_alumno(){
        document.write(document.write('Nombre: ', this.nombre,' apellidos: ',this.apellidos,' dni: ',this.dni,' fecha de nacimiento: ', this.fecnac, 'curso: ', this.curso,'notas: ',this.notas ))
    };

    obtener_notas(){
        var contador=[];
        var suma=0;
        for (let key in this.notas){
            document.write(this.notas[key].values())
        }
    }
}
/*        
        for(let [modulo,nota]of this.notas){
            
            for(let i=0;i<nota.length;i++){
                suma+=nota[i];
                if(i+1==notas.length){
                    suma=suma/notas.length;//esto es la nota media de cada asignatura despues de haber sumado todas las notas individuales
                    contador.push(suma);
                }
            }
        };document.write(contador);
        return contador;
    };
    
        for (let valor of this.notas.values()){
            for(let i=0;i<this.notas.values().length;i++){
                document.write(this.notas.keys, this.notas.values()[i])
        this.notas.forEach(function(clave,valor){
            for (let nota=0;nota<valor.length;nota++){
                document.write(nota)
            }document.write(valor)
        })        
        };
    calcular_media(contador){
        var media=0;
        for(var i=0;i<contador.length;i++){
            media+=contador[i];
            if(i+1==contador.length){
                media/=contador.length;
            }
        }document.write(media);
        return media
    };encontrar_mejor_nota(){
        var mejor=[];
        var mapa=new Map();
        var maximo
        for(let [modulo,notas]of this.notas){//aqui notas es un array
            maximo=notas.sort((a,b)=>{return b-a})
            mejor=maximo[0]//esto coge la mejor nota del modulo,aqui mejor es un int
            mapa=this.notas.set(modulo,maximo[0])//aqui tengo la nota maxima de cada modulo, seria el dato de modulo y un integral para el value
            }//al acabar la iteracion, mapa tiene una clave con un integral de valor,no un array
            var notamaxima=[...mapa].sort((a,b)=>{return b-a});
            var mapaordenado=new Map([...mapa].sort(function(a,b){return b-a}));//ordeno de forma que la nota más alta está en primer lugar
            for (let[modulo,notas]of mapaordenado){
                while(mapaordenado.has(mapaordenado)){}
            };
        
    };*/
