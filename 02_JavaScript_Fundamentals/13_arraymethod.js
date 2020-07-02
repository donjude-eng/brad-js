// Create some arrays

const numbers = [43,56,33,23,44,36,5];
const numbers2 = new Array(22,45,33,76,54);
const fruit = ['Apple', 'Banana' , 'Orange' , 'Pear'];
const mixed = [22 , 'Hello' , true , undefined , null , {a:1 , b:1} ,new Date()];



let  val

//Get array length
val = numbers.length;

// //Check if is array
val = Array.isArray(numbers);

//Get single value
val = numbers [3];
val = numbers [0];

//insert into array
numbers[2]= 100;

//Find index of value
val = numbers.indexOf(36);

// //MUTATING ARRAYS
// ///Add on to end of the array
// numbers.push(250);
// ///Add on to the front
// numbers.unshift(120);
// ///Take off from the ene
// numbers.pop();
// ///Take of from the front
// numbers.shift();
// //splice values
// numbers.splice (1,1)
// //Reverse
// numbers.reverse();

//Concatinate array
val = numbers.concat(numbers2);

//Sorting arrays --//Doubt
val = fruit.sort();
val = numbers.sort();

// //Use the compare function
val = numbers.sort(function(x,y){
  return x-y;
});

// //Reverse sort
val = numbers.sort(function(x,y){
  return y-x;
});

//Find
function over50(num){
  return num >50;
}

val = numbers.find(over50);

console.log (numbers);
console.log (val);


