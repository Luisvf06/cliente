var i1=new Integrante('12345W','Pepe','perez')
var i2=new Integrante('23456Q','Paco','Sanz')
var i3=new Integrante('34567E','Lolo','man')
var b1= new Banda('Chunguitos','2000',123456789,'Soul')//si el año es texto (con comillas) en el sort debe ir new Date, si no no hace falta
var b2=new Banda('Camela','1999',78945612,'pop')
var b3=new Banda('Fito','2015',45678912,'pop')
var b0=new Bandas()
b1.integrantes.push(i1)
b1.integrantes.push(i2)
b2.integrantes.push(i3)
b2.integrantes.push(i2)
b3.integrantes.push(i1)
b3.integrantes.push(i3)
b0.añadirBanda(b1)
b0.añadirBanda(b2)
b0.añadirBanda(b3)
b1.mostrarIntegrantes()

document.write(b0.imprimirListadoBandas())

b0.buscarBandaPorNombre('Camela')
console.log(b0.buscarBandasPorEstilo('pop'))
b0.ordenarBandasPorAño()
document.write(b0.imprimirListadoBandas())
