let sumPrime = (e)=> {
    let sum = 0;
    for(i=2;i<e;i++){
        flag = true;
        for(j=2;j<=Math.sqrt(i);j++){
            if(i%j==0){
                flag = false;
            }
        }
        if(flag){
          sum  += i; 
        }
    }
    console.log(sum);
}

sumPrime(10);