//Standard function declaration
function quack(num) {
    for (let i = 0; i < num; i++) {
        console.log("Quack!");
    }
}
quack(3);


//Another way but not standard practise
let fly = function (num) {
    for (let i = 0; i < num; i++) {
        console.log("Flying!");
    }
};
fly(3);



// let num1 =1000;
// let num2 = 400;

// function greatTwo(num1, num2) {
//     if (num1 > num2){
//         return num1
//     } else {
//         return num2
//     }
// }

// console.log("Great of two" ,(num1 , num2));




// function quack(num) {
//     for (let i = 0; i < num; i++) {
//         console.log("Quack!");
//     }
// }
// let fly = function (num) {
//     for (let i = 0; i < num; i++) {
//         console.log("Flying!");
//     }
// }

// let superFly = fly;
// superFly(2);
// let superQuack = quack;
// superQuack(3);