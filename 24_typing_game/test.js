//Greatest of three numbers

function greatestOfThreeNumbers(num1, num2, num3){
    if(num1 >num2 && num1 > num3){
        return num1;
    }else if (num2 > num3 && num2 > num1) {
        return num2;
    } else if (num3 > num1 && num3 > num2){
        return num3;
    }
    return value;
}

let num1 = 500;
let num2 = 1200;
let num3 = 800;

console.log(greatestOfThreeNumbers(num1, num2, num3))