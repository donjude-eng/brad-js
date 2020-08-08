// let scores = [60, 50, 60, 58, 54, 54, 58, 50, 52, 54];

// let solution2 = scores[2];
// alert("Solution 2 produced " + solution2 + " bubbles.");

// ///Second solution
// let flavors = ["vanilla", "butterscotch", "lavender", "choco", "", "late", "cookie dough"];
// flavors[3] = "Vanilla choclate cream"
// let flavorsOfTheDay = flavors[3];
// console.log(flavorsOfTheDay)

// let arLen = flavors.length;
// console.log(arLen);

// ///Sharpen yoyr pencil
// node let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// let last = products[3];
// let recent = products[last];

// //Code test

// let scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
// let output;

// let i = 0;
// while (i > scores.length) {
//     output = "Bubble solution #" + i + " score: " + scores[i];
//     console.log(output);
//     i = i + 1;
// }

// let bubbleScores = scores.length;
// alert(bubbleScores)

// let highestSCore = scores[11];
// alert(highestSCore)

// let solHighestScore = scores.length[11];
// alert(solHighestScore);

//Solution in while loop
// let products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// let hasBubbleGum = [false, false, false, true];

// let i = 0;

// while (i < hasBubbleGum.length) {
//     if (hasBubbleGum[i]) {
//         console.log(products[i] + "Contains bubble gum")
//     }
//     i = i +1;

// }

// //For loop
// for (var k = 0; k < scores.length; k = k + 1) {

//     output = "Bubble solution #" + k + " score: " + scores[k];

//     console.log(output);
// }

//BUBBLEgum in for loop

// var products = ["Choo Choo Chocolate", "Icy Mint", "Cake Batter", "Bubblegum"];
// var hasBubbleGum = [false, false, false, true];
// for (let i = 0 ; i > hasBubbleGum.length ; i = i + 1) {
//     if (hasBubbleGum[i]) {
//         console.log(products[i] + "Contains bubble gum")
//     }
// }


// let name = ['Don' , 'Akhil', 'Arun'];
// let age = [12 , 21 , 15 , 21]

// for (i = 0; i < age.length; i++) {
//     console.log(name[1])
// }

// let scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
// let output;

// for (i = 0 ; i < scores.length ; i = i + 1){
//     //console.log(scores.length)
//     output = "Bubble solution" + i + " score" + scores[i];
//     console.log(output);
// }

//To get the high score in the Question
// let scores = [60, 50, 60, 58, 54, 54,
//     58, 50, 52, 54, 48, 69,
//     34, 55, 51, 52, 44, 51,
//     69, 64, 66, 55, 52, 61,
//     46, 31, 57, 52, 44, 18,
//     41, 53, 55, 61, 51, 44];
// let output;

// for (i = 0 ; i < scores.length ; i = i + 1){
//     //console.log(scores.length)
//     output = "Bubble solution" + i + " score" + scores[i];

//     console.log(output);
// }


//Loop iteration through an array;
// let scores = [ 60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44 ];

// let highScore = 0;
// let output;
// for (i = 0 ; i < scores.length; i++) {
//     output = "Bubble solution" + i + " score" + scores[i];
//     //console.log(output);

//     if (scores [i] > highScore) {
//         highScore = scores [i];
//     }
// }
//console.log("Bubbles tests: " + scores.length);
//console.log("Highest bubble score: " + highScore);

// let bestSolutions = [];
// for (var i = 0; i < scores.length; i++) {
//     if (scores[i] == highScore) {
//         bestSolutions.push(i);
//     }
// }
// //console.log("Solutions with the highest score: " + bestSolutions);


////Adding array the final ? I did'nt understand this problem.

//solution required ;
// Print all the index and values in the array.
// Print the length of the array.
// Print the highest score in the array.
// Print the highest score carried index.

let scores = [ 60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44 ];

function printAndGetHighScore(scores) {
    let highScore = 0;
    let output;
    for (let i = 0; i < scores.length; i++) {
        output = "Bubble solution #" + i + " score: " + scores[i];
        console.log(output);

        if (scores[i] > highScore) {
            highScore = scores[i];
        }
    }
    return highScore;
}

function getBestResults(scores, highScore) {
    let bestSolutions = [];
    for (let i = 0; i < scores.length; i++) {
        if (scores[i] == highScore) {
            bestSolutions.push(i);
        }
    }
    return bestSolutions;
}

let highScore = printAndGetHighScore(scores);
console.log("Bubbles tests: " + scores.length);
console.log("Highest bubble score: " + highScore);
let bestSolutions = [];
for (let i = 0; i < scores.length; i++) {
    if (scores[i] == highScore) {
        bestSolutions.push(i);
    }
}
console.log("Solutions with the highest score: " + bestSolutions);


// --------------------------------------------------------------------

///Trying the problem --- Tasks
//solution required ;
// Print all the index and values in the array.
// Print the length of the array.
// Print the highest score in the array.
// Print the highest score carried index.


//Task - 1:
let scores = [ 60, 50, 60, 58, 54, 54, 58, 50, 52, 54, 48, 69, 34, 55, 51, 52, 44, 51, 69, 64, 66, 55, 52, 61, 46, 31, 57, 52, 44, 18, 41, 53, 55, 61, 51, 44 ];

let cost1 = [50, 60, 58, 54, 51, 52, 44, 51, 69];
let cost2 = [52, 44, 18, 41, 53, 55, 61, 51, 44];

for (i = 0; i < cost1.length; i = i + 1 ){
    console.log('The index of cost1#' + ' ' + i + ' '+ 'Value of' + cost1[i]);
    console.log('The index of cost2#' + ' ' + i + ' '+ 'Value of' + cost2[i]);
    console.log('The sum of indexes' + parseInt(cost1[i] + cost2[i]));
}

for (i = 0; i < cost1.length; i++) {
    console.log('The index of the cost' + ' ' + i + ' ' + 'The value of the cost' + ' '+ cost1[i])
    console.log('The index of the cost' + ' ' + i + ' ' + 'The value of the cost' +' ' + cost2[i])
    console.log('The sum of multiply' + ' ' + (cost1[i] * cost2[i]))
}


//Task 2:
//Array length
// Array elements need to add.
let cost1 = [50, 60, 58, 54, 51, 52, 44, 51, 69];
let cost2 = [52, 44, 18, 41, 53, 55, 61, 51, 44];
//Index       [0   1   2   3   4   5   6   7   8]

for (let i = cost1.length - 1; i >=0; i--) {
    console.log('The  index of cost' + ' ' + i + ' ' + 'Value of cost' + ' ' + cost1[i]);
    console.log('The index of cost' + ' ' + i + ' ' + 'Value of cost' + ' ' + cost2[i]);
    console.log('The sum of two cost' + parseInt(cost1[i] + cost2[i]));
}

for (let i = cost1.length -1; i >=0; i--){
    console.log('The  index of cost' + ' ' + i + ' ' + 'Value of cost' + ' ' + cost1[i]);
    console.log('The index of cost' + ' ' + i + ' ' + 'Value of cost' + ' ' + cost2[i]);
    console.log('The sum of multiply' + ' ' + cost1[i] * cost2[i]);
}


//Task 3:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Index  =   [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for (let i = number.length - 1; i >=0; i = i - 1) {
    console.log('The index of number' + ' ' + i + ' ' + 'The value of' + number[i]);
}

//Task 4:
for (i = 0; i < number.length; i += 2){
    console.log(number[i]);
}

for (i = 1; i < number.length; i = i + 2) {
    console.log(number[i]);
}


//Task 5:
for (i = 2; i < number.length; i +=3){
    console.log(number[i]);
}

//Task 6:
for (i = 4 ; i < number.length; i +=5){
    console.log(number[i]);
}

//Task 7:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    Index  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

for ( i = 0; i < number.length; i = i + 1){
    //console.log(number[i]);

    let x = number[i] % 2;
    console.log(x);

    if ( x===0) {
        //console.log(number[i])
        console.log('Even number')
    } else {
        console.log('Odd number')
    }
    // console.log(number[1])
}


//Task 8:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    //Index  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    //Output = 3 ,6 ,9

for (i = 0; i < number.length; i = i + 1) {
    //console.log(number[i]);

    //let x = number[i] % 3;
    //console.log('Reminder' , x);

    if (number[i] % 3 === 0) {
        console.log(number[i], 'Divisible by three')
    } else {
        console.log(number[i], 'Not divisible')
    }

}

//Task 9:

const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    Index  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//Output = 55

let sum = 0;
for ( let i = 0; i < number.length; i = i + 1) {
    //console.log(number[i])

    sum = sum + number[i];
    console.log(sum);

}

//Task 10:
const number = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
    //Index  = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

    //Output - Print the sum of all Even Numbers.
let sum = 0;

for (i = 0; i < number.length; i = i + 1){
    //console.log(number[i]);
    if(number[i] % 2 === 0){
        sum = sum + number[i];
        console.log('Even number');
    } else {
        console.log('Odd number');
    }
}
console.log(sum);

//Task 11:
//Initialize an array 1 to 10;
//Add 1 to each elements.
//Find qube of each element.

const arrval = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < arrval.length; i = i + 1) {
    console.log(number[i]);
}


//The last problem
function getMostCostEffectiveSolution(scores, costs, highscore) {
    var cost = 100;
    var index;
    for (var i = 0; i < scores.length; i++) {
        if (scores[i] == highscore) {
            if (cost > costs[i]) {
                index = i;
                cost = costs[i];
            }
        }
    }
    return index;
}
var mostCostEffective = getMostCostEffectiveSolution(scores, costs, highScore);
console.log("Bubble Solution #" + mostCostEffective + " is the most cost effective");