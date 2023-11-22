function arrayDiff(a, b) {
   return a.filter((cur)=> !b.includes(cur))
  }
console.log(arrayDiff([1,2,2],[2,1]))