let array = [1,2,3,4,3,3];

const sorted = array.sort((a,b)=> a-b).filter((el,index)=> array.indexOf(el)==index);
console.log(sorted[0],sorted[sorted.length-1]);



//another easy way 

let min = Math.min(...array);
let max= Math.max(...array);
console.log(min,max);



