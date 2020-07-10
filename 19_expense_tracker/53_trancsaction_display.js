const text = document.getElementById('text');
const amount = document.getElementById('amount');
const income = document.getElementById('money-plus')
//console.log(income , 'TextDom')
let onIncome = parseFloat(income.textContent);
//console.log('Don income' , onIncome)

const expense = document.getElementById('money-minus')
let onExpense = parseInt(expense.textContent);
//console.log('Expense' , onExpense)

const history = document.getElementById('list');
const submit = document.querySelector('.btn');
const balance = document.getElementById('balance');
const deleteBtn = document.querySelector('.list');

//console.log(deleteBtn)

//console.log(balance);

let firstBalance = parseInt(balance.textContent);
//firstBalace = firstBalance + 10;
//console.log("Firstbalance" , firstBalance);


// Add event listner

submit.addEventListener('click', addCustomerExpense);
deleteBtn.addEventListener('click', removeUpdateText);
//console.log(deleteBtn);

function addCustomerExpense(e) {
    e.preventDefault()

    const textContent = text.value;
    const amountPrice = +amount.value;
    //console.log('value' , amountPrice)

  if (amountPrice > 0) {
    //console.log('Hi');

    const transactionList = document.createElement('li');
    transactionList.className += 'plus';

    const transactionSpan = document.createElement('span');
    const transactionButton = document.createElement('button');
    transactionButton.className += 'delete-btn';

    const transactionliNode = document.createTextNode(`${textContent}`);
    const transactionSpanNode = document.createTextNode(`${amountPrice}`)
    //console.log(transactionSpanNode)
    const transactionButtonNode = document.createTextNode('x');

    transactionList.appendChild(transactionliNode);
    transactionSpan.appendChild(transactionSpanNode);
    transactionButton.appendChild(transactionButtonNode);

    transactionList.appendChild(transactionSpan);
    transactionList.appendChild(transactionButton);
    history.appendChild(transactionList)
    //console.log(history);

    updateBalance(amountPrice);
    addpersonIncome(amountPrice);

  } else {

    const transactionList = document.createElement('li');
    transactionList.className += 'minus';
    const transactionSpan = document.createElement('span');
    const transactionButton = document.createElement('button');
    transactionButton.className += 'delete-btn';

    const transactionliNode = document.createTextNode(`${textContent}`);
    const transactionSpanNode = document.createTextNode(`${amountPrice}`)
    const transactionButtonNode = document.createTextNode('x');

    transactionList.appendChild(transactionliNode);
    transactionSpan.appendChild(transactionSpanNode);
    transactionButton.appendChild(transactionButtonNode);

    transactionList.appendChild(transactionSpan);
    transactionList.appendChild(transactionButton);
    history.appendChild(transactionList);

    updateBalance(amountPrice);
    addpersonExpense(amountPrice);

  };

};

// Update your balance
function updateBalance(amountPrice) {
  let currentBalance = amountPrice + firstBalance;
  balance.innerHTML = `${currentBalance}`;
  firstBalance = currentBalance;
};

//Update income for plus additions.
function addpersonIncome(amountPrice) {
  let incomeReturn = onIncome + amountPrice;
  income.innerText = `+$ ${incomeReturn}`;
  onIncome = incomeReturn;
};

//Update expense for minus reduction.
function addpersonExpense(amountPrice) {
  let expenseReturn = onExpense - amountPrice;
  expense.innerHTML = `-$ ${expenseReturn}`;
  onExpense = expenseReturn;

};

//Delete text from the field
function removeUpdateText(e) {

  if(e.target.classList.contains('delete-btn')) {
    const amountAdd = parseFloat(e.target.parentElement.children[0].textContent)
    if(e.target.parentElement.className === 'plus') {

      //console.log(amountAdd);
      addpersonIncome(-amountAdd)
      updateBalance(-amountAdd)

    } else {
      updateBalance(-amountAdd)
      addpersonExpense(-amountAdd)
      //console.log(updateBalance)
    }
    e.target.parentElement.remove();
  }
}

