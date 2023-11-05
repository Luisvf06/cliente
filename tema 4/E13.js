//Realizar una función que rellene un matriz de orden N de número aleatorios.
function matrizn(n){
    var array=[]
    
    for(let i=0;i<n;i++){
        var lista=[]
        for(let j=0;j<n;j++){
            lista.push(Math.round(Math.random()*10))
        }
        array.push(lista)
    }
    console.log(array)
}
matrizn(3)