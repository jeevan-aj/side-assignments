function squareDigits(num){
    let sum =  num.toString().split('').map((cur)=> (cur*cur)).join('')
    return parseInt(sum)
  }

console.log(typeof squareDigits(3212))