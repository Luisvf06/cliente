const esPrimo=(a)=>{
    for(let i=2;i<a;i++){
        if(a%i===0){
            
            return false
        }
        
    }return true
}

const siguientePrimo=(a)=>{
    let primo=a+1
    while(true){
        if(esPrimo(primo)){
            return primo;
        }else{primo+=1}
    }
}
console.log(siguientePrimo(45));