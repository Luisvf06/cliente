b1= new CuentaBanco(123456,100);
b1.ingresar(100)
b1.retirar(20);
//document.write(b1.saldo) forma incorrecta de imprimir, hay que hacerlo llamando a la funcion concreta
b1.imprimirSaldo()