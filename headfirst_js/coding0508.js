//solution required ;
// Print all the index and values in the array.
// Print the length of the array.
// Print the highest score in the array.
// Print the highest score carried index.

let scores = [ 60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44 ];

let marks = [ 44, 18, 41, 53, 55, 61, 51, 44 ];

/////

let price = [25, 10, 12, 15, 95, 45, 22, 10];

let amount = [15, 25, 35, 10, 25, 20, 11,20];


//let highestScore = 0;

//Find the hihest score of cost.

let cost = [ 44, 21 , 15, 16, 85, 14, 10];
//Index  =  [ 0, 1  , 2,  3,  4,  5,  6]

function findHighest(x){

    let highScore = 0;
    for (let i = 0; i < x.length; i++) {

        if (highScore < x[i]) {

            highScore = x[i];
        }
    }
    //console.log("Highscore of cost array", highScore)
    return highScore;

}

//This function finds the highest index of an array given the highest value in that array.
// @x - x is the array to be searched.
// @y - y should contain the highest element in x.
function findHighIndex(x , y) {

    for (let i = 0; i < x.length; i++) {

        if (x[i] === y) {
            highIndex = i;
        }
    }

    return highIndex;
}

let temphighest;
temphighest = findHighest(price);
console.log("Highscore of the array", temphighest);
let temphighIndex;
temphighIndex = findHighIndex(price , temphighest);
console.log("Highindex of the array", temphighIndex);


function reverseArray(x) {
    for (let i = x.length - 1 ; i >=0; i--) {
        console.log("Index = " , i);
        console.log("Element = ", x[i]);
    }
}

//Print for for loop
function printArrayFor(x) {
    for (let i = 0; i < x.length; i++){
        console.log("Index = " , i);
        console.log("Element = ", x[i]);
    }
    console.log("Current value of i = ", i);
}


//Using while loop


function printArrayWhile(y) {
    let i = 10;


    { //Block begins...
        let i = 0;
        while (i < y.length) {
            console.log("Index = ", i);
            console.log("Element = ", y[i]);

            i = i + 1;
        }
    } //End of block
    console.log("Current value of i = ", i);

}

//printArrayWhile(amount);

function printArrayLen(y) {
    console.log("Length of the array" , y.length);
}

// printArrayLen(amount);
// reverseArray(amount);

// printArray(scores);
// printArray(marks);
// printArray(cost);
// printArray(price);
// printArray(amount);

////This is the code to print multiple arrays. We can refactor it as shown above.

// for (let i = 0; i < scores.length; i = i + 1) {
//     console.log("Index = " , i);
//     console.log("Element = ", scores[i]);
// }

// for (let i = 0; i < marks.length; i++) {
//     console.log("Index = " , i);
//     console.log("Element = ", marks[i]);
// }

// let allen = 60;
// let kichu = 50;
// let sarath = 58;

// let numScore = 4;

// console.log("Total number of score =", numScore);
// console.log("Score 1 = ", allen);
// console.log("Score 2 = ", kichu);
// console.log("Score 3 = ", sarath);


// let highscore = 0;

// if (allen > kichu)
// //Truth block
// {
//     //1. This means allen is greater than kichu
//     console.log("allen " + allen + " is greater than kichu " + kichu);
//     //2. So to determine the winner compare allen and sarath.

//     if (allen > sarath)
//     //Truth Block begins
//     {
//         //This means allen is the greatest.
//         console.log("allen " + allen + " Is the greatest " + "sarath value " + sarath)
//     }
//     //Truth Block ends
//     else
//      //False Block begins
//     {
//         //This means sarath is the greatest.
//         console.log("Sarath is greatest")
//     }
//     //False block ends
// }
// else
// //False Block
// {
//     //1. This means kichu is greater than allen.
//     //2. So the determine the winner compare kichu and sarath.
//     if (kichu > sarath) {
//         //This means kich is greatest.
//     } else {
//         //This means sarath is the greatest.
//     }
// }

// const greatest_Of_Three_Numbers = (num1, num2, num3) => {

//     let greatest = 0;

//     if ((num1 > num2) && (num1 > num3)) {
//         greatest = num1;
//     }
//     else if ((num2 > num1) && (num2 > num3)) {
//         greatest = num2;
//     }
//     else if ((num3 > num1) && (num3 > num2)) {
//         greatest = num3;
//     }

//     return greatest;
// }

// let num1 = 100
// let num2 = 200
// let num3 = 300
//console.log(greatest_Of_Three_Numbers(num1, num2, num3));



