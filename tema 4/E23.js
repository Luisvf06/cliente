var modulos= new Map()
modulos.set('DWECL',['Desarrollo web entorno cliente','6','8'])
modulos.set('DWES',['Desarrollo web entorno servidor','9','8'])
modulos.set('DIW',['desarrollo interfaces web','5','7'])
modulos.set('DAW',['despliegue aplicaciones web','6','6'])

function crearMapa(clave,valor){
    var mapa = new Map();
    mapa.set(clave,valor)
    for(var [i,j]of mapa){
        document.write(`clave: ${i} valor: ${j} <br>`)
    }
    return mapa
}
crearMapa('programacion',['pr','8','10'])
crearMapa('LM',['lenguaje de marcas','9','4'])
