//FUNCTIONS DECLARATIONS

function greet (firstName = 'John' , lastName = 'Don'){
  return 'Hello ' + firstName + ' ' + lastName;
}

// console.log (greet());


//FUNCTION EXPRESSIONS

const square = function(x = 3) {
  return x*x;
};

// console.log(square(8));


//IMMIADIATELY INVOTABLE FUNCTION EXPREESIONS - IIFEs

(function(name){
  console.log ('Hello' + name);
})(' BRAD');

//PROPERTY METHODS
const todo = {
  add: function(){
    console.log ('ADD todo...');
  },
  edit: function (id){
    console.log (`Edit todo ${id}`);
  }
}

todo.delete = function (){
  console.log ('Delete todo...');
}

todo.add();
todo.edit(22);
todo.delete();