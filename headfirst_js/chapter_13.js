function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            console.log(this.name + " says Woof!");
        } else {
            console.log(this.name + " says Yip!");
        }
    };
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
console.log(fido.bark());

//How to set up the prototype
function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
}

Dog.prototype.species = "Canine";
Dog.prototype.bark = function () {
    if (this.weight > 25) {
        console.log(this.name + " says Woof!");
    } else {
        console.log(this.name + " says Yip!");
    }
};
Dog.prototype.run = function () {
    console.log("Run!");
};
Dog.prototype.wag = function () {
    console.log("Wag!");
};

//Test drive the prototype with some dogs
// function Dog(name, breed, weight) {
//     this.name = name;
//     this.breed = breed;
//     this.weight = weight;
// }
// Dog.prototype.species = "Canine";
// Dog.prototype.bark = function () {
//     if (this.weight > 25) {
//         console.log(this.name + " says Woof!");
//     } else {
//         console.log(this.name + " says Yip!");
//     }
// };
// Dog.prototype.run = function () {
//     console.log("Run!");
// };
// Dog.prototype.wag = function () {
//     console.log("Wag!");
// };
// var fido = new Dog("Fido", "Mixed", 38);
// var fluffy = new Dog("Fluffy", "Poodle", 30);
// var spot = new Dog("Spot", "Chihuahua", 10);
// fido.bark();
// fido.run();
// fido.wag();
// fluffy.bark();
// fluffy.run();
// fluffy.wag();
// spot.bark();
// spot.run();
// spot.wag();