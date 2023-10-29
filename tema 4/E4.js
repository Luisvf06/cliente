//Realizar una función que pase una cantidad de Mbyte, Kbytes y bytes a bytes. Probadla en una página.
function conversionBytes(Mbyte,Kbyte,bytes){
    var totalBytes=Mbyte*1000000+Kbyte*1000+bytes;
    console.log(totalBytes)
}
conversionBytes(2,3,12)