//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   0 , 1, 2, 3, 4, 5, 6, 7, 8, 9

//Print array elements in revese order.
//Print all even numbers in the array.
//Print all the number divisible by 3.
//Multiply all array elemnts by two.
//Push the new result elements to another array.


for (let i = arr.length - 1; i >= 0; i = i - 1) {
    console.log(arr[i]);
}

for (let i = 0; i < arr.length; i = i + 1) {

    if (arr[i] % 2 === 0) {
        console.log(arr[i]);
    } else {
        //console.log("ODD Number")
    }
}

// for(let i = 0; i < arr.length; i = i + 1){

//     if(arr[i] % 3 === 0){
//         console.log(arr[i]);
//     }
// }

//const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 09


// const newArray = [];


// for (let i = 0; i < arr.length; i = i + 1){
//     // console.log("Index", i);
//     // console.log("Length" , arr[i]);

//     //console.log(arr[i] * 2);
//     newArray.push(arr[i] * 2);
// }

// console.log(newArray);


const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
//   0, 1, 2, 3, 4, 5, 6, 7, 8, 09

//find even number from the array and result to new arry.
// const newArray = [];
// for (let i = 0; i < arr.length; i = i + 1){

//     if(arr[i] % 2 === 0){
//         //console.log(arr[i]);
//         newArray.push(arr[i])
//     }
//     console.log(newArray);

// }

//find odd and put it in a new array. an reverse the new array
const newArray = [];
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 !== 0) {
        //console.log(arr[i]);
        newArray.push(arr[i]);
    }
}
//console.log(newArray);

//console.log(newArray.reverse());
let oddReverse = [];
///Array join
let newString = ["h", "e", "l", "l", "o"];
//console.log(newString.join(''));

//Array substring
let subArray = "Helloworld";
//console.log(subArray.substring(0,8));

//let x = new Array;
//console.log(x);


const strArray = ["cat", "bat", "hat", "team", "car"];
const a = "bat";

// for (let i = 0; i < strArray.length; i = i + 1){

//     if(strArray[i] === a) {
//     console.log(strArray[i])
//     console.log("Index", i);
//     }
// }

//console.log(strArray.indexOf(a));

// let y = "hello world";
// let z = y.trim();
// console.log(z.length);


let num1 = 100;
let num2 = 200;
let num3 = 400;

// if (num1 > num2 && num1 > num3) {
//     console.log("Number 1 is big" , num1 )
// } else if (num2 > num1 && num2 > num2) {
//     console.log("Number 2 is big", num2)
// } else if (num3 > num1 && num3 > num2) {
//     console.log("number 3 is greater")
// }

//console.log(num1 > num2 ? "Number 1 is big": "Number 2 is bigger")

// let x = 5;
// console.log(x);
// x = x + 1;
// console.log(x);

const printHelloWorld = () => {
    console.log("hello world");
}

printHello();