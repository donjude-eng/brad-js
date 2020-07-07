// const brad = {
//   name : 'Brad',
//   age : 30
// }

// console.log (brad)

// console.log (brad.age);


// Person constructor

function Person (name , dob){
  this.name = name;
  //this.age = age;
  this.birthday = new Date (dob);
  // console.log (this);
  this.calculateAge = function(){
    const diff = Date.now () - this.birthday.getTime();
    const ageDate = new Date(diff);
    return Math.abs (ageDate.getUTCFullYear() - 1970);
  }

}

// const brad  = new Person('Brad' , 36);
// const john = new Person ('John' , 30);

// console.log (john.age);

const don = new Person ('Don' , '9-10-1996');
console.log (don.calculateAge());