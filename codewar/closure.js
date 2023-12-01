function parent(){
    let outerVar = 10;
    console.log(outerVar)
    function child(){
        console.log(outerVar)//accessing outerfunction variable
    }

    return child

}

// console.log(parent())

let newVar = parent()//assigning the return value of outer to newVar 

newVar()





// function parent(){
//     let a = 10;
//     console.log(a)
//     function kung(){
//         console.log(a)
//     }
//     return kung
// }
// let newValue = parent()
// newValue()


// something()
// function something(){
//     let a = 10;
//     return console.log(a);
    
// }



