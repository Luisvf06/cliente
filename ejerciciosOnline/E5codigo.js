var c1= new Circulo(3);
var t1= new Triangulo(3,2);
c1.calcularArea();
t1.calcularArea();
//t1.imprimirArea()
var t2= new Triangulo(4,5);
t2.calcularArea();
var almacen1= new Triangulos();
almacen1.agregar(t1);
almacen1.agregar(t2);
almacen1.imprimir();