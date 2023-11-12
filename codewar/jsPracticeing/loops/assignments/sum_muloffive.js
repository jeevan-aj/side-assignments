const sumOfMultiples = (num)=> {
    return Array.from({length:num},(_,index)=> index+1)
    .filter((cur)=> cur%3==0||cur%5==0).reduce((acc,cur)=> acc+cur);
}
console.log(sumOfMultiples(10));
