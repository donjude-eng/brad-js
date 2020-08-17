// //Function to find the factorial of a number?

// function factorialOfNumber(number) {

//     let product = 1;

//     // for (let i = number; i > 0; i --) {
//     //     product = product * i;//5
//     //     //console.log(product);

//     // }
//     // return product;

//     let i = number;

//     while (number > 0){
//         //console.log("Hi", product);
//         product = product * number;
//         number = number - 1;
//     }
//     return product;


// }
// console.log(factorialOfNumber(5));

///Task Pass each element of an array through a function and print the factorial of the number.

// let arr = [5, 6, 7, 8, 9, 10];

// function numberfactorial(num){
//     //console.log(num)
//     //let i = num;
//     let products = 1;
//     while(num > 0) {
//       products = products * num;
//       num = num - 1;
//     }
//     return products;

// }

// for (let i = 0; i < arr.length; i++){
//     console.log(numberfactorial(arr[i]));//5
// }

///Array to the function
let arr = [5, 6, 7, 8, 9, 5];
//index   0   1  2  3  4   5

function arrayfactorial(num) {

    for (let i = 0; i < num.length; i++) {
        let product = 1;
        let x = num[i];
        //console.log(x);
        while (x > 0) {
            product = product * x;
            x = x - 1;
        }
        console.log(product);
    }

}

arrayfactorial(arr);