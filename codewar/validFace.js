function countSmileys(arr) {
    let sum = 0
   arr.map((cur,idx)=> {
    if(cur.match(/^[:;][-~]?[)D]$/)){
       sum++
       }
  })
    return sum
  }
  console.log("hello")