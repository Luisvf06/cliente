class Vehiculo{
    constructor(make,model,year){
        this.make=make;
        this.model=model;
        this.year=year
    }
    datoVehiculo(){
        document.write('<br>Hace: ',this.make,'<br>Modelo: ',this.model,'<br>Año: ',this.year)
    }
}