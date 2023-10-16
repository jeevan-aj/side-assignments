let balance = document.getElementById("balance");
let income = document.getElementById("incomediv_p");
let item = document.getElementById("item-name");
let cost = document.getElementById("item-cost");
let enterButton = document.getElementById("enter_button_id");
let transactionList = document.getElementById("transaction_list_ul");

const dummyData = [
    {id:1,discription:"jeevan", amount:-20},
    {id:2,discription:"pum", amount:200},
    {id:3,discription:"ambu", amount:300},
    {id:4,discription:"kuttu", amount:120},
]

let transaction = dummyData;

function transactionDetails(transaction){
    // console.log(transaction);
    let sign = transaction.amount <0? "-":"+";
    const item = document.createElement("li");
    item.innerHTML = `${transaction.discription};
    <span>${sign} ${Math.abs(transaction.amount)}</span>
    <button class="remove-btn" onclick="removeTransaction(${transaction.id})">x</button>
    `
    transactionList.appendChild(item);  
}

//removeing item from list
function removeTransaction(id){
    transaction = transaction.filter((e)=> e.id !=id);
    config();
    console.log(transaction);
}

//reload transactoinlist
function config(){
    transactionList.innerHTML="";
    transaction.forEach(transactionDetails);
    amountUpdate(); 
}
function amountUpdate(){
    const amounts =transaction.map((e)=>{
        return e.amount;
        
    }  
    );
    console.log(amounts);
   
}

window.addEventListener('load',function(){
    enterButton.addEventListener('click',function(){
        myFunction();
    });
    config();
});
function myFunction(){
    let li = document.createElement("li");
    transactionList.appendChild(li);
}
