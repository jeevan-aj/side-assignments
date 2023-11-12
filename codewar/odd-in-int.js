// function findOdd(A) {
//     A.toString();
//   const b =   A.filter((cur,idx)=> {
//       return A.indexOf(cur) == A.lastIndexOf(cur);
//     })
//     console.log(b) 
//   }

//   findOdd([1,3,3,3])

// function getSum(a,b){
// let sum = 0
//   if(a == b){
//     return a;
//   }

// if(a<b){
//     for(let i = a; i<=b;i++){
//             sum += i;
           
//     }
// }
// else{
//     for(let i =a; i>=b; i--){
//         sum += i;
//     }
// }
// console.log(sum);

   
// }
// getSum(5,-1)

// function positiveSum(arr) {
  
//     const filteredarr = arr.filter((cur)=> cur>0);
//     if(filteredarr==''){
//       return 0;
//     }
//     else{
//         const sum = filteredarr.reduce((acc,cur)=> acc+cur)
//         return sum;
//     }
    
//   }

// console.log(positiveSum([-4]));
function noSpace(x){
  const newString =  x.split(' ').reduce((acc,cur)=> acc+cur);
  return newString;
  }
  noSpace('8 j 8   mBliB8g  imjB8B8  jl  B')