var romanToInt = function(s) {
    let result = 0;

    for (let i = 0; i < s.length; i++) {
        let curValue = getValue(s[i]);
        let nextValue = getValue(s[i + 1]);

        if (nextValue && curValue < nextValue) {
            result -= curValue;
        } else {
            result += curValue;
        }
    }

    return result;
};

function getValue(char) {
    switch (char) {
        case 'I': return 1;
        case 'V': return 5;
        case 'X': return 10;
        case 'L': return 50;
        case 'C': return 100;
        case 'D': return 500;
        case 'M': return 1000;
        default: return 0; // Handles unexpected characters
    }
}


console.log(romanToInt("IV"))