var number=function(array){
  return array.map((cur,idx)=> `${idx+1}:${cur}`)
}
console.log(number(["jeevan","pum"]))
console.log(number)