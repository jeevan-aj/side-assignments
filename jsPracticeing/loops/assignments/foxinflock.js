// function foxinflock(array){
//     const isEven = array.slice(0,3).filter(cur=>cur%2==0);
//     let odds=  isEven.length>=2?array.find(odd):array.find(even);

//     function even(num){
//         return num%2==0;
//     }
//     function odd(num){
//         return num%2!=0;
//     }
//     return odds;
// }
// console.log(foxinflock([1,5,5,6]));

//split and add 

function solution(str){
 (str.length%2!=0)? str=str+"_":str;
 const splited =  str.match(/.{1,2}/g);
 
 
 console.log(splited); 
}
solution("abcde");


function solution(str){
  if(str==""){
    return [];
  }
  (str.length%2!=0)? str = str+"_":str;
   let pairedStr = str.match(/.{1,2}/g);
   return pairedStr;
}
console.log(solution(""));

function test (str){
  return (str+"_").match(/.{2}/g)||[]
}
console.log(test("helle"))


