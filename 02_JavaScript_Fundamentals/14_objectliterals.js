const person = {
  firstName : 'Steave',
  lastName : 'smith',
  age: '30',
  email: 'steave123@gmail.com',
  hobbies : ['music', 'sports'],
  address: {
    city:'Miami',
    state: 'FL'
  },
  getBirthYear: function(){
    return 1988 - this.age;
  }


}

let val;

val = person;
//Get specific value
val = person.firstName;
val = person['lastName'];
val = person['age'];
val = person['email']
val = person.hobbies[1];
val = person.address['city'];
val = person.getBirthYear();

console.log (val);


///This is for loop ---Doubt

const people = [
  {name: 'John' , age:30},
  {name: 'Mike', age: 23},
  {name: 'Nancy', age:25},

];

for(let i=0; i<people.length; i++){
  console.log(people[i].name);

}

