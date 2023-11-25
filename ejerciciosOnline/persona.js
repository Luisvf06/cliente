//https://www.w3resource.com/javascript-exercises/oop/index.php

/*1 Write a JavaScript program to create a class called "Person" with properties for name, age and country. Include a method to display the person's details. Create two instances of the 'Person' class and display their details.*/ 
class Persona{
    constructor(nombre,edad,pais){
        this.nombre=nombre;
        this.edad=edad;
        this.pais=pais;
    }
    imprimirPersona(){
        document.write(this.nombre,'<br>',this.edad,'<br>',this.pais)
    }
}