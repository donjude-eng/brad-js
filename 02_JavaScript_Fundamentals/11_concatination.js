const firstName = 'william';
const lastName = 'Johnson';
const age = 36;
const str = 'Helle there my name is Brad!';
const tags = 'web design, web development, programming';

let val;

val = firstName + lastName;

// //Concatenation
// val = firstName+ ' '+ lastName;

// //Append

// val = 'Brad';
// val += 'Traversy';

// val = 'Hello, my name is' +firstName +'and I am '+ age

// //Escaping
// val = 'That\'s awesome, I can\'t wait';

// //Length
// val = firstName.length;

// //concat

// val = firstName.concat(' ', lastName);

// //Change case
// val = firstName.toUpperCase();
// val = firstName.toLowerCase();

// val = firstName[0];

// //indexOf()
// val = firstName.indexOf('1');
// val = firstName.lastIndexOf('1');

//chartAt()
val = firstName.charAt('2');

//Get last char
val = firstName.charAt(firstName.length -3);

//substring()
val = firstName.substring(0,4);

//slice
val = firstName.slice (0 ,4);
val = firstName.slice (-3);

//split
val = str.split(' ');
val = tags.split (',');

//replace()
val = str.replace ('Brad', 'Jack');

//includes

val = str.includes ('Hello');

console.log(val);

