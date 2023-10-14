
//filter

const array = [1,2,3,4,2.3,-2,-2];

const show = (arr) => {
    const filteredArray = arr.filter(num => Number.isInteger(num)&& num>0);
    return filteredArray;
}

let callingFunction =show(array);
console.log(callingFunction);