let array = [1,2,3,4,4,5,6];
let sums = 0;
array.reduce((acc,cur)=> {
    if((cur%2)==0){
       sums +=cur;
    }

});
console.log(sums);


// let value = "+10";
// let test1 = value;
// console.log(typeof test1);


