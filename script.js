let totalIncome = 0;
let totalExpenses = 0;

// Update the summary display
function updateSummary() {
  document.getElementById("totalIncome").innerText = totalIncome;
  document.getElementById("totalExpenses").innerText = totalExpenses;
  document.getElementById("balance").innerText = totalIncome - totalExpenses;
}

// Add income transaction
function addIncome() {
  const description = document.getElementById("incomeDescription").value;
  const amount = parseFloat(document.getElementById("incomeAmount").value);

  if (description && amount > 0) {
    totalIncome += amount;
    updateSummary();
    addToHistory(`Income: ${description} - $${amount}`);
  }
}

// Add expense transaction
function addExpense() {
  const description = document.getElementById("expenseDescription").value;
  const amount = parseFloat(document.getElementById("expenseAmount").value);

  if (description && amount > 0) {
    totalExpenses += amount;
    updateSummary();
    addToHistory(`Expense: ${description} - $${amount}`);
  }
}

// Display transaction in history
function addToHistory(transaction) {
  const historyList = document.getElementById("historyList");
  const listItem = document.createElement("li");
  listItem.textContent = transaction;
  historyList.appendChild(listItem);
}
