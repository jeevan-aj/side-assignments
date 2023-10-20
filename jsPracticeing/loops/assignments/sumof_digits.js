const sum =(num)=> {
   let str = num.toString().split("");
   let r = str.map((cur)=> parseInt(cur))
  return r.reduce((acc,cur)=>acc+cur);
}

console.log(sum(22));