var cliente1= new Banco(1234,'luis',100)
var cliente2= new Banco(1235,'Paco',100)
cliente1.ingresar(5)
document.write(cliente1.transferir(cliente2,50))