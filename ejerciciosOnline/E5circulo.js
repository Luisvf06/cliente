class Circulo extends Forma{
    constructor(radio){
        super()
        this.radio=radio
    }
    calcularArea(){
        super.calcularArea()
        var area=Math.PI*Math.pow(this.radio,2)
        console.log(area)
        return area
    }
}