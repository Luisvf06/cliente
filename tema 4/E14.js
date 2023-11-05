//Realizar un programa que permita introducir 2 matrices (hasta tamaño 3x3), y nos de la opción de sumarlas o multiplicarlas. El programa imprimirá las dos matrices y la matrizresultante (si la hubiera).

function matriz1(n,m){
    if(n<=3 & m<=3){
    var lista=[]
    for(let i=0;i<n;i++){
        var sublista=[]
        for(let j=0;j<m;j++){
            sublista.push(Math.round(Math.random()))
        }lista.push(sublista)
    }
}return lista
}

function matriz2(n,m){
    if(n<=3 & m<=3){
    var lista=[]
    for(let i=0;i<n;i++){
        var sublista=[]
        for(let j=0;j<m;j++){
            sublista.push(Math.round(Math.random()))
        }lista.push(sublista)
    }
}return lista
}

function suma(m1,m2){
    var msuma=[]

    if (m1.length===m2.length & m1[0].length===m2[0].length){
        for(let i=0;i<m1.length;i++){
            var sublista=[]
            for(let j=0;j<mi[0].length;j++){
                sublista.push(m1[i][j]+m2[i][j])
            }msuma.push(sublista)
        }
    }else{document.write('las matrices no se pueden sumar')}
}

function multiplicacion(m1, m2) {
    if (m1[0].length !== m2.length) {
        console.error('El número de columnas de m1 debe ser igual al número de filas de m2');
        return null;
    }
    var m3 = [];
    for (let i = 0; i < m1.length; i++) {
        m3[i] = [];
        for (let j = 0; j < m2[0].length; j++) {
        var sum = 0;
        for (let k = 0; k < m1[0].length; k++) {
            sum += m1[i][k] * m2[k][j];
        }
        m3[i][j] = sum;
        }
    }

    document.write(m1,m2,m3)
    }
