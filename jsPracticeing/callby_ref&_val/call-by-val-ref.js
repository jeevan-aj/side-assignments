
//calll by value
let a = 4;
let b = a;

console.log(a,b);

a =2;
console.log(a,b);

//call by reference
let aaray = [2,3,4,5]
let newarray = aaray ;
aaray.forEach((e)=> console.log(e));

newarray[1] = 0;
aaray.forEach((e)=> console.log(e));






