class Coche extends Vehiculo{
    constructor(make,model,year,puertas){
        super(make,model,year)
        this.puertas=puertas;
    }
    imprimirCoche(){
        document.write('<br>Hace: ',this.make,'<br>Modelo: ',this.model,'<br>Año: ',this.year,'<br>Puertas: ',this.puertas)
    }
}