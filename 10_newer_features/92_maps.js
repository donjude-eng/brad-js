// Maps = Key-value  paires - can use Any type as a key or value

const map1 = new Map();

//Set Keys

const key1 = 'some string',
      key2 = {},
      key3 = function(){};

// Set map values by key
map1.set(key1, 'Value of key1');
map1.set(key2, 'Value of key2');
map1.set(key3, 'Value of key3');


// // Get values by key
// console.log(map1.get(key1), map1.get(key2), map1.get(key3));

// //Count values
// console.log(map1.size);

// ITERATING MAPS

//Loops using for ...of to get keys and values

// for(let[key, value] of map1) {
//     console.log(`${key} = ${value}`);
// }

// Itertae keys only
// for(let key of map1.keys()) {
//     console.log(key);
// }

// //Iterate values only

// for (let value of map1.values()){
//   console.log(value);
// }

// //Loop forEach
// map1.forEach(function(value,key){
//     console.log(`${key} = ${value}`)
// });

// // CONVERT TO ARRAYS

// // Create an array of key value pairs
// const keyValArr = Array.from(map1);
// console.log(keyValArr)


//Create an array with values
const valArr = Array.from(map1.values());
console.log(valArr);

//Create an array with values
const keyArr = Array.from(map1.keys());
console.log(keyArr);




