function highAndLow(numbers){
    let newArray = numbers.split(' ').sort((a,b)=> a-b)
      return [newArray[newArray.length-1],newArray[0]].toString().replace(',',' ')
  }

  console.log(highAndLow('4 5 29 54 4 0 -214 542 -64 1 -3 6 -6'))