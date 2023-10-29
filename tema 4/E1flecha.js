esPerfecto = (num) => {
    var suma=0;
    for (let i=1;i<num;i++){
        if(num%i==0){
            suma+=i;
        }
    }
    if(suma==num){
        document.write(true);
    }
    else{
        document.write(false);
    }
}
esPerfecto(6);