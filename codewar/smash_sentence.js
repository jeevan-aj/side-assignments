function smash (words) {
    let arr 
     arr = words.map((cur)=> {
        if(words.indexOf(cur)== (words.length-1)){
            return cur
        }
        else{
            return cur+' '
        }
    })
    return arr.join('').trim('')

 };

 console.log(smash(['heel','fds','fsfds','fsd']))