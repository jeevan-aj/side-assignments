// let user= {
//     name:"jeevan",
//     "age is":12,
//     isadmin:true,

// }
//  let age = user["age is"];
//  user.names = "hello";
//  user.name = "jeevan1";
//  user["age is"] = 13;
//  let value =user["age is"]

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

// let objects= {
//     namek:"jeevan",
//     12:21,
//     isAdmin:true,
// }

// console.log(objects);
// console.log(objects.namek);
// console.log(objects["namek"]);
// console.log("namek" in objects);



// for(i in objects){
//    console.log(i);
//    console.log(objects[i])
// }
// console.log(typeof(12));



//summeing values 
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130,
//   }
  

// function isEmpty(a){
//     let sum = 0;
// for(let i in a){
// sum += a[i]; 
// }
// return sum;
// }
// console.log(isEmpty(salaries));



//multiply values of object by 2 if they are number and in else case do nothiing 
// let menu = {
//     width: 200,
//     height: 300,
//     title: "My menu"
//   };

// const multiplyNumeric= (e)=>{
//     for(i in e){
//      if(typeof e[i]=='number'){
//         e[i] *= 2;
//      }
//      console.log(typeof(e[i]));
//     } 
// }

// multiplyNumeric(menu);
// console.log(menu);


