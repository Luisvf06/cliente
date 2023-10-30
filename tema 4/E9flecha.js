elMenor=(...param)=>{
    var primero=param[0];
    var minimo=0;
    for(let i=0;i<param.length;i++){
    minimo=Math.min(primero,...param);
    }
    document.write(minimo);
}
elMenor(5,4);