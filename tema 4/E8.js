//Realizar la función esPalindromo(cadena) de manera recursiva. 


function inversion(cadena) {
    var invertida = "";
    for (let i = cadena.length - 1; i >= 0; i--) {
        invertida += cadena.charAt(i);
    }
    return invertida;
}

function esPalindromo(cadena){
    var inversiona=inversion(cadena);
    for(i=0;i<cadena.length;i++){
        if(cadena.charAt(i)==inversiona.charAt(i)){
            return true;
        }else{return false}
    }
}

console.log(esPalindromo("asa"));
