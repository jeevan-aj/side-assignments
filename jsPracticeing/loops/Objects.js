let user= {
    name:"jeevan",
    "age is":12,
    isadmin:true,

}
 let age = user["age is"];
 user.names = "hello";
 user.name = "jeevan1";
 user["age is"] = 13;
 let value =user["age is"]

//  console.log(user["age is"]);
// console.log(user);
// console.log(user.name)
// console.log(age);
// delete user.name;
// console.log(user.isadmin);
// console.log(user);
// console.log(user[value]);
// let users = {
//     name:"jeevan",
//     age:10,
// }
// let key = prompt("what is your name ?","name");
// alert(users[key]);


// let keys = prompt("enter ok to know my name","name");
// alert(users.keys);//dot notation cant be used to acces data through variables


//computed properties(representing a property through variable)

// let fruit = prompt("which fruit to by?","apple");
// const fruits = {
//     [fruit]:5,
//     age:12,
// }
// alert(fruits[fruit]);

//shortand properties
// function shorthand(name,value){
//     return {
//        value,
//        realname:name,
//     }
// }
// console.log(shorthand("jeevan","jeevan1"));



