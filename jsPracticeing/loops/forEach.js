//accesing array elements useing forEach loop
const array = [10,20,3,4,5];

let txt = "";
array.forEach(Myfunction);
console.log(txt);

function Myfunction(par){
    txt += par+ " ";
}

 
//accessing elements of an array useing forEach() and arrow function
const arrayNew = [1,2,3,22,33];
let text =  "";
arrayNew.forEach((parameter)=> {
    txt += parameter;
});
console.log(txt);



//we canot iterate an object useing forEach loop 
//if we convert an object to an arraylist we can iterate it