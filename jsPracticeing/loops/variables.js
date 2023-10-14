//here value of global i dont change when new let created;
let i =6 ;
for(let i = 0; i<2 ;i++){
    console.log(i);// 2
}
console.log(i);//6


//here value of k becomes value of k in loop
var k =15;
for(var k =0;k<4;k++){
    console.log(k);//3
}
console.log(k);//4
