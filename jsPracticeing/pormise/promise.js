// const data = [
//     {file:"first",body:"this is first body"},
//     {file:"second",body:"this is second body"}
// ]
// function show(){
//     setTimeout(()=> {
//         let output = ""
//         data.forEach((cur)=> {
//             output += `<div>${cur.file}: ${cur.body}</div> `
//         })
//        document.body.innerHTML = output;
//     },1000)
// }
// function add(arr){
//     return new Promise((resolve,reject)=> {
//         setTimeout(()=> {
//             data.push(arr)
//             const error = false;
//             if(!error){
//                 resolve();
//             }
//             else{
//                 reject('something went wrong');
//             }
//         },2000)
//     })
   
// }
// add({file:"third",body:"this is third body"});


// let newPromise = new Promise((resolve,reject)=> {
//     setTimeout((x)=> {
//         console.log(2)
//     },2000)
//     resolve();
//     reject();
// })
//     newPromise.then( setTimeout((x)=> {
//         console.log(1)
//     },1000));
  

let myPromise = new Promise(function(myResolve, myReject) {
    setTimeout(()=> {
                console.log(2)
            },2000)
    
      myResolve(); // when successful
      myReject();  // when error
    });
    
    setTimeout(()=> console.log(1),1000);
    myPromise.then(
      function(value) { /* code if successful */ },
      function(error) { /* code if some error */ }
    );

