class CuentaBanco{
    constructor(numeroCuenta,saldo){
        this.cuenta=numeroCuenta;
        this.saldo=saldo;
    }
    ingresar(cantidad){
        this.saldo+=cantidad;
        return this.saldo
    }
    retirar(cantidad){
        this.saldo-=cantidad;
        return this.saldo
    }
    imprimirSaldo(){
        document.write(this.saldo)
    }
}