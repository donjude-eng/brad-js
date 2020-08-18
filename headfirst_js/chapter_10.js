//Standard function declaration
// function quack(num) {
//     for (let i = 0; i < num; i++) {
//         //console.log("Quack!");
//     }
// }
// quack(3);


//function expression (another way but not standard practice)
// let fly = function (num) {
//     for (let i = 0; i < num; i++) {
//         //console.log("Flying!");
//     }
// };
// fly(3);

// let num1 = 1000;
// let num2 = 400;

// function greatTwo(num1, num2) {
//     if (num1 > num2){
//         return num1
//     } else {
//         return num2
//     }
// }

//console.log("Great of two" ,(num1 , num2));

//Function invokation declaration
function quack(num) {
    for (let i = 0; i < num; i++) {
        //console.log("Quack!");
    }
}

//Function expression
let fly = function (num) {
    for (let i = 0; i < num; i++) {
        //console.log("Flying!");
    }
}

let superFly = fly;
superFly(2);

let superQuack = quack;
superQuack(3);

//let a = 10;
//let b = 20;

////Declaration and expression together
let midi = true;
let type = "Piano";
let midiInterFace;


function play(sequence) {
    //code here
}
let pause = function () {
    stop();
}

function stop() {
    // code here
}

function createMidi() {
    // code here
}
if (midi) {
    midiInterface = function (type) {
        // code here
    };
}



////Passangers check problem.

let passengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true }
];

function checkPaid(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        //console.log(passengers[i]);
        if (passengers[i].paid === false) {
            return false;
        }
    }

    return true;
}


//console.log(checkPaid(passengers));

function checkNoFly(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (onNoFlyList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

//console.log(checkNoFly(passengers));


// function printPassengers(passengers) {
//     for (let i = 0; i < passengers.length; i++) {
//         console.log(passengers[i].name);
//         return false;
//     }
// }



//Reverse
const arrval = [10, 25, 35, 45, 55, 20, 75]
const arrval2 = [10, 35, 45, 55, 65]


for (let i = 0; i < arrval.length; i = i + 1) {
    if (arrval[i] % 2 === 0) {
        //console.log(arrval[i])
    }
}

// for (let i = arrval.length - 1; i >= 0; i--) {
//     //console.log(arrval[i]);
// }

// for (let k = arrval2.length - 1; k >= 0; k--) {
//     //console.log(arrval2[k]);
// }

// function reverse( arrval, arrval2) {
//     for (let i = arrval.length - 1; i >= 0; i--) {
//         console.log(arrval[i]);
//         for (let k = arrval2.length - 1; k >= 0; k--) {
//             console.log(arrval2[k]);
//         }
//     }
// }
// reverse([10, 25, 35, 45, 55, 65, 75])

const numberOfhandShakes = (numberOfPeople) => {
    let result = numberOfPeople * ((numberOfPeople - 1) / 2);
    return result;
}

//console.log(numberOfhandShakes(10));

//Function inside function call.
function sayIt(translator) {
    let phrase = translator("Hello");
    console.log(phrase);
}

function hawaiianTranslator(word) {
    if (word === "Hello") return "Aloha";
    if (word === "Goodbye") return "Good Bye";
}

sayIt(hawaiianTranslator);


//Serve customer passanger
function serviceCustomer(passenger) {
    if (passenger.ticket === "firstclass") {
        alert("Would you like a cocktail or wine?");
    } else {
        alert("Your choice is cola oer water");
    }

}
serviceCustomer();

//Taking orders with first class functions
function createDrinkOrder(passenger) {
    let orderFunction;
    if (passenger.ticket === "firstclass") {
        orderFunction = function () {
            alert("Would you like a cocktail or wine?");
        };
    } else {
        orderFunction = function () {
            alert("Your choice is cola or water.");
        };
    }
    return orderFunction;
}

function serveCustomer(passenger) {
    let getDrinkOrderFunction = createDrinkOrder(passenger);

    getDrinkOrderFunction();
    // get dinner order
    getDrinkOrderFunction();
    getDrinkOrderFunction();
    // show movie
    getDrinkOrderFunction();
    // pick up trash
}

///Passengers iteration
let passengers = [
    { name: "Jane Doloop", paid: true },
    { name: "Dr. Evel", paid: true },
    { name: "Sue Property", paid: false },
    { name: "John Funcall", paid: true }
];

function servePassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers[i]);
    }
}

servePassengers(passengers);


//Write your solutions for the remaining three sort functions below.
function compareName(colaA, colaB) {
    if (colaA.name > colaB.name) {
        return 1;
    } else if (colaA.name === colaB.name) {
        return 0;
    } else {
        return - 1;
    }
}

function compareCalories(colaA, colaB) {
    if (colaA.calories > colaB.calories) {
        return 1;
    } else if (colaA.calories === colaB.calories) {
        return 0;
    } else {
        return -1;
    }
}

function compareColor(colaA, colaB) {
    if (colaA.color > colaB.color) {
        return 1;
    } else if (colaA.color === colaB.color) {
        return 0;
    } else {
        return -1;
    }
}

products.sort(compareName);
console.log("Products sorted by name:");
printProducts(products);
products.sort(compareCalories);
console.log("Products sorted by calories:");
printProducts(products);
products.sort(compareColor);
console.log("Products sorted by color:");
printProducts(products);