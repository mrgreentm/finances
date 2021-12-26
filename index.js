var earnings = document.getElementById('earnings')
var expenditure = document.getElementById('expenditure')

var allExpenditure = document.getElementById('allExpenses');
var allProfit = document.getElementById('allProfit');
var profitText = document.getElementById('profitValue');
var expensesText = document.getElementById('expensesValue');

function calculateProfit(){
    var profit = earnings.value - expenditure.value
    profitText.innerHTML = profit
    
}
function calculateExpenses(){
    var expense = expenditure.value
    expensesText.innerHTML = expense
    console.log(expense);
}
function verifyState(){
    allProfit.style.color = red
}