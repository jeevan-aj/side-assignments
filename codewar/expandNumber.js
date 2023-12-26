function expandedForm(num) {
    let firstArray = num.toString().split('')
    let result = []
    for(let i = 0;i<firstArray.length;i++){
        if(firstArray[i]!=='0'){
            result.push(firstArray[i]+'0'.repeat(firstArray.length-i-1))
        }
    }
    console.log(expandedForm)
    
    return result.join('+')
  }

  console.log(expandedForm(12))

  let fsdfds = "strereR"
 console.log(fsdfds.replace(/[re]/g,""))
