class Banco{
    constructor(cuenta,propietario,saldo){
        this.cuenta=cuenta;
        this.propietario=propietario;
        this.saldo=saldo;
    }
    ingresar(n){
        this.saldo+=n;
        return this.saldo
    }
    retirar(n){
        if(this.saldo>=n){
            this.saldo-=n;
            return this.saldo
        }else{document.write('No se puede hacer la operacion')}
        
    }
    transferir(recibe,cantidad){
        if(this.saldo>=cantidad){
            this.saldo-=cantidad
            recibe.saldo+=cantidad
            return this.saldo, recibe.saldo
        }
    }
}