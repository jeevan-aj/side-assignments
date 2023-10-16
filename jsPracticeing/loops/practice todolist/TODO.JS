let inputBox = document.getElementById("inputBx");
let mainLlist = document.getElementById("list");
 
let itemName = document.getElementById("item_name");


inputBox.addEventListener('keydown',function(e){
    let itemNameValue = itemName.value;
if(e.key=="Enter"){
    myFunction(this.value);
    addFunction(itemNameValue,this.value);
    itemName.value = "";
    
}
});
const newObject = {};

function addFunction(item,cost){
    Object.assign(newObject,{[item]:cost});
    console.log(cost);
    console.log(newObject);
inputBox.value = "";

}

function myFunction(vale){
let li = document.createElement("ol");
li.innerHTML = `<i>`;
let liText = document.createTextNode(vale);
let msg= "enter value first";
li.appendChild(liText);

if(inputBox.value!=="" && inputBox.value!== undefined &&inputBox.value!=null){
    mainLlist.appendChild(li);
}
else{
    let msg="enter any value first";
   inputBox.style.border="1px solid red";
} 
li.querySelector("i").addEventListener('click',function(e){
    li.remove();
    newObject.remove(itemName.value);
});
}


