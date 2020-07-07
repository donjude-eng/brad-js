//string

// const name1 = 'Jeff';
// const name2 = new String ('Jeff');

// //name2.foo = 'bar';
// // console.log(name2);

// console.log (typeof name2);

// if (name2 === 'Jeff'){
//   console.log ('YES');
// } else{
//   console.log ('NO');
// }

// Number
const num1 = 5;
const num2 = new Number(5);

// Boolean
const bool1 =true;
const bool2 = new Boolean(true);

console.log ( typeof bool2)

// Function
const getSum1 = function (x,y){
  return x+y;
}

const getSum2 = new Function ('x' , 'y' , 'return 2 + 1');
console.log (getSum2(3,1));

// Object
const john1 = {name: "Don"};
const john2 = new Object ({name: "John"});
console.log (john2)

// Arrays
const arr1 = [1,2,3,4];
const arr2 = new Array (5,6,7,8);

console.log (arr2)

//Regular Expression

const reg1 = /\w+/;
const reg2 = new RegExp ('\\w+');

console.log (reg2);