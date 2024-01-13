function validCheck(s){
    const mappings = {
        ')': '(',
        '}': '{',
        ']': '['
    };

    const stack  = []

    for(let i of s){
        if(mappings[i]){
            let currentValue = stack.length===0?'#':stack.pop;
            if(currentValue != mappings[i]){
                return false;
            }
        }
        else{
            stack.push(i)
        }
    }

}

console.log(validCheck("(){}[]"))