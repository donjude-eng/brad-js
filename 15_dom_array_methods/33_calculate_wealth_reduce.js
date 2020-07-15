const main = document.getElementById('main');
const addUserBtn = document.getElementById('add-user');
const doubleBtn = document.getElementById('double');
const showMillionairesBtn = document.getElementById('show-millionaires');
const sortBtn = document.getElementById('sort');
const calculateWealthBtn = document.getElementById('calculate-wealth');


let data = [];

getRandomUser();
getRandomUser();
getRandomUser();

//Fetch random user and add money

async function getRandomUser() {
    const res = await fetch ('https://randomuser.me/api');
    const data = await res.json();

    //console.log(data);

    const user = data.results[0];


    //Constructor
    const newUser = {
        name: `${user.name.first} ${user.name.last}`,
        money: Math.floor(Math.random() * 1000000)  /// Can somebody explain this once?

    };
    //console.log(user.name.first)

    //console.log(newUser);
    addData(newUser)
}

//Double everyones Money
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
function doubleMoney() {
    data = data.map(user => {
       return {...user, money:user.money *2}
    })

    updateDom();
}

//Sort by richest
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort
function sortByRichest() {
    data.sort((a,b) => b.money -a.money);

    updateDom();
}

//Filter by millionaires
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
function showMillionaires() {
    data =data.filter(user => user.money > 1000000)

    updateDom();
}

// Calculate the total wealth
//https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/reduce
function calculateWealth() {
    const wealth = data.reduce((acc, user) => (acc +=user.money), 0);

    //console.log(formatMoney(wealth));
    const wealthEl = document.createElement('div');
    wealthEl.innerHTML = `<h3>Total Wealth: <strong>${formatMoney(
        wealth
    )}</strong></h3>`;
    main.appendChild(wealthEl);
}


//Add new object to data arr
function addData(obj) {
    data.push(obj);// Added to the array

    updateDom();
}

//Update Dom
function updateDom(providedData = data) { //Why provideddata here?
    // Clear main div
    main.innerHTML= '<h2><strong>Person</strong>Wealth</h2>';

    providedData.forEach(item => {
        const element = document.createElement('div');
        element.classList.add('person');
        element.innerHTML = `<strong>${item.name}</strong> ${formatMoney(item.money)}`;
        main.appendChild(element);

        //console.log(item.name)
    }); /// What is the relation with getRandomUser here?
}

// Format number as money - https://stackoverflow.com/questions/149055/how-to-format-numbers-as-currency-string
function formatMoney(number) {
    return '₹' + number.toFixed(2).replace(/\d(?=(\d{3})+\.)/g, '$&,');
};

// Event Listners
addUserBtn.addEventListener('click' , getRandomUser);
doubleBtn.addEventListener('click' , doubleMoney);
sortBtn.addEventListener('click' , sortByRichest);
calculateWealthBtn.addEventListener('click' , calculateWealth);



