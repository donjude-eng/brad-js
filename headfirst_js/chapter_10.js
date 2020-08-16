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

//Shell game is here















////Passahngers check problem.

let passengers = [{ name: "Jane Doloop", paid: true },
{ name: "Dr. Evel", paid: true },
{ name: "Sue Property", paid: false },
{ name: "John Funcall", paid: true }];

function checkPaid(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (!passengers[i].paid) {
            return false;
        }
    }

    return true;
}

function checkNoFly(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        if (onNoFlyList(passengers[i].name)) {
            return false;
        }
    }
    return true;
}

function printPassengers(passengers) {
    for (let i = 0; i < passengers.length; i++) {
        console.log(passengers[i].name);
        return false;
    }
}








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

console.log(numberOfhandShakes(10));
