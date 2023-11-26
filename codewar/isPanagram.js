function isPangram(string){
    let regx = /[a-z]/gi
    let s = string.split(',').join('')
    console.log(s)
    let flag = 0
   return s.match(regx)
    
}
console.log(isPangram('ab'))