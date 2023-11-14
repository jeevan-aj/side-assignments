function DNAtoRNA(dna) {
    
    if(dna.length==4){
     return dna.replace(/.$/,"U")
    }
     else{
      return dna= dna+"U"
     }
   }
   console.log(DNAtoRNA("gca"))