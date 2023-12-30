function DNAStrand(dna){
    let newArray = []
    dna.split("").map((cur,idx)=> {
      if(cur=="A"){
        newArray[idx]="T"
      }
      else if(cur=="T")
        {
        newArray[idx]="A"
      }
       else if(cur=="C")
        {
        newArray[idx]="G"
      }
       else if(cur=="G")
        {
        newArray[idx]="C"
      }
      
    })
    return newArray.join('')
  }