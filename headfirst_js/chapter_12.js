// //Creating objects w ith object literals

// // let taxi = {
// //     make: "Webville Motors",
// //     model: "Taxi",
// //     year: 1955,
// //     color: "yellow",
// //     passengers: 4,
// //     convertible: false,
// //     mileage: 281341,
// //     started: false,

// //     start: function () { this.started = true; },
// //     stop: function () { this.started = false; },
// //     drive: function {
// //         // drive code here
// //     }
// // };



// // function Dog(name, breed, weight) {
// //     this.name = name;
// //     this.breed = breed;
// //     this.weight = weight;
// //     // return name;
// // }

// // //Duck constructor
// // let duck = {
// //     type: "redhead",
// //     canFly: true
// // }

// // function Duck(type, canFly) {
// //     this.type = type;
// //     this.canFly = canfly;
// // }

// // //How constructors work
// // let fido = new Dog("Fido", "Mixed", 38);

// // function Dog(name, breed, weight) {
// //     this.name = name;
// //     this.breed = breed;
// //     this.weight = weight;
// // }


// //Sample problem excercise
// // function widget(partNo, size) {
// //     let this.no = partNo;
// //     let this.breed = size;
// // }
// // function FormFactor(material, widget) {
// //     this.material = material,
// //         this.widget = widget,
// //     return this;
// // }
// // let widgetA = widget(100, "large");
// // let widgetB = new widget(101, "small");
// // let formFactorA = newFormFactor("plastic", widgetA);
// // let formFactorB = new ForumFactor("metal", widgetB);


// ////////You can put methods into constructors as well
// let dog = {
//     name: "Fido",
//     breed: "Mixed",
//     weight: 38
// };

// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;

//     this.bark = function () {
//         if (this.weight > 25) {
//             console.log(this.name + " says Woof!");
//         } else {
//             console.log(this.name + " says Yip!");
//         }
//     };

// }

// let fido = new Dog("Fido", "Mixed", 38);
// let fluffy = new Dog("Fluffy", "Poodle", 30);
// let spot = new Dog("Spot", "Chihuahua", 10);
// let dogs = [fido, fluffy, spot];
// for (let i = 0; i < dogs.length; i++) {
//     dogs[i].bark();
// }

// /Let’s test drive some new cars
let chevy = new Car("Chevy", "Bel Air", 1957, "red", 2, false, 1021);
let cadi = new Car("GM", "Cadillac", 1955, "tan", 5, false, 12892);
let taxi = new Car("Webville Motors", "Taxi", 1955, "yellow", 4, false, 281341);
let fiat = new Car("Fiat", "500", 1957, "Medium Blue", 2, false, 88000);

let testCar = new Car("Webville Motors", "Test Car", 2014, "marine", 2, true, 21);

let cars = [chevy, cadi, taxi, fiat, testCar];
for (let i = 0; i < cars.length; i++) {
    cars[i].start();
    cars[i].drive();
    cars[i].drive();
    cars[i].stop();
}

function Car(make, model, year, color, passengers, convertible, mileage) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.color = color;
    this.passengers = passengers;
    this.convertible = convertible;
    this.mileage = mileage;
    this.started = false;
    this.start = function () {
        this.started = true;
    };
    //rest of the methods here
}