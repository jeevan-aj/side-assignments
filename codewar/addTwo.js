function twoSum(numbers, target) {
    for(let i = 0 ; i<numbers.length;i++){
       let diff = target-numbers[i]
       if(numbers.includes(diff)){
        if(numbers.indexOf(diff)!=i){
            return [numbers.indexOf(diff),i]
        }
       }
    }
}

console.log(twoSum([1,6,3,10],7))


function sum(b){
    try{
        // if(b>1){
        //    console.log(a+b) 
        // }   
        b.toUppercase();
    }
    catch(error){
        console.log("error occured \n",error)
    } 
    console.log("poda ") 
}


sum(2)