let buget=document.getElementById("set_budgetinput_id");
let expense=document.getElementById("expense_cost");

let budgetListElement=document.getElementById("Budget-list");
let expenseListElement=document.getElementById("Expense-list");
let balanceList=document.getElementById("Balance-list");

let expenseItem=document.getElementById("expense-name");
let tmpExpense=document.getElementById("curent-expense");
let expense_cost=document.getElementById("expense_product_title");
let budgetInput=document.getElementById("set_budgetinput_id");
let expenseInput=document.getElementById("check_amount");


let mainList = document.getElementById("expense-ol-id");



const setBudgetButton=document.getElementById("setbudget_id");
const checkAmountButton=document.getElementById("checkamount_a");


// function to set budget accordingly
const SETBUGET = () => {
    let budgetValue=buget.value;
    let msg="enter value first";    
    if(budgetValue == ""|| budgetValue === undefined){
      budgetListElement.innerText=msg;
      budgetInput.style.border="1px solid red";
    }
    else{
        budgetListElement.innerHTML=budgetValue; 
        budgetInput.style.border="1px solid grey";
    }
};

// functoin to show curent expense

const EXPENSE = ()=>{
   let curentExpense = tmpExpense.value;
 
   let msg="enter cost first you dum fuck shit"
   let balance=(budgetListElement.innerHTML)-(expenseListElement.innerHTML);

   if(curentExpense==""||curentExpense==null||curentExpense==undefined){
       expenseListElement.innerHTML="0";
       budgetListElement.innerText="0";
       alert("first enter your expense you dum fuck shit");
       balanceList.innerHTML="0";
   }
   else{
   
    expenseListElement.innerHTML=curentExpense;
    balanceList.innerHTML=balance;
   } 
};


// show curent budjet
setBudgetButton.addEventListener("click",function(e){
    e.preventDefault();
    SETBUGET();
});

// show curent expenses
expenseInput.addEventListener("click",function(e1){
    e1.preventDefault();
    EXPENSE();
    
});


tmpExpense.addEventListener("keydown", function(e){
  if(e.key == "Enter" && this.value !==""){
    EXPENSE();
    show_list(this.value,expenseItem.value);
    expenseItem.value="";
    this.value = "";
  }
  
});


function show_list(value,e){
  let li = document.createElement("li");
  let liText = document.createTextNode(value);
  let expenseName = document.createElement("p");
  let expenseValue = document.createTextNode(e);
  

  expenseName.appendChild(expenseValue);
  li.appendChild(expenseName);
  
  li.appendChild(liText);
  mainList.appendChild(li);
  
}














const ctx = document.getElementById('myChart');
    
new Chart(ctx, {
  type: 'doughnut',
  data: {
    labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [{
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      borderWidth: 1
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true
      }
    }
  }
});