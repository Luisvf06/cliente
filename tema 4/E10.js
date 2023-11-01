//1

const tripleAndFilter=arr=>arr.map(value=>value*3).filter=(value=>value%5===0)

//2

const doubleOddNumbers=arr=>arr.filter(val=>val%2!==0).map(function (val){return val*2});

document.write(doubleOddNumbers([2,3,4,5,6,7,8]))

//3

const bar = (...arguments) => arguments.reduce((txt, arg) => txt + arg, '');

//Observando los ejemplos anteriores, repite el ejercicio 9.d, utilizando la programación funcional
const sumaArgPares=(...arg)=>arg.filter(arg=>arg%2===0).reduce((suma,argumento)=>suma +argumento,0);
sumaArgPares(2,3,4,5,6,7,8)
