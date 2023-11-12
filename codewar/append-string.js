function incrementString (string) {
    let lastnumbers = string.match(/\d+$/);
    let lastnumber;
    if(lastnumbers){
        lastnumber = lastnumbers[0]
    }
   
   

  
   if(isNaN(lastnumber)){
    string = string+"1";
    return string
   }
   else{
    if(lastnumber.charAt(lastnumber.length -1) >0 && lastnumber.charAt(lastnumber.length -1) <10 ){
        const converted = parseFloat(lastnumber)
    const add = converted+1;
    const newstring = string.replace(lastnumber,add)
    return newstring
    }
    else{
        let last = lastnumber.charAt(lastnumber.length -1)
        const converted = parseFloat(last)
        const add = converted+1;
        const newstring = string.replace(/.$/,add)
        return newstring
    }
    
   }

   

   
  }

 console.log(incrementString("foobar1")) 