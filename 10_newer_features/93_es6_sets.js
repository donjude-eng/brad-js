//SETS - Store unique values of any type

const set1 = new Set();


//Add values to set
set1.add(100);
set1.add('A string');
set1.add({name: 'John'});
set1.add(true);


//We can write in this way also
// const set2 = new Set([1, true, 'string']);
// console.log(set2)

//console.log(set1.has(100));

//Get count
//console.log(set1.size);

//Check for values
// console.log(set1.has(100));
// console.log(set1.has(50+50));
// console.log(set1.has({name:'John'}));

//console.log({name: 'John'} ==={name: 'John'})  //What is this? {False}

//console.log(set1.has({name: 'John'}));

//Delete from the set
set1.delete(100);

//console.log(set1);

// ITERATING THROUG SETS


// For ...of
for(let item of set1) {
    //console.log(item);
}

// Foreach Loop
set1.forEach((value) => {
  console.log(value)

})
