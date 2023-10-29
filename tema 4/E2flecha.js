//Diseñar un programa que compruebe si un texto contiene sólo caracteres de nuestro alfabeto. Deberá implementarse una función esAlfabetoEspaniol(texto) que devuelva true si lo es.
//[abcdefghijklmnñopqrstuvwxyz\s]
const esAlfabetoEspaniol= (texto)=> {
    var cadena=/[a-záéíóúüñ ]/gmi;
    var regu= /^[a-záéíóúüñ ]+$/igm;
    console.log(regu.test(texto))
}
esAlfabetoEspaniol('üÚ   ß')