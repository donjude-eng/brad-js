
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

function sumTwoNumber(x, y) {
    let a = x + y;
    return a;
}

let hiStr = sumTwoNumber(5, 10);
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

// let arr = [5, 6, 12, 13, 14, 0, 8];

// function zeroChecker(numberArray) {
//     for (let i = 0; i < numberArray.length; i = i + 1) {
//         //console.log(arr[i]);
//         if (arr[i] === 0) {
//             //console.log(`${i + 1} th element is 0`);
//         }
//     }

// }
// zeroChecker(arr);

//Task 6
//find the sum of the elements of an array using function.
let arr2 = [2, 4, 6, 12, 14, 22, 24]
//index   0  1  2  3    4  5   6

function sumOfArray(inputArray) {
    let sum = 0;
    for (let i = 0; i < inputArray.length; i++) {
        sum = sum + inputArray[i]//84
    }
    return sum;
}

let hisum = sumOfArray(arr2);
console.log(hisum)

let i = 0;
while (i < hisum) {
    //console.log("HI Don");
    i = i + 1;
}

//Task 7
//elem = 5
//5 * 4 * 3 * 2 * 1
//4 * 3 * 2 * 1


//Pass an array into function, Check if that array contains an element 0;
let arrElem = [5, 6, 12, 13, 14, 0, 8, 12, 0, 0]

function elemInArrayzero(numberArray) {
    for (let i = 0; i < numberArray.length; i++) {
        //console.log(numberArray[i]);

        if (numberArray[i] === 0) {
            console.log(i, (" 0- elemnt index"))
        }
    }
}


// elemInArrayzero(arrElem)


// //hasOwnProperty()
// let buz = {
//     fog: 'stack'
// };

// for (let name in buz) {
//     if (buz.hasOwnProperty(name)) {
//         console.log('this is fog (' +
//             name + ') for sure. Value: ' + buz[name]);
//     }
//     else {
//         console.log(name); // toString or something else
//     }
//     console.log(name);
//     console.log(buz);
// }

