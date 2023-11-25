class Triangulos{
    constructor(){
        this.almacen=[]
    }
    agregar(a){
        this.almacen.push(a);
        return this.almacen
    }
    imprimir(){
        for (let element of this.almacen){
            document.write('<br>',element.calcularArea(),'<br>')//desde la clase triangulos puedo acceder a los metdos de Triangulo porque es publica

        }
    }
}