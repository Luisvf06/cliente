function elMenor(...param){
    var primero=param[0];
    var minimo=0;
    for(let i=0;i<param.length;i++){
    minimo=Math.min(primero,...param);
    }
    document.write(minimo);
}

function colocaEnMEdio(arr1,arr2){
    var lonarr1=arr1.length;
    arr1.splice(lonarr1/2,0,arr2)
    document.write(arr1)
}
colocaEnMEdio([1,2,3,6,7,8],[4,5]);

function uneArrays(...n){
    var fusion=[];
    for(let i=0;i<n.length;i++){
        fusion=fusion.concat(n[i]);
    }document.write(fusion);
}
uneArrays([12,3,43],[4,2,2,1])

function sumaArgPares(...arg){
    var suma=0;
    for(let i=0;i<arg.length;i++){
        if (arg[i]%2==0){
            suma+=arg[i];
        }
    }document.write('ejercicio suma ',suma)
}sumaArgPares(2,3,4,5,6,7,8)