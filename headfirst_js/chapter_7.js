let x;
if (x == undefined) {
    // x isn’t defined! just deal with it!
    console.log(typeof x);
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
console.log(testMe)
};

let value1 = 99
if (value1 == "99") {
    console.log(value1);
}

let value2 = "99"
if (value2 == 99) {
    console.log(value2);
}


//JavaScript will try to convert “ninety-nine” to a number,
//and it will fail, resulting in NaN. So the two values //won’t be
//equal, and the result will be false.


//== (equality), and the other operator is === (strict equality)

let num = "1";

if (num == true) {
    console.log(typeof num)
}

if (undefined == null) {
    console.log(typeof num)
}

//=== (strict equality)
// == (equality operator)
//=== convert the boolean to a number?
//That doesn’t seem very sensical to me.