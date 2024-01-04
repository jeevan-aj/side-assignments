function consicutiveFibonaci(prod){
    
    let a = 0 
    let b = 1

    while(a*b<prod){
        const temp = a
        a = b
        b = temp + a
        
    }
    return console.log(a,b,a*b==prod) 

}
console.log(consicutiveFibonaci(84049690))