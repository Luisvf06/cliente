function eliminarRepetidos(...parametro){
    var conjunto= new Set(parametro)
    var lista= new Array(...conjunto)
    for (let i=0;i<lista.length;i++){
        document.write(lista[i]);
    }
    
}
eliminarRepetidos(1,2,3,4,2,1)