function validatePIN(pin) {
    if(typeof pin == 'Number'){
        let newString = pin.toString().split('')
        console.log(newString.length)
        if (newString.length === 4 || newString.length === 6) {
          return every(char => !isNaN(char));
        }
    }
    console.log("hello worldd")
   
    return false;

  }
  console.log(validatePIN(1234))