const credits = ((num)=> {
    let credits = num;
    console.log(   `initial credits is ${credits}`)
    return ()=> {
        if(credits>1){
          credits -=1;
          console.log(`you have ${credits} credits remainging`)
        }
        else{
            console.log(`not enough credits available`);
        }
    }
})(4);//immeadiatly invokeing main function and the return function is now in credits
credits();//so calling credits is now actualy claling return function 
credits();
//can do this another way

// let play = credits;
// play();
// play();

//or

const creditss = ((num)=> {
    let creditss = num;
    console.log(   `initial credits is ${creditss}`)
    return ()=> {
        if(creditss>1){
          creditss -=1;
          console.log(`you have ${creditss} credits remainging`)
        }
        else{
            console.log(`not enough credits available`);
        }
    }
})(3);
creditss();
creditss();
creditss();







