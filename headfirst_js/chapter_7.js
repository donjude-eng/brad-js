let x;
if (x == undefined) {
    // x isn’t defined! just deal with it!
    //console.log(typeof x);
}

let test1 = "abcdef";
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = { "abcdef": 123 };
let test8 = ["abcdef", 123];
function test9() { return "abcdef" };

// console.log(typeof test1);
// console.log(typeof test2);
// console.log(typeof test3);
// console.log(typeof test4);
// console.log(typeof test5);
// console.log(typeof test6);
// console.log(typeof test7);
// console.log(typeof test8);
// console.log(typeof test9);

// let planet = document.getElementById("blueplanet");

// console.log(typeof planet);

let test10 = null;
//console.log(typeof test10);

//Remember, null is intended to represent
//an object that isn’t there.

let test11 = 0 / 0;
//console.log(typeof test11);

let str = null;
//console.log(typeof str)

let number = NaN;
//console.log(typeof NaN)

let testMe = "99";
// console.log(typeof testMe)

if (testMe == 99) {
    //  console.log(typeof testMe)
    //console.log(testMe)
};

let value1 = 99
if (value1 == "99") {
    //console.log(value1);
}

let value2 = "99"
if (value2 == 99) {
    //console.log(value2);
}


//JavaScript will try to convert “ninety-nine” to a number,
//and it will fail, resulting in NaN. So the two values //won’t be
//equal, and the result will be false.


//== (equality), and the other operator is === (strict equality)

let num = "1";

if (num == true) {
    //console.log(typeof num)
}

if (undefined == null) {
    //console.log(typeof num)
}

//=== (strict equality)
// == (equality operator)
//=== convert the boolean to a number?
//That doesn’t seem very sensical to me.


function findCarInLot(car) {
    for (let i = 0; i < lot.length; i++) {
        if (car === lot[i]) {
            return i;
        }

    }
    return -1;
}
let chevy = {
    make: "Chevy",
    model: "Bel Air"
};

let taxi = {
    make: "Webville Motors",
    model: "Taxi"
};

let fiat1 = {
    make: "Fiat",
    model: "500"
};

let fiat2 = {
    make: "Fiat",
    model: "500"
};

let lot = [chevy, taxi, fiat1, fiat2];

let loc1 = findCarInLot(fiat2);
let loc2 = findCarInLot(taxi);
let loc3 = findCarInLot(chevy);
let loc4 = findCarInLot(fiat1);
//console.log(car);


function lieDetectorTest() {
    let lies = 0;
    let stolenDiamond = {};
    if (stolenDiamond) {
        //console.log("You stole the diamond");
        lies++;
    }
    let car = {
        keysInPocket: null
    };

    if (car.keysInPocket) {
        //console.log("Uh oh, guess you stole the car!");
        lies++;
    }

    if (car.emptyGasTank) {
        //console.log("You drove the car after you stole it!");
        lies++;
    }

    let foundYouAtTheCrimeScene = [];
    if (foundYouAtTheCrimeScene) {
        //console.log("A sure sign of guilt");
        lies++;
    }

    if (foundYouAtTheCrimeScene[0]) {
        //console.log("Caught with a stolen item!");
        lies++;
    }

    let yourName = " ";
    if (yourName) {
        //console.log("Guess you lied about your name");
        lies++;
    }
    return lies;
}
let numberOfLies = lieDetectorTest();
//console.log("You told " + numberOfLies + " lies!");
if (numberOfLies >= 3) {
    //console.log("Guilty as charged");
}


//Length property in string
let input = "jenny@wickedlysmart.com";
for (let i = 0; i < input.length; i++) {
    if (input.charAt(i) === "m") {
        //console.log("There's an @ sign at index " + i);
    }
}


//Index of cat
let phrase = "the ca t in the hat";
let index = phrase.indexOf("ca");
console.log("there's a cat sitting at index " + index);


//Subst
let data = "name|phone|address";
let val = data.substring(5, 10);
console.log("Substring is " + val);

let order = 1 + 2 + " pizzas";
console.log(order);
//let order = (1 + 2) + "pizzas";

let order2 = 1 + (2 + "pizzas");
//         = 1 + ("2" + "pizzas")
//         = 1 + "2pizzas"
//         = "1" + "2pizzas"
//         = "12pizzas"
console.log(order2);

console.log(3 * "4");
console.log(3 * "a");
console.log("a" * "b");
console.log("3" * "5");
console.log("3" * "a");

console.log("a" - 5);

//Print the index of first and second occurence of the substring "dog" in the paragraph string using the indexOf method.

const paragraph = 'lazy dog. If the dog barked, was it really lazy?';

const string1 = "A string primitive";
console.log(typeof string1);

const string4 = new String("A String object");
console.log(typeof string4);

//

let num1 = 23;
console.log(typeof num1)

let num2 = Number("23");
console.log(typeof num2);

let num3 = new Number("23");
console.log(typeof num3);

console.log(num2 === num1);
console.log(num2 === num3);

console.log(num3 + 10);
console.log(num2 + 10);




//[], {} ,()