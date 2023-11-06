/*Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

Muestra cuántos módulos hay almacenados
Muestra el contenido de la estructura
Devuelve las abreviaturas de todos los módulos guardados
Devuelve el nombre completo de todos los módulos
Consulta si está el módulo "DAW"
Si está, elimínalo.
Ordena alfabéticamente el map según las abreviaturas de los módulos*/
var modulos= new Map()
modulos.set('DWECL','Desarrollo web entorno cliente')
modulos.set('DWES','desarrollo web entorno servidor')
modulos.set('DAW','Despliegue aplicaciones web')
modulos.set('DIW','Diseño interfaces web')
//a
document.write(modulos.size,'<br>')
//b
Document.write(modulos)
//c
let key= modulos.keys();
for (let k of key){
    document.write('siglas: ${k}')

}
//d

for (let [key,val]of modulos){
    document.write('nombre completo: ${val}')
}
//e
if(modulos.has('DAW')){
    document.write('DAW está en modulos')
}
//f
if(modulos.had('DAW')){
    modulos.delete('DAW')
    document.write(modulos)
}
//g ordenar por key
var mapaordenado= new Map([...modulos].sort())
document.write(mapaordenado)




