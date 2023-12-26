var isSquare = function(n){
    if(n<0){
      return false
    }
    else{
      let square = Math.sqrt(n)
      return square === Math.floor(square)
    }
    
  }