//is number prime?
const isPrimt = (e)=> {
    for(i=2;i<Math.sqrt(e);i++){
        if(e%i==0){
            return "not Prime";
        }
    }
    return "prime";
}
console.log(isPrimt(7));
