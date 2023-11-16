//Crear un objeto Punto con dos coordenadas (x,y) y un método para averiguar el cuadrante en el que está
class Punto {
    constructor(x,y){
        this.x=x;
        this.y=y;
    };
cuadrante(){
    if (this.x>0 & this.y>0){
        console.log('cuadrante 1');
    }else if(this.x>0&this.y<0){
        console.log('cuadrante 4');
    }else if(this.x<0&this.y<0){
        console.log('cuadrante 3');
    }else if(this.x<0&this.y>0){
        console.log('cuadrante 2');
    }else{console.log('está en los ejes')}
}}
