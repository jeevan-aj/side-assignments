function duplicateEncode(word){
   let splited = word.split('')
   let count = 0;
   splited.forEach((cur,idx)=> {
    if(cur.indexOf()==idx){
        count = 1
    }
    else{
        count += count++
    } 
    return count
   })
}

console.log(duplicateEncode('hi'))
