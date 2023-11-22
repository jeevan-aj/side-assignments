function removeExclamationMarks(s) {
    return s.split('').filter((cur)=> cur != '!').join('')
  }
  console.log(removeExclamationMarks('hello!'))