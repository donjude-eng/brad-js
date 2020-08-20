//Array container five words
//One function name "search"
//If the function is true
//If it true print  times.

let arr = ["cat", "mat", "cow", "ass", "fun", "boss"]
function search(nameStr) {
    for (let i = 0; i < arr.length; i++) {
        //console.log(arr[i]);

        if (arr[i] === nameStr) {
            return true;
        } else {
            return false;
        }
    }
}

let word = search("hundred");
//console.log(word);

for (let i = word; i < 100; i++) {
    //console.log(word);
};

//1. Write a function to print all the elements of an array.

// let arr1 = [10, 12, 14, 16, 18, 20, 25];

// function elementOfArray(number){
//     //console.log(number);
//     for (let i = 0; i < arr1.length; i++){
//         //console.log(arr1[i]);
//     }
// }
// elementOfArray(arr1);

//2. Write a function to print all the elements whose index is a multiple of 2.

let arr2 = [2, 4, 10, 2, 9, 8, 12, 15, 16];

function multipleOfTwo(number) {
    for (let i = 0; i < arr2.length; i++) {
        if (arr2[i] % 2 === 0) {
            //console.log("Index Of", i);
        }
    }
}
multipleOfTwo(arr2);

//3. Write a function to replace all the elements of an array with 0>?

let arr3 = [12, 15, 8, 18, 19, 15, 14, 12, 10];

function replaceElemZero(number) {
    for (let i = 0; i < arr3.length; i++) {
        arr3[i] = arr3[i] * 0;
        //console.log(arr3);
    }
    return arr3;
}

//console.log(replaceElemZero(arr3));

//4. Write a function to find the sum of all elements of an array

let arr4 = [10, 12, 15, 25, 35, 45, 65]

function sumOfElementArray(number) {
    let sum = 0;
    for (let i = 0; i < number.length; i++) {
        sum = sum + number[i];
    }
    return sum;

}

//console.log(sumOfElementArray(arr4));

//5. Write a function to print all the elements whose value is a multiple of 3 and multiple of 5.

let arr5 = [10, 12, 15, 25, 18, 14, 12, 9, 11];

function multipleOf3And5(number) {
    for (let i = 0; i < number.length; i++) {
        if (number[i] % 3 === 0 && number[i] % 5 === 0) {
            //console.log(number[i])
        }
    }
}

multipleOf3And5(arr5);

// 6: Write a function to multiply elements of an array to itself ( find the square of each elements in the array)

//7. Declare 2 arrays of the same size and print the values of both using one for loop
let sampleArray1 = [10, 12, 14, 25, 35, 55, 18];
let sampleArray2 = [10, 18, 17, 12, 45, 25, 45];

function valueOfArray(arr1, arr2) {
    //console.log(arr1, arr2);
    for (let i = 0; i < arr1.length; i++) {
        if (sampleArray1[i] === sampleArray2[i]) {
            console.log(sampleArray1[i]);
            console.log(sampleArray2[i]);
        }

    }

}
valueOfArray(sampleArray1, sampleArray2);

//8. Write a program to compare the current item in the array to the next item and print if they are equal or not

//let sampleArray1 = [10, 18, 17, 12, 45, 25, 45];
//index   0    1   2  3  4   5   6

function equalOrNot(number) {
    for (let i = 0; i < number.length; i++) {
        //console.log(number[i]);

        if (number[i] === number[i - 1]) {
            console.log(sampleArray1[i], sampleArray1[i] - 1)
        }
    }

}

//conequalOrNot(sampleArray1);