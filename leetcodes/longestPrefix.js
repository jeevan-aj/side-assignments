const longestPrefix = (str)=> {
    let sortedStr = str.sort()
    console.log(sortedStr)
    let first = sortedStr[0]
    let last = sortedStr[sortedStr.length-1]
    let i = 0
    let length = first.length

    while(i<length && first[i]===last[i]) i++;

    return first.slice(0,i)

}

console.log(longestPrefix(["flow","flo","flower"]))