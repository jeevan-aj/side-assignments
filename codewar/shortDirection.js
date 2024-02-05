function dirReduc(arr){
    let direction = {
          'NORTH':'SOUTH',
          'SOUTH':'NORTH',
          'EAST':'WEST',
          'WEST':'EAST'
    }
    let stack = []
    
    for(let i of arr){
      if(stack[stack.length-1]===direction[i]){
        stack.pop()
      }
      else{
        stack.push(i)
      }
      console.log(i)
      console.log(stack)
    }
    return stack
}

console.log(dirReduc(["NORTH", "SOUTH", "SOUTH", "EAST", "WEST", "NORTH", "WEST"]))