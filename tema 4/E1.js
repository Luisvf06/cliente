//Hacer un programa que compruebe si un número es perfecto. 
//Deberá implementarse una función esPerfecto(numero) que devuelva true si lo es. 
function esPerfecto(numero){
    var suma=0;
    for(let i=1;i<numero;i++){
        if (numero%i==0){
            suma+=i;
        }
        
    }

    if(suma==numero){
        document.write(true)
    }
    else{document.write(false)}
    }
    esPerfecto(6);
    document.write('<br>')
    esPerfecto(7);
        /*
    for (let j=0;j<divisores.length;j++){
        suma+=divisores[j];
        console.log(suma)
        document.write(suma+'\n')
    }
    }
}*/
