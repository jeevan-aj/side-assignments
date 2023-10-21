//accessing values of an object useing forin loop
const newObject = {"me":0,"you":1,"you1":2};
let text = "";

for(i in newObject){
    text += newObject[i]+ " ";
}
console.log(text);



//accessing element of an array useing forin loop
const newArray = [1,2,3,4,5];
let newtext = "";

for(i in newArray){
    newtext += i+ " ";
}
console.log(newtext);



//accessing element of an object useing key
const keyObject = {jeevan: 1,pum:2,ammini:3,ambu:4};
let newKeyText = "";
console.log(Object.values(keyObject));//to acces values of a object
console.log(Object.keys(keyObject));//to access keys of a object
console.log(Object.entries(keyObject));//returns an array of objects




let str = "hello";
let arr = ["2","2"]
for(i in str){
    console.log(i);//prints 0 to 4
}
for(i in arr){
    console.log(i);//prints h,e,l,l,0
}

let arrr = [2,3,3,4];
let a = arrr.forEach((e)=> {
   console.log(e)
})


let array = [1,2,3,4]
let sum = array.reduce((acc,cur)=> acc+cur,0)
console.log(sum);

let array44 = [1,2,3,4,5]
let newArray1 = array44.map((cur)=> 
{
    return  cur*10
},30);
console.log(newArray1)

function solution(number){
    return Array.from({length:number},(cur,index)=>index+1,0).filter((cur)=> cur%3==0||cur%5==0).reduce((acc,cur)=> cur+acc);
  }
  console.log(solution(10));



  function isIsogram(str){
    let flag = true;
    let splited =  str.split("")
    let filtered = splited.filter((cur,idx)=> {
      if(splited.indexOf(cur)==idx){
       return  true;
      }
      else{
        return false;
      }
    });
    console.log(filtered);
   if(filtered==""||flag){
    return true;
   }
   else{
    return false;
   }
  }
  console.log(isIsogram("hello"));
 