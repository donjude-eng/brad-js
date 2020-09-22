//headfirst_js
// const convertDigitToWords = (number) => {
//     let numberInWords = "";
//     let words = [
//         "zero",
//         "one",
//         "two",
//         "three",
//         "four",
//         "five",
//         "six",
//         "seven",
//         "eight",
//         "nine",
//     ];
//     while (number > 0) {
//         let digit = number % 10;
//         for (let i = 0; i < words.length; i++) {
//             if (i === digit) {
//                 numberInWords = words[i] + " " + numberInWords;
//             }
//         }
//         number = Math.floor(number / 10);
//     }
//     return numberInWords;
// };
// let number = 12387;
// console.log(convertDigitToWords(number))

const convertDigitToWords = (number) => {
    let numberInWords = "";
    let words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    while (number > 0) {
        let digit = number % 10;
        for (let i = 0; i < words.length; i++) {
            if (i === digit) {
                numberInWords = words[i] + " " + numberInWords;
            }
        }
        number = Math.floor(number / 10);
    }
    return numberInWords;
};
let number = 12387;
console.log(convertDigitToWords(number))

const convertDigitToWords = (number) => {
    let numberInWords = "";
    let words = [
        "zero",
        "one",
        "two",
        "three",
        "four",
        "five",
        "six",
        "seven",
        "eight",
        "nine",
    ];
    while (number > 0) {
        let digit = number % 10;
        for (let i = 0; i < words.length; i++) {
            if (i === digit) {
                numberInWords = words[i] + " " + numberInWords;
            }
        }
        number = Math.floor(number / 10);
    }
    return numberInWords;
};
let number = 12387;
console.log(convertDigitToWords(number))

