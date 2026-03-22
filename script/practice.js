// badget tracker challenge phase 1

// console.log("Aminul islam");
// console.log(35000);  // my income
// console.log(15000); // my expenses


// badget tracker phase 2-3 (string concat)

//  userName = 'Aminul islam';
// const income = 35000;
// const expense = 15000;

// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Income: $"+income);  // my income
// console.log("expense: $"+expense); // my expenses


// badget tracker phase 4 (arithmatice operatior)

// const userName = 'Aminul islam';
// const income = 25000;

// // multiple expenses

// let rent = 7000;
// let grocerice = 1000;
// let transport = 2000;
// let entertainment = 600;

// // calculate expenses 
// let totalExpenses = rent + grocerice + transport + entertainment;


// // tax deduction (10% of income)

// let tax = income * 0.10;

// // Net income after the tax

// let netIncome = income - tax;

// // calculate remaining balance 

// let balance = netIncome - totalExpenses;

// // saving 20% of remainging balance 

// let savings = balance * 0.20;



// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Total income: $"+income);  
// console.log("Total expense: $"+totalExpenses); 
// console.log("Tax deduction: $"+tax);  
// console.log("Net icome after tex: $"+netIncome); 
// console.log("Remaining balance: $"+balance); 
// console.log("Saving 10% of balance: $"+savings); 



//  badget tracker phase 4 (if/else)



// const userName = 'Aminul islam';
// const income = 25000;

// // multiple expenses

// let rent = 7000;
// let grocerice = 7000;
// let transport = 7000;
// let entertainment = 7000;

// // calculate expenses 
// let totalExpenses = rent + grocerice + transport + entertainment;


// // tax deduction (10% of income)

// let tax = income * 0.10;

// // Net income after the tax

// let netIncome = income - tax;

// // calculate remaining balance 

// let balance = netIncome - totalExpenses;

// // saving 20% of remainging balance 

// let savings = balance * 0.20;


// // Determining finalcial health status

// let finalStatus = "";

// if (savings >= 1000){
//     finalStatus  = "Excellent! ";
// }else if(savings >= 500){
//    finalStatus = "Good.";
// }else if(savings >= 100){
//      finalStatus = "Need to improvment.";
// }else{
//     finalStatus = "Critical.";
// }


// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Total income: $"+income);  
// console.log("Total expense: $"+totalExpenses); 
// console.log("Tax deduction: $"+tax);  
// console.log("Net icome after tex: $"+netIncome); 
// console.log("Remaining balance: $"+balance); 
// console.log("Saving 10% of balance: $"+savings);
// console.log("Final status : $"+finalStatus);


// let ovarSpendingMessage = "";
// if(totalExpenses > income){
//     ovarSpendingMessage = "Warning: your expenses over the income.";
// }
// if (ovarSpendingMessage){
//     console.log(ovarSpendingMessage);
// }




// badget tracker phase 4 (for loop)



// let userName = prompt("Enter your name : ");
// let income =  parseFloat(prompt("Enter your total income : "));
// let ExpensesNumber = parseFloat(prompt("How many expenses do you have : "));

//      let totalExpenses= 0;
//      let Expenses= 0;
// for (let x=1; x <= ExpensesNumber; x++){
//       Expenses = parseFloat(prompt(`Enter your ${x} no expense : `));
//      totalExpenses += Expenses;
// }


// let savings = balance * 0.20;


// // Determining finalcial health status

// let finalStatus = "";

// if (savings >= 1000){
//     finalStatus  = "Excellent! ";
// }else if(savings >= 500){
//    finalStatus = "Good.";
// }else if(savings >= 100){
//      finalStatus = "Need to improvment.";
// }else{
//     finalStatus = "Critical.";
// }


// console.log("Parsonal badget tracker app.")
// console.log("User: "+userName.toLocaleUpperCase());
// console.log("Total income: $"+income);  
// console.log("Total expense: $"+totalExpenses); 
// console.log("Tax deduction: $"+tax);  
// console.log("Net icome after tex: $"+netIncome); 
// console.log("Remaining balance: $"+balance); 
// console.log("Saving 20% of balance: $"+savings);
// console.log("Final status : $"+finalStatus);


// let ovarSpendingMessage = "";
// if(totalExpenses > netIncome){
//     ovarSpendingMessage = "Warning: your expenses over the income.";
// }
// if (ovarSpendingMessage){
//     console.log(ovarSpendingMessage);
// }



// practie to function

// function calc(a,b){

//     let add = a + b;
//     let sub = a - b;
//     let mul = a * b ;
//     let div = a / b;
//     let rem = a % b;

//     console.log('addition: '+add);
//     console.log('addition: '+sub);
//     console.log('addition: '+mul);
//     console.log('addition: '+div);
//     console.log('addition: '+rem);

