//Crear un objeto Rectángulo con un constructor a partir de dos objetos Punto, con métodos para hallar el perímetro del mismo y su área. Añade también dos métodos para calcular la base y la altura del rectángulo a partir de los puntos.
class Rectangulo{
    constructor(p1,p2){
        this.a=p1;
        this.b=p2;
    };
    base(){
        var base=this.b.x-this.a.x;
        document.write(base)
        return  base;
    };altura(){
        var altura=this.b.y-this.a.y;
        document.write('<br>',altura)
        return altura;
    };area(){
        var base=this.base();
        var altura=this.altura();
        document.write('<br>',base * altura);
        return base*altura
    };perimetro(){
        var base=this.base();
        var altura=this.altura();
        console.log('<br>',base*2+altura*2);
        return base*2+altura*2};
}

