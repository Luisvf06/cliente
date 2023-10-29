//Escribe una función que reciba como argumento de entrada un array de números y averigue utilizando métodos del objeto Math cuál es el menor y el mayor de ellos.
function mayorMenor(lista){
    var mayor=0;
    var menor=0;
    var primero=lista[0]
    for(let i=0;i<lista.length;i++){
        mayor=Math.max(primero,lista[i]);
        menor=Math.min(primero,lista[i]);
    }
    console.log(mayor,menor)
}
mayorMenor([-1,-2,-3])