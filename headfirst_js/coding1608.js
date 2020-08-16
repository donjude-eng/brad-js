
//Reverse array
let arrayOne = [12, 24, 36, 48, 60, 72, 90]

for (let i = arrayOne.length - 1; i >= 0; i--) {
    //console.log(arrayOne[i]);
}

//Even number
for (let i = 0; i < arrayOne.length; i++) {

    if (arrayOne[i] % 2 === 0) {
        //console.log(arrayOne[i])
    }
}

//Function Problems
///Program to print sum of two numbers.

//Task1
function addTwoNumbers(num1, num2) {
    let num = num1 + num2;
    //console.log(num);
}
addTwoNumbers(10, 100);


//Task2 --Diffrnece in Global and local variable
// let x = 100;
// let y = 50;

// function sumOfTwoNumbers(num1, num2) {
//     let num = num1 + num2;
//     return num;
// }

// let sum = sumOfTwoNumbers(50, 50);
// console.log(sum);


// if (sum % 2 === 0) {
//     console.log("Even", sum);
// } else {
//     console.log("odd number")
// }

//Task 4;
//Add two numbers and print result times "HI"

function sumTwoNumber (x , y){
    let a = x + y;
    return a;
}

let hiStr =  sumTwoNumber(5 , 10);
//console.log(hiStr);

// for (let i = 0; i < hiStr; i = i + 1){
//     console.log("Hi");
// }

// let i = 0;
// while (i < hiStr) {
//     console.log("Hi")
//     i = i + 1;
// }

//Task 5
//Pass an array into function, Check if that array contains an element 0;

let arr = [10, 15, 20, 25, 30, 35, 40];

function zeroChecker(numberArray) {
    for (let i = 0; i < arr.length; i = i + 1){
        //console.log(arr[i]);
        if (arr[i] % 2 === 0){
            console.log(arr[i]);
        }
    }


}

zeroChecker(arr);