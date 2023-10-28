// function display(sum){
//     console.log(sum);
// }
// function add(ar1,ar2,callback){
//     let sum = ar1+ar2;
//     callback(sum);
// }

// add(1,3,display) //when passing function as argument dont use parrantesis


//remove neg useing callback
const arr  = [1,2,3,-2,-2];
function display (res){
    console.log(res);
}
function remove(arr,callback){
    let newarr = [];
    newarr =arr.filter((cur)=> {
        return cur>0
    })
    callback(newarr);
}
remove(arr,display);