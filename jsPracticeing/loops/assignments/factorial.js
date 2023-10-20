let sum=1;
let fact = (e)=> {    
    for(i=e;i>1;i--){
        sum *= i;
    }
    return sum;

}
console.log(fact(5));


//useing recursion
let snm;
let factorial= (e)=> {
    if(e==0){
        return 1;
    }
    else{
        return e* factorial(e-1);
    }
   
}
console.log(factorial(5));