// }
// calc(10, 5);
// calc(20, 5);


// Budget Tracker App – Phase 6

// let userName = prompt("Enter your name:");
// let numberOfExpenses = Number(prompt("How many expenses do you have?"));
// let income = Number(prompt("Enter your total income:"));

// if(isNaN(numberOfExpenses) || numberOfExpenses <= 0){
//      console.log("Please enter a valid number of expenses.");
// }else {

// let expenses = [];

// for (let e = 1; e <= numberOfExpenses; e++) {
//     let expense = Number(prompt(`Enter your ${e} no expense:`));
    
// if(isNaN(expense) || expense <= 0){
//      console.log("Please enter a valid number of expense.");
// }else {
//     expenses.push(expense);
// }
// }

// // Calculate total expenses
// let totalExpenses = 0;
// for (let i = 0; i < expenses.length; i++) {
//     totalExpenses += expenses[i];
// }

// // Calculations
// let tax = income * 0.10;
// let netIncome = income - tax;
// let balance = netIncome - totalExpenses;
// let savings = balance > 0 ? balance * 0.20 : 0;

// // Financial status
// let finalStatus = "";

// if (savings >= 1000) {
//     finalStatus = "Excellent";
// } else if (savings >= 500) {
//     finalStatus = "Good";
// } else if (savings >= 100) {
//     finalStatus = "Needs improvement";
// } else {
//     finalStatus = "Critical";
// }

// // Output
// console.log("Personal Budget Tracker App");
// console.log("User:", userName.toUpperCase());
// console.log("Total income: $" + income);
// console.log("Total expenses: $" + totalExpenses);
// console.log("Tax deduction: $" + tax);
// console.log("Net income after tax: $" + netIncome);
// console.log("Remaining balance: $" + balance);
// console.log("Savings (20%): $" + savings);
// console.log("Final status:", finalStatus);

// // Overspending warning
// if (totalExpenses > netIncome) {
//     console.log("⚠️ Warning: Your expenses exceed your income.");
// }

// }



// budget tracke app (add function)


// Get prompt Message function.

function userInput(promptMessage, isNumber = false){
    let getUserInput = prompt(promptMessage);
    return isNumber? Number(getUserInput) : getUserInput;
}

// validation check function.
function validationCheck(userInputedNumber)
{
if(isNaN(userInputedNumber) || userInputedNumber <= 0){
   console.log("Please enter a valid number."); 
   return;
}
}

let allVariable = {
    userName : userInput("Enter your name : "),
    income : userInput("Enter your income : ",true),
    numberOfExpenses : userInput("How many enpenses do you have ? ", true),

    expenses : [],
    finalStatus : "",
    tax : 0,
    netIncome : 0,
    balance : 0,
    savings :0,
    totalExpenses : 0
};

// Calculate total expenses

function  CalculateTotalExpenses (numberOfExpenses){
    for (let e = 1; e <= numberOfExpenses; e++) {
    let expense = userInput(`Enter your ${e} no expense:`, true);
    allVariable.expenses.push(expense);
}

for (let i = 0; i < allVariable.expenses.length; i++) {
    allVariable.totalExpenses += allVariable.expenses[i];
}

}

CalculateTotalExpenses(allVariable.numberOfExpenses)   // টূটাল এক্সপেন্সেসকে সকল হিসাবের আগে কল করতে হবে। 

// Calculations
  allVariable.tax = allVariable.income * 0.10;
  allVariable.netIncome = allVariable.income - allVariable.tax;
  allVariable.balance = allVariable.netIncome - allVariable.totalExpenses;
  allVariable.savings = allVariable.savings > 0 ? allVariable.balance * 0.20 : 0;



// Output

function displayMessage(name, income, totalExpenses, tax, netIncome, balance, savings)
{     
   console.log ("Personal Budget Tracker App");
   console.log ("User:", name.toUpperCase());
   console.log ("Total income: $" + income);
   console.log ("Total expenses: $" + totalExpenses);
   console.log ("Tax deduction: $" + tax);
   console.log ("Net income after tax: $" + netIncome);
   console.log ("Remaining balance: $" + balance);
   console.log ("Savings (20%): $" + savings);

// Financial status
 if (savings >= 1000) finalStatus = "Excellent";
 else if (savings >= 500) finalStatus = "Good";
 else if (savings >= 100) finalStatus = "Needs improvement";
 else finalStatus = "Critical";


   console.log ("Final status: " + finalStatus);

// Overspending warning
if (totalExpenses > netIncome) {
    console.log("⚠️ Warning: Your expenses exceed your income.");
}
}


// budget tracker app 

displayMessage(allVariable.userName, allVariable.income, allVariable.totalExpenses, allVariable.tax, allVariable.netIncome, allVariable.balance, allVariable.savings)



