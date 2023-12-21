function betterThanAverage(classPoints, yourPoints) {
    let sum = classPoints.reduce((acc,cur)=> acc+= cur)
    let average = sum/classPoints.length
    if(average<yourPoints){
        return true
    }
    else{
        return false
    }
    
  }
console.log(betterThanAverage([1,2],2));