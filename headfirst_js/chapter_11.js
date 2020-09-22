

//Sample anonymous function
// function handeler() {
//     alert("yeah, that page loaded");
//     window.onload = handler;
// }

// window.onload = init;

// let cookies = {
//     instructions: "Preheat oven to 350...",
//     bake: function (time) {
//         console.log("Baking the cookies.");
//         setTimeout(done, time);
//     }
// };

// function init() {
//     let button = document.getElementById("bake");
//     button.onclick = handleButton;
// }

// function handleButton() {
//     console.log("Time to bake the cookies.");
//     cookies.bake(2500);
// }

// function done() {
//     alert("Cookies are ready, take them out to cool.");
//     console.log("Cooling the cookies.");
//     let cool = function () {
//         alert("Cookies are cool, time to eat!");
//     };
//     setTimeout(cool, 1000);
// }


// function sumOfTwoNumber(num1, num2) {
//     let sum;
//     sum = num1 + num2;
//     //console.log(sum);
//     return sum;
// }

// //console.log(sumOfTwoNumber(10, 15));


// let arr = [10, 25, 35, 45, 55, 65];
// //index arr[i]   0  1   2  3  4  5

// function sumOfArray(number) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         sum = sum + arr[i];

//     }
//     return sum;
// }

// let sum = sumOfArray(arr);
// //console.log(sum);


// ///elemt 0

// let arr2 = [10, 15, 0, 20, 45, 12, 0, 11, 12, 52];

// const elemZeroInarray = (numberElement) => {
//     //console.log(numberElement);
//     for (let i = 0; i < numberElement.length; i = i + 1) {
//         if (numberElement[i] === 0) {
//             //console.log(i);
//         }
//     }

// }

// elemZeroInarray(arr2);

// //factorial of a number

// function factNumber(number) {
//     let product = 1;

//     for (let i = number; number > qa0; number--) {
//         product = product * number;

//     }
//     return product;

// }

//console.log(factNumber(5));


///Set timout function with usual declaration
// function cookieAlarm() {
//     alert("Time to take the cookies out of the oven");
// };
// setTimeout(cookieAlarm, 600000);

// ///Set timout anonmymous function
// setTimeout(function() { alert("Time to take the cookies out of the oven");}, 600000);

//We start at the top of the code and find all the function declarations.


//Functione xpression and declaration call
// let migrating = true;

// if (migrating) {
//     quack(4);
//     fly(4);
// }

// var fly = function (num) {
//     for (i = 0; i < num; i++) {
//         console.log("Flying!");
//     }
// };

// function quack(num) {
//     for (i = 0; i < num; i++) {
//         console.log("Quack!");
//     }
// }



// //?????? Ididin'y fully undertand this problem
// ///How to nest functions
// let migrating = true;
// //Here we’re adding a function declaration with the name wingFlapper inside the fly function expression.
// let fly = function (num) {
//     let sound = "Flying";
//     function wingFlapper() {
//         console.log(sound);
//     }

//     for (let i = 0; i < num; i++) {
//         wingFlapper()
//     }
// };

// function quack(num) {
//     let sound = "Quack";
//     //Here we’re adding a function expression assigned to the quacker variable inside the quack function declaration.
//     let quacker = function () {
//         console.log(sound);
//     };
//     for (let i = 0; i < num; i++) {
//         quacker();
//     }
// }

// if (migrating) {
//     quack(4);
//     fly(4);
// }


//A little review of lexical scope

///So when we call whereAreYou, it returns the value of the local justAVar, not the global one.

// let justAVar = "Oh, don't you worry about it, I'm GLOBAL";
// function whereAreYou() {
//     let justAVar = "Just an every day LOCAL One";
//     return justAVar;
// }
// let result = whereAreYou();

// console.log(result);

// //Now let’s introduce a nested function:
let justAVar = "Oh, don't you worry about it, I'm GLOBAL";

function whereAreYou() {
    let justAVar = "Just an every day LOCAL Two";
    function inner() {
        return justAVar;
    }
    return inner();
}

let result = whereAreYou();
//console.log(result);


// //Where things get interesting with lexical scope
// let justAVar = "Oh, don't you worry about it, I'm GLOBAL";

// function whereAreYou() {
//     let justAVar = "Just an every day LOCAL Three";
//     function inner() {
//         return justAVar;
//     }
//     return inner;
// }

// let innerFunction = whereAreYou();
// let result = innerFunction();
//console.log(result);


//Using closures to implement a magic counter
// let count = 0;

// function counter(){
//     count = count + 1;
//     return count;
// }

// console.log(counter());
// console.log(counter());
// console.log(counter());


//Test drive your magic counter ??? I've doubt i this problem!!
// function makeCounter() {
//     let count = 0;
//     function counter() {

//         count = count + 1;
//         return count;
//     }
//     console.log(count)
//     return counter;

// }

// let doCount = makeCounter();
// console.log(doCount());
// console.log(doCount());
// console.log(doCount());


//Click me! without a closure

// let count = 0;

// window.onload = function () {
//     let button = document.getElementById("clickme");
//     button.onclick = handleClick;

// };
// function handleClick() {
//     let message = "You clicked me ";
//     let div = document.getElementById("message");
//     count++;
//     div.innerHTML = message + count + " times!";
// }

//Click me! with a closure
window.onload = function () {
    let count = 0;
    let message = "You clicked me ";
    let div = document.getElementById("message");
    let button = document.getElementById("clickme");

    button.onclick = function () {
        count++;
        div.innerHTML = message + count + " times!";
    };
};