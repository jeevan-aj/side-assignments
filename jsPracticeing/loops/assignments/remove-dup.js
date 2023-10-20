//removeing duplicate useing reduce
let array = [1,2,3,4,3,4,2,1];
//consies way
let removeDup = (a)=> {
   return  array.reduce((acc,cur)=> acc.includes(cur)?acc:[...acc,cur],[]);
}
console.log(removeDup(array));





//same code without ternary operator
let removeDupNoTernary  = array.reduce((acc,cur)=> {
    if(acc.includes(cur)){
        return acc;
    }
    else{
        return [...acc,cur]
    }
},[]);
console.log(removeDupNoTernary)


//removeing duplicate from an array useing filter

let unFilteredArray = [1,2,3,4,4,4,53,3];

const filteredArray = unFilteredArray.filter((curEl,idx)=>unFilteredArray.indexOf(curEl)==idx);
console.log(filteredArray);
