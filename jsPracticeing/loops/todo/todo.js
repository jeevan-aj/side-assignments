let balance = document.getElementById("balance-id");
let income = document.getElementById("income-id");
let expense = document.getElementById("expense_id");
let item = document.getElementById("item-name");
let cost = document.getElementById("item-cost");
let enterButton = document.getElementById("enter_button_id");
let transactionList = document.getElementById("transaction_list_ul");

let totals ;
let incomes;
let expenses;
const localStorageTrans = JSON.parse(localStorage.getItem("transactoin"));
let transaction = localStorage.getItem("transaction") !== null ? localStorageTrans : [];


function transactionDetails(transaction){
    // console.log(transaction);
    let sign = transaction.amount <0? "-":"+";
    const item = document.createElement("li");
    item.innerHTML = `${transaction.discription}
    <span>${sign} ${Math.abs(transaction.amount)}</span>
    <button class="removeBtn"  onclick="removeTransaction(${transaction.id})">x</button>
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
    const amounts =transaction.map((e)=>e.amount);
    const total = amounts.reduce((acc,item)=> (acc += parseFloat(item)),1000);
    balance.innerHTML=`${total}`; 
    const incomeValue= amounts.filter((item)=> item> 0).reduce((acc,item) => (acc += parseFloat(item)),0);
    income.innerHTML=incomeValue;
    const expenseValue = amounts.filter((item)=> item<0).reduce((acc,item) => (acc -=item),0);
    expense.innerHTML = `${expenseValue}`;
    updateLocalStorage(); 
    if(myChart){
        updateChart(total,incomeValue,expenseValue);
    }
    else{
        displayChart(total,incomeValue,expenseValue);
    }
   
}
//function to add value
const localStoragetrans = JSON.parse
function addTransaction(){
    if(item.value == ""||cost.value==""){
        alert("enter values first");
    }
    else{
        curentTransaction = {
            id : Math.floor(Math.random()*100000),
            discription : item.value,
            amount : cost.value
        };
        transaction.push(curentTransaction);
        transactionDetails(curentTransaction);
        amountUpdate();
        item.value="";
        cost.value = "";

    }
}

window.addEventListener('load',function(){
    enterButton.addEventListener('click',function(){
       addTransaction();
    });
    config();
});
function myFunction(){
    let li = document.createElement("li");
    transactionList.appendChild(li);
}

function updateLocalStorage(){
    localStorage.setItem("trans",JSON.stringify(transaction));
}

let myChart;
function displayChart(total,income,expense){
const ctx = document.getElementById('myChart').getContext("2d");
  myChart = new Chart(ctx, {
    type: 'doughnut',
    data: {
      labels: ['total', 'income', 'expense'],
      datasets: [{
        label: '$',
        data: [total,income,expense],
        borderWidth: .1
      }]
    },
  });
}
const updateChart = (total,income,expense)=> {
    myChart.data.datasets[0].data[0] = total;
    myChart.data.datasets[0].data[1] = income;
    myChart.data.datasets[0].data[2] = expense;
    myChart.update();
  };
