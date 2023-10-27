
const birthdayWhish = setTimeout(timeOut,5000);

function timeOut(){
    console.log("happy birthday")//happybirthday is printed after 5 second
}


// const birthdayWhish2 = setInterval(newFun,3000);//this will print 1++ with a gap of 3 seconds
// let count = 0;
// function newFun(){
//     console.log(count+=1);
// }


const timer = setTimeout(whish,1000);
clearTimeout(timer)//this cancels the action that is to be taken by setTimeout
function whish(){
    console.log("if clearTimeout work u wont see me in console");
}


