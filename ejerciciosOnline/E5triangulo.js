class Triangulo extends Forma{
    constructor(base,altura){
        super()
        this.base=base;
        this.altura=altura
    }
    calcularArea(){
        super.calcularArea()
        var area=(this.base*this.altura)/2
        console.log(area)
        return area;
    }
    imprimirArea() {
        document.write("Área: " + this.calcularArea());
    }
}