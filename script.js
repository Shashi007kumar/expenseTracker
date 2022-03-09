const transactions = [
  { expense: "samosa", amount: "-100" },
  { expense: "scholarship", amount: "+50000" },
  { expense: "momos", amount: "-150" },
];

const transactionHistory = document.querySelector(".transaction-history");
const balanceContainer = document.querySelector(".balance-container");
const incomeContainer = document.querySelector(".income-container");
const expenseContainer = document.querySelector(".expense-container");

function updateBalance() {
  let sum = 0;
  for (let i = 0; i < transactions.length; i++) {
    sum = sum + parseInt(transactions[i].amount);
  }
  balanceContainer.innerHTML = "Balance : ₹" + sum;
}

function updateIncome() {
  let sum = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (parseInt(transactions[i].amount) > 0) {
      sum = sum + parseInt(transactions[i].amount);
    }
  }
  incomeContainer.innerHTML = "+₹" + sum;
}

function updateExpense() {
  let sum = 0;
  for (let i = 0; i < transactions.length; i++) {
    if (parseInt(transactions[i].amount) < 0) {
      sum = sum + parseInt(transactions[i].amount);
    }
  }
  expenseContainer.innerHTML = "-₹" + sum;
}

let id = 4;

function addTransaction() {
  const expense = document.getElementById("expense");
  const amount = document.getElementById("amount");
  const transactionHistory = document.querySelector(".transaction-history");

  if (amount.value && expense.value) {
    if (parseInt(amount.value) > 0) {
      const data = `<div class="history" style="background:green;">
        <p><button class="btn" id="${id}" onclick="removeTransaction(this.id)">delete</button></p>
        <p>${expense.value}</p>
        <p>${amount.value}</p>
    <div>
    `;
      transactionHistory.insertAdjacentHTML("beforeend", data);
      transactions.push({ expense: expense.value, amount: amount.value });
      updateIncome();
      updateBalance();
    } else {
      const data = `<div class="history" style="background:red;">
        <p><button class="btn" id="${id}" onclick="removeTransaction(this.id)">delete</button></p>
        <p>${expense.value}</p>
        <p>${amount.value}</p>
    <div>
    `;
      transactionHistory.insertAdjacentHTML("beforeend", data);
      transactions.push({ expense: expense.value, amount: amount.value });
      updateExpense();
      updateBalance();
    }

    id = id + 1;
  } else {
    alert("plz fill the fields !!!");
  }
}

function removeTransaction(id) {
  const history = document.getElementsByClassName("history");
  alert(id);
  transactions.splice(id - 1, 1);
  updateIncome();
  updateExpense();
  updateBalance();

  history[id - 1].style.display = "none";
}
