
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




function sumOfTwoNumber(num1, num2) {
    let sum;
    sum = num1 + num2;
    //console.log(sum);
    return sum;
}

//console.log(sumOfTwoNumber(10, 15));


let arr = [10, 25, 35, 45, 55, 65];
  //index arr[i]   0  1   2  3  4  5

function sumOfArray(number){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum = sum + arr[i];

    }
    return sum;
}

let sum = sumOfArray(arr);
//console.log(sum);


///elemt 0

let arr2 = [10, 15, 0, 20, 45, 12, 0, 11, 12, 52];

const elemZeroInarray = (numberElement) => {
    //console.log(numberElement);
    for (let i = 0; i < numberElement.length; i = i + 1){
        if (numberElement[i] === 0){
            //console.log(i);
        }
    }

}


elemZeroInarray(arr2);

//factorial of a number

function factNumber(number){
    let product = 1;

    for(let i = number; number > 0 ; number--){
        product = product * number;

    }
    return product;

}

//console.log(factNumber(5));

