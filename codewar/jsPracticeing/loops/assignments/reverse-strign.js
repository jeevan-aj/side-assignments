let string = "hello";

const reversedString = string.split('').reduce((acc,cur)=> cur+acc);
console.log(reversedString);





//another method useing reverse(split a word reverse it join it)

let string1 = "hello";
let reversedString1 = string1.split("").reverse().join("");
console.log(reversedString1);



// const myarray = [1,2,3,4,5];

// let cur = 5;
// let inx = 4;

// let n = myarray.reduce((acc,cur,idx,src) => cur+acc);
// console.log(n);
