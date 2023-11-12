//useing filter to find odd numbers
const array = [1,2,3,323,33,4,1,6];
const newArray = array.filter(function(numbers){
    return numbers%2 !=0;
});
console.log("odd array : "+newArray);

//useing filter to find even numbers useing arrow function
const array2 = [1,2,3,4,5,52,3];
const evenArray = array2.filter((elements)=> elements%2==0);
console.log("even array : "+evenArray);

//useing filter in object

const myObj1 = [
    {"name":"jeevan", "age":20},
    {"name":"dudu", "age":2},
    {"name":"pum", "age":20}
]

const newObj = myObj1.filter((e)=> e.age<10);


//filter prime numbers
const allArray = [1,2,-1,10,12,13,4,7,17];
const isPrime = (Number)=> {
    if(Number==2)return true;
    if(Number<1)return false;
    for(let i =2;i<Math.sqrt(Number);i++){
        if(Number%i==0){
            return false
        }
        return true;
    }
}
const primeArray = allArray.filter(isPrime);
console.log(primeArray);
