notasLuis= new Map();
notasLuis.set('daw',[4,3,5])
notasLuis.set('des',[4,7,0])
notasLuis.set('diw',[3,6,7])

notasPaco=new Map();
notasPaco.set('Pr',[4,2,6])
notasPaco.set('LM',[5,6,7])
notasPaco.set('ED',[3,7,5])
p1= new Alumno('Luis','Vazquez Franco','12345678Q','06/03/1994','2',notasLuis)
p2=new Alumno('Paco','Sanz Perez','9876542W','05/07/2010','1',notasPaco)
a1=new Aula();
a1.alumnos.push(p1)
a1.alumnos.push(p2)
a1.buscarDni('12345678Q')