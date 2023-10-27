const check = (e)=> {
    let convertedString = e.toString();
    console.log(convertedString);
    let splited = convertedString.split("");
   
   let sum =  splited.map((cur,index)=> Math.pow(cur,3)).reduce((acc,cur)=> acc+cur);
    if(e==sum){
        console.log("amstrong");
    }
    else{
        console.log("not");
    }
    
}
check(151);