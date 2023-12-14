var i1=new integrante('12345W','Pepe','perez')
var i2=new integrante('23456Q','Paco','Sanz')
var i3=new integrante('34567E','Lolo','man')
var b1= new Banda('Chunguitos','2000',123456789,'Soul')
var b2=new Banda('Camela','1999',78945612,'pop')
var b3=new Banda('Fito','2015',45678912,'pop')
var b0=new bandas(b1,b2)

document.write('<br>',i1.mostrarIntegrante(),'<br>')
document.write(b1.estilo,'<br>')
b1.integrantes.push(i1)
b1.integrantes.push(i2)
document.write('<br>',b1.mostrarBanda(),'<br>')

b1.integrantes.push(i3);
document.write('<br>',b1.mostrarBanda(),'<br>')