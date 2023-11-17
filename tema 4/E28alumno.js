class Alumno extends Persona{
    constructor(nombre,apellidos,dni,fecha_nacimiento,curso,notas){
        super(nombre,apellidos,dni,fecha_nacimiento);
        this.nombre=nombre;
        this.apellidos=apellidos;
        this.dni=dni;
        this.fecha_nacimiento=fecha_nacimiento;
        this.curso=curso;
        this.notas=notas;//dicionario de array
    };obtener_notas(){
        var contador=[];
        var suma=0;
        for(let [modulo,notas]of this.notas){
            for(let i=0;i<notas.length;i++){
                suma+=notas[i];
                if(i+1==notas.length){
                    suma=suma/notas.length;//esto es la nota media de cada asignatura despues de haber sumado todas las notas individuales
                    contador.push(suma);
                }
            }
        };return contador;
    }calcular_media(contador){
        var media=0;
        for(var i=0;i<contador.length;i++){
            media+=contador[i];
            if(i+1==contador.length){
                media/=media/contador.length;
            }
        }return media
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

        
    };imprimir_alumno(){
        document.write(document.write('Nombre: ', this.nombre,' apellidos: ',this.apellidos,' dni: ',this.dni,' fecha de nacimiento: ', this.fecnac, 'curso: ', this.curso,'nota media: ' ))
    }
}
