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
