
var romanToInt = function(s) {
    let i;
    let len = s.length;
    let dict = {
    "I": 1,
    "V": 5,
    "X": 10,
    "L": 50,
    "C": 100,
    "D": 500,
    "M": 1000,
    "d": 111,
    }
    let total = 0

    for(i=0;i<len;i++){
        let cur = dict[s[i]]
        if(cur<dict[s[i+1]]){
            total -= cur  
        }
        else{
            total += cur
        }
    }
    return total
}
console.log(romanToInt("V"))