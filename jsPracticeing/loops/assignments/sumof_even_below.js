const sumofEven = (num)=> {
    return Array.from({length:num},(_,index)=> index+1)
    .filter((cur)=> cur%2==0).reduce((acc,cur)=> acc+cur)
}
console.log(sumofEven(5));
