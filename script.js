let expenses = [];

function addExpense() {
    const nameInput = document.getElementById('expense-name');
    const amountInput = document.getElementById('expense-amount');

    const expenseName = nameInput.value.trim();
    const expenseAmount = parseFloat(amountInput.value.trim());

    if (expenseName === '' || isNaN(expenseAmount) || expenseAmount <= 0) {
        alert('Please enter a valid expense name and amount.');
        return;
    }

    const expense = {
        id: Date.now(),
        name: expenseName,
        amount: expenseAmount
    };

    expenses.push(expense);
    updateExpenses();
    clearInputs();
}

function updateExpenses() {
    const expensesList = document.getElementById('expenses');
    expensesList.innerHTML = '';

    let totalAmount = 0;

    expenses.forEach(expense => {
        totalAmount += expense.amount;

        const li = document.createElement('li');
        li.innerHTML = `
            ${expense.name}: $<span>${expense.amount.toFixed(2)}</span>
            <button onclick="deleteExpense(${expense.id})">Delete</button>
        `;
        expensesList.appendChild(li);
    });

    document.getElementById('total-amount').textContent = totalAmount.toFixed(2);
}

function deleteExpense(id) {
    expenses = expenses.filter(expense => expense.id !== id);
    updateExpenses();
}

function clearInputs() {
    document.getElementById('expense-name').value = '';
    document.getElementById('expense-amount').value = '';
}
