const text = document.getElementById('text');
const amount = document.getElementById('amount');
const income = document.getElementById('money-plus')

let onIncome = parseFloat(income.textContent);

const expense = document.getElementById('money-minus')
let onExpense = parseFloat(expense.textContent);
const history = document.getElementById('list');
const submit = document.querySelector('.btn');
const balance = document.getElementById('balance');
const deleteBtn = document.querySelector('.list');

let firstBalance = parseInt(balance.textContent);

// Add event listner
submit.addEventListener('click', addCustomerExpense);
deleteBtn.addEventListener('click', removeUpdateText);
document.addEventListener('DOMContentLoaded', getFromLocalStorage)

function addCustomerExpense(e) {
  e.preventDefault()

  const textContent = text.value;
  const amountPrice = +amount.value;
  //console.log('value' , amountPrice)
  const transactionList = document.createElement('li');

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
  history.appendChild(transactionList)
  addBalance(amountPrice);
  storeInLocalStorage(textContent, amountPrice);


  if (amountPrice > 0) {
    transactionList.className += 'plus';
    addpersonIncome(amountPrice);

  } else {

    transactionList.className += 'minus';
    addpersonExpense(amountPrice);
  };

};

// Update your balance
function addBalance(amountPrice) {
  let currentBalance = amountPrice + firstBalance;
  balance.innerHTML = `${currentBalance}`;
  firstBalance = currentBalance;
};

// Update your balance
function delBalance(amountPrice) {
  let currentBalance = firstBalance - amountPrice;
  balance.innerHTML = `${currentBalance}`;
  firstBalance = currentBalance;
};

//Update income for plus additions.
function addpersonIncome(amountPrice) {
  let incomeReturn = onIncome + amountPrice;
  let positiveValue = Math.abs(incomeReturn);
  income.innerText = `+$ ${positiveValue}`;
  onIncome = incomeReturn;
};

//Update expense for minus reduction.
function addpersonExpense(amountPrice) {
  let expenseReturn = onExpense + amountPrice;
  let positiveExpense = Math.abs(expenseReturn);
  expense.innerHTML = `-$ ${positiveExpense}`;
  onExpense = expenseReturn;

};

//Update income for plus additions.
function delpersonIncome(amountPrice) {
  let incomeReturn = onIncome - amountPrice;
  income.innerText = `+$ ${incomeReturn}`;
  onIncome = incomeReturn;
};

//Update expense for minus reduction.
function delpersonExpense(amountPrice) {
  let expenseReturn = onExpense - amountPrice;
  expense.innerHTML = `-$ ${expenseReturn}`;
  onExpense = expenseReturn;

};

//Delete text from the field
function removeUpdateText(e) {
  const amountAdd = parseFloat(e.target.parentElement.children[0].textContent)
  let text = e.target.parentElement.firstChild.textContent;
  if (e.target.classList.contains('delete-btn')) {

    //console.log(text, "TEXT")

    if (e.target.parentElement.className === 'plus') {
      //console.log(amountAdd);
      delpersonIncome(amountAdd)
      delBalance(amountAdd)

    } else {
      delBalance(amountAdd)
      delpersonExpense(amountAdd)
      //console.log(updateBalance)
    }
    e.target.parentElement.remove();
  }
  removeTextFromLs(text);
}

///Update in Local Storage.

function storeInLocalStorage(list, inputValue) {
  let listValue;

  if (localStorage.getItem('listValue') == null) {
    listValue = [];
  } else {
    listValue = JSON.parse(localStorage.getItem('listValue'));
  }

  listValue.push({inputText: list, inputValue: inputValue });

  localStorage.setItem('listValue', JSON.stringify(listValue));
  //console.log(listValue);

}

// Get items from Local storage
function getFromLocalStorage() {
  let listValue;

  if (localStorage.getItem('listValue') === null) {
    listValue = [];
  } else {
    listValue = JSON.parse(localStorage.getItem('listValue'))
  }

  listValue.forEach(data => {

    const transactionList = document.createElement('li');

    const transactionSpan = document.createElement('span');
    const transactionButton = document.createElement('button');
    transactionButton.className += 'delete-btn';

    const transactionliNode = document.createTextNode(`${data.inputText}`);
    const transactionSpanNode = document.createTextNode(`${data.inputValue}`)
    const transactionButtonNode = document.createTextNode('x');

    transactionList.appendChild(transactionliNode);
    transactionSpan.appendChild(transactionSpanNode);
    transactionButton.appendChild(transactionButtonNode);

    transactionList.appendChild(transactionSpan);
    transactionList.appendChild(transactionButton);
    history.appendChild(transactionList)

    if (data.inputValue > 0) {
      transactionList.className += 'plus';
      addBalance(data.inputValue)
      addpersonIncome(data.inputValue);

    } else {
      transactionList.className += 'minus';
      addBalance(data.inputValue)
      addpersonExpense(data.inputValue);
    };

  });

}

//Remove text Value from the local storage
function removeTextFromLs(textRemove) {
  let listValue;
  if (localStorage.getItem('listValue') === null) {
    listValue = [];
  } else {
    listValue = JSON.parse(localStorage.getItem('listValue'));
  }

  for (let i = 0; i < listValue.length; i++) {
    //console.log(textRemove, "Remove")
    if (listValue[i].inputText === textRemove) {
      listValue.splice(i, 1)

    }
  };
  localStorage.setItem('listValue', JSON.stringify(listValue));

}

/// I the issue was the number looks as string"



