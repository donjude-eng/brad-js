// //Javascript Functions;

// var dogName = 'rover'
// var dogweight = 23;
// if (dogweight > 20) {
//     console.log(dogName + ' says WOOF WOOF');
// } else {
//     console.log(dogName + ' says woof woof');
// }

// dogName = 'spot';
// dogweight = 13;
// if (dogweight > 20) {
//     console.log(dogName + 'says WOOF WOOF')
// } else {
//     console.log(dogName + ' says woof woof');
// }

// dogName = 'spike';
// dogWeight = 53;
// if (dogWeight > 20) {
// console.log(dogName + ' says WOOF WOOF');
// } else {
// console.log(dogName + ' says woof woof');
// }
// dogName = 'lady';
// dogWeight = 17;
// if (dogWeight > 20) {
// console.log(dogName + ' says WOOF WOOF');
// } else {
// console.log(dogName + ' says woof woof');
// }

// ////Function
// function bark(name , weight) {
//     if (weight > 20) {
//         console.log(name + ' says WOOF WOOF');
//     } else {
//         console.log(name + ' says woof woof');
//     }
// }

// bark('rover' , 23);
// bark('spot'  , 13);
// bark('spike' , 53);
// bark('lady'  , 17);
// bark("scottie", -1);
// bark("juno", 20);



// //Code magnet
// function whatShallWear(temp) {
//     if (temp < 60) {
//         console.log('Wear a jacket');
//     } else if (temp < 70) {
//         console.log('Wear a sweater');
//     } else {
//         console.log('wear t-shirt');
//     }
// }

// whatShallWear(50)
// whatShallWear(80)
// whatShallWear(60)



// //Argument and parameters


// saveMyProfile('krissy', 1991, 3.81, false);

// function saveMyProfile(name, birthday, GPA, newuser) {
//     if (birthday >= 2004) {
//         // code for handling a child
//     }
//     // rest of code for this function here
// }


// //Pass any JavaScript value as an argument.
// //Each argument is passed to
// //its corresponding parameter
// //in the function.
// //And each parameter acts as a
// //variable within the function.


// //Can you explain this funstion
// function doIt(count) {
//     count = 2;
// }
// let test = 1;
// doIt(test);
// console.log(test);


// ///Excersise

// function dogYears(dogName, age) {
//     let years = age * 7;
//     console.log(dogName + 'is ' + years + 'years old');
// }
// let myDog = "Fido";
// dogYears(myDog, 4);
// function makeTea(cups, tea) {
//     console.log('Brewing ' + cups + 'cups of ' + tea);
// }

// let guests = 3;
// makeTea(guests, 'Earl Grey');
// function secret() {
//     console.log('The secret of life is 42');
// }

// secret();
// function speak(kind) {
//     let defaultSound = '';
//     if (kind == 'dog') {
//         alert('Woof');
//     } else if (kind == 'cat') {
//         alert('Meow');
//     } else {
//         alert(defaultSound);
//     }
// }

// let pet = prompt('Enter a type of pet: ');
// speak(pet);


// // ///Weird Functions

// // //EXPERIMENT #1: what happens when we
// // //don’t pass enough arguments?
// function makeTea(cups, tea) {
//     console.log('Brewing ' + cups + ' cups of ' + tea);
// }
// makeTea(3);

// // //Return functions.
// function bake(degrees) {
//     var message;

//     if (degrees > 500) {
//         message = "I'm not a nuclear reactor!";
//     } else if (degrees < 100) {
//         message = "I'm not a refrigerator!";
//     } else {
//         message = "That's a very comfortable temperature for me.";
//         setMode('bake');
//         setTemp(degrees);
//     }
//     return message;
// }

// let status = bake(300);

// // //Tracing through a function with a return statement


// // //Can you explain this function
// var radius = 5.2;
// var theArea = calculateArea(radius);

// function calculateArea(r) {
//     var area;
//     if (r <= 0) {
//         return 0;
//     } else {
//         area = Math.PI * r * r;
//         return area;
//     }
// }

// console.log("The area is: " + theArea);

// // //Global variables
// var avatar = 'generic';
// var skill = 1.0;
// var pointsPerLevel = 1000;
// var userPoints = 2008;


// // //Local variable
// function getAvatar(points) {
//     var level = points / pointsPerLevel;
//     if (level == 0) {
//         return 'Teddy bear';
//     } else if (level == 1) {
//         return 'Cat';
//     } else if (level >= 2) {
//         return 'Gorilla';
//     }
// }

// //Function Global
// function updatePoints(bonus, newPoints) {
//     var i = 0;
//     var skill = 'Learn';
//     while (i < bonus) {
//         newPoints = newPoints + skill * bonus;
//         i = i + 1;
//     }
//     return newPoints + userPoints;
// }

// userPoints = updatePoints(2, 100);
// avatar = getAvatar(2112);

// ///var beanCounter = 10;

// //We’ve got a global and a local!
// function getNumberOfItems(ordertype) {
//     var beanCounter = 0;
//     if (ordertype == 'order') {
//         // do some stuff with beanCounter...
//     }
//     return beanCounter;
// }


// var balance = 10500;
// var cameraOn = true;
// function steal(balance, amount) {
//     cameraOn = false;
//     if (amount < balance) {
//         balance = balance - amount;
//     }
//     return amount;
//     cameraOn = true;
// }
// var amount = steal(balance, 1250);
// console.log("Criminal: you stole " + amount + "!");

//////////

let catName = "rover";
let catWeight = 19;

if (catWeight > 20) {
    console.log(catName + " says MEW MEW");
} else {
    console.log(catName + " says mew mew");
}

if (catWeight <= 20) {
    console.log(catName + " says mew mew");
} else {
    console.log(catName + " says MEW MEW");
}

if (!(catWeight <= 20)) {
    console.log(catName + " says MEW MEW");
} else {
    console.log(catName + " says mew mew");
}