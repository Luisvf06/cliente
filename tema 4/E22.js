/*Utiliza un map almacenar información sobre módulos impartidos en el IES de la siguiente manera:  ("DWECL", “Desarrollo Web en Entorno Cliente”). Añade la información con posterioridad a la creación de la estructura.

a Muestra cuántos módulos hay almacenados
b Muestra el contenido de la estructura
c Devuelve las abreviaturas de todos los módulos guardados
d Devuelve el nombre completo de todos los módulos
e Consulta si está el módulo "DAW"
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
for (const [clave,valor]of modulos){
    document.write(`Clave: ${clave} Valor: ${valor} <br>`)
}

//c
let key= modulos.keys();
for (let k of key){
    document.write(`siglas: ${k}<br>`)
}
//d
for (let [key,val]of modulos){
    document.write(`nombre completo: ${val}<br>`)
}
//e
function consultarMap(entrada){
if(modulos.has(entrada)){
    document.write('DAW está en modulos <br>')
    return true
}
}
var ejercicioE=consultarMap('DAW');
//f
function eliminarItem(key){
    if(consultarMap(key)==true){
        modulos.delete(key)
    }
}
eliminarItem('DAW')
//codigo para comprobar que se ha borrado
for (const [clave,valor]of modulos){
    document.write(`Clave: ${clave} Valor: ${valor} <br>`)
}
//g ordenar por key
document.write('mapa ordenado<br>')
var mapaordenado= new Map([...modulos].sort())
for(const[clave, valor ]of mapaordenado){
    document.write(`clave: ${clave} valor: ${valor}<br>`)
}





