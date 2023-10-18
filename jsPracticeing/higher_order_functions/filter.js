
//filter

const array = [1,2,3,4,2.3,-2,-2];

const show = (arr) => {
    const filteredArray = arr.filter(num => Number.isInteger(num)&& num>0);
    return filteredArray;
}

let callingFunction =show(array);
console.log(callingFunction);


const array2 = [1,2,-22,2.2,-32];

const showeing = (array) => {
    const value = array.filter((any)=> any>0);
    return value;
};
 
let showe = showeing(array2);
console.log(showe);

const Obj = {
    
}


//filtering prime number
const array4 = [2,3,4,1,7,12,13];


    const isPrime = (element)=> {
        for(let i =2;i<Math.sqrt(element);i++){
            if(element%i==0){
                return false;
            }
            else{
                return true;
            }
        }
    }
    const filterPrime = array4.filter((e)=> isPrime(e));
    console.log(filterPrime);


//filter names starting with a

const namesArray = ["jeevan","ajeevan","arun","arjun","jadu"];

const firstelement  = (e) => {
    if(e[0]==="a"){
        return true;
    }
    else{
        return false;
    }
}
let filter = namesArray.filter((e)=> firstelement(e));
console.log(filter);
    

