const myArray = [1,2,3,4,2];
let biggest = 0;
const biggestElement = (array) => {
    array.forEach((e)=> {
        if(e>biggest){
            biggest = e;
        }
    });
}
biggestElement(myArray);
console.log(biggest);