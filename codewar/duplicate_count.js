function duplicateCount(input) {
    const charMap = {};
    let count = 0;
  
    const lowerInput = input.toLowerCase();
  
    for (let i = 0; i < lowerInput.length; i++) {
      const char = lowerInput[i];
  
      if (/^[a-z0-9]$/i.test(char)) {
        if (charMap[char]) {
          if (charMap[char] === 1) {
            count++;
          }
          charMap[char]++;
        } else {
          charMap[char] = 1;
        }
      }
    }
    console.log("hello")
  
    return count;
  }
