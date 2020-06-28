// const sayHello = function(){
//     console.log ('Hello');
// }

//const sayHello = () => {
//     console.log ('Hello')
// }


// One line function does not need braces
// Const sayHello = () => console.log ('Hello');


// One line returns
// const sayHello =() => 'Hello';


//same a above
// const sayHello = function () {
//     return 'Hello';
// }


//Return Object
//const sayHello = ()=> ({msg:'Hello});



//Single parameter does not need paranthesis ? Why
// const sayHello = name => console.log (`Hello ${name}`)


//Mutliple parameters shiuld be in parenthisis
// const sayHello = (firstName ,lastName) => console.log (`Hello ${firstName} ${lastName}`);

// sayHello('Brad', 'traversy');

const users = ['Nathan' , 'John' , 'Williams'];

// const nameLengths = users.map (function (name){
//  return name.length ////Please explain what is map?

// })

// Shorter
// const nameLengths = users.map ((name) => {
//     return name.length
// })


// Shortest
const nameLengths = users.map(name =>name.lengths);

console.log(nameLengths);