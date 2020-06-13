// if (something) {
//   do something
// } else {
//   do something
// }

const id = 100;

// //EQUAL TO
// if (id ==100){
//   console.log('CORRECT');
// } else {
//   console.log ('INCORRECT');
// }

// // NOT EQUAL TO
// if (id !=101){
//   console.log('CORRECT');
// } else {
//   console.log ('INCORRECT');
// }

// // EQUAL TO VALUE & TYPE

// if (id === 100){
//   console.log('CORRECT');
// } else {
//   console.log ('INCORRECT');
// }

// // NOT EQUAL TO VALUE & TYPE

// if (id !== 100){
//   console.log('CORRECT');
// } else {
//   console.log ('INCORRECT');
// }


//Test is undefined
// if ( typeof id !== 'undefined'){
//   console.log (`The ID is ${id}`);
// } else {
//   console.log ('NO ID');
// }

//GREATER THAN OR LESS THAN

// if (id>200){
//   console.log('CORRECT');
// } else {
//   console.log ('INCORRECT');
// }

// if (id<200){
//   console.log('CORRECT');
// } else {
//   console.log ('INCORRECT');
// }

// IF ELSE

const color = 'Yellow';

// if (color==='Red'){
//   console.log ('Color is red');
// } else if (color === 'Blue') {
//   console.log('Color is Blue');
// } else {
//   console.log('Color is not red or blue')
// }

// LOGICAL OPERATORS

const name = 'Steave';
const age =25;

///AND &&
if ( age > 0 && age<12){
  console.log(`The ${name} is a child`)
} else if( age >=13 && age <19){
  console.log (`The ${name} is a teen`)
} else {
  console.log (`The ${name} is an adult`)
}

//OR||

if(age < 16 || age > 65){
  console.log(`The ${name} cannot run in the race`)
} else {
  console.log (`The ${name} registered for the race`)
}

// Ternary Operators

console.log(id ===100 ? 'CORRECT': 'INCORRECT');

//WITHOUT BRACES

if ( id=== 100)
  console.log ('CORRECT');
else
  console.log ('INCORRECT')
