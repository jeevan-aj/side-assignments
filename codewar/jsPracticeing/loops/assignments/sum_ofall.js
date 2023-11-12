let arra = [1,2,3,4,5];
function sum(a){
    let sums;
    a.reduce((acc,cur)=> {
        return sums = acc+cur;
    })
    console.log(sums);
   

}
sum(arra);