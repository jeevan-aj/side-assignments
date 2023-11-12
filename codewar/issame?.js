function solution(str, ending){
    let length = ending.length
    let match = str.slice(-length);
    if(match === ending){
        return true
    }
    return false
}
console.log(solution('abh','bh'));