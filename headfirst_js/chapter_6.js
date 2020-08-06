let access = document.getElementById("code9");
let code = access.innerHTML;
code = code + " midnight";
alert(code);


let access = document.getElementById("code9");
var code = access.innerHTML;
code = code + " midnight";
alert(code);

let access = document.getElementById("code9");
let code = access.innerHTML;
code = code + " midnight";
alert(code);

let scoop = document.getElementById("raspberry");
let altText = scoop.getAttribute("alt");
console.log("I can't see the image in the console,");
console.log(" but I'm told it looks like: " + altText);

let scoop = document.getElementById("raspberry");
let altText = scoop.getAttribute("alt");
if (altText == null) {
    console.log("Oh, I guess there isn't an alt attribute.");
} else {
    console.log("I can't see the image in the console,");
    console.log(" but I'm told it looks like " + altText);
}

// type test
let test1 = "abcdef";
let test2 = 123;
let test3 = true;
let test4 = {};
let test5 = [];
let test6;
let test7 = { "abcdef": 123 };
let test8 = ["abcdef", 123];
function test9() { return "abcdef" };

console.log(typeof test1);
console.log(typeof test2);
console.log(typeof test3);
console.log(typeof test4);
console.log(typeof test5);
console.log(typeof test6);
console.log(typeof test7);
console.log(typeof test8);
console.log(typeof test9);