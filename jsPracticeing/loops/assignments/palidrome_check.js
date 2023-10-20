let strig = "rrw";

// let reversed =strig.split("").reverse().join("");
// if(reversed ===strig){
//     console.log( "palindrome")
// }
// else{
//     console.log("not palindrome");
// }


let checkPalindrome = (e)=> {
    let reversed = strig.split("").reduce((acc,cur)=> cur+acc);
    if(e===reversed){
        console.log("palindrome");
    }
    else{
        console.log("not palindrome");
    }
}

checkPalindrome(strig);