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

//Now it’s time to fill in the prototype

function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

ShowDog.prototype = new Dog();
Showdog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
    console.log("Stack");
};
ShowDog.prototype.bait = function () {
    console.log("Bait");
};
ShowDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
};
ShowDog.prototype.groom = function () {
    console.log("Groom");
};


// excercise 2

function Robot(name, year, owner) {
    this.name = name;
    this.year = year;
    this.owner = owner;
}

Robot.prototype.maker = "ObjectsRUs";
Robot.prototype.errorMessage = "All systems go.";
Robot.prototype.reportError = function () {
    console.log(this.name + " says " + this.errorMessage);
};

Robot.prototype.spillWater = function () {
    this.errorMessage = "I appear to have a short circuit!";
};

let robby = new Robot("Robby", 1956, "Dr. Morbius");
let rosie = new Robot("Rosie", 1962, "George Jetson");
rosie.reportError();
robby.reportError();
robby.spillWater();
rosie.reportError();
robby.reportError();
console.log(robby.hasOwnProperty("errorMessage"));
console.log(rosie.hasOwnProperty("errorMessage"));

let fido = new Dog("Fido", "Mixed", 38);

if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}

if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
if (scotty instanceof Dog) {
    console.log("Scotty is a Dog");
}

if (scotty instanceof ShowDog) {
    console.log("Scotty is a ShowDog");
}

console.log("Fido constructor is " + fido.constructor);
console.log("Scotty constructor is " + scotty.constructor);

//Using inheritance to your advantage

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

function ShowDog(name, breed, weight, handler) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.handler = handler;
}

ShowDog.prototype = new Dog();

ShowDog.prototype.league = "Webville";

ShowDog.prototype.stack = function () {
    console.log("Stack");
};

ShowDog.prototype.bait = function () {
    console.log("Bait");
};

ShowDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
};

ShowDog.prototype.groom = function () {
    console.log("Groom");
};

let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
scotty.stack();
scotty.bark();
console.log(scotty.league);
console.log(scotty.species);

// instance of

let fido = new Dog("Fido", "Mixed", 38);
if (fido instanceof Dog) {
    console.log("Fido is a Dog");
}
if (fido instanceof ShowDog) {
    console.log("Fido is a ShowDog");
}

//Test drive the show dog

function ShowDog(name, breed, weight, handler) {
    Dog.call(this, name, breed, weight);
    this.handler = handler;
}

ShowDog.prototype = new Dog();
ShowDog.prototype.constructor = ShowDog;
ShowDog.prototype.league = "Webville";
ShowDog.prototype.stack = function () {
    console.log("Stack");
};

ShowDog.prototype.bait = function () {
    console.log("Bait");
};

ShowDog.prototype.gait = function (kind) {
    console.log(kind + "ing");
};

ShowDog.prototype.groom = function () {
    console.log("Groom");
};

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);
let scotty = new ShowDog("Scotty", "Scottish Terrier", 15, "Cookie");
let beatrice = new ShowDog("Beatrice", "Pomeranian", 5, "Hamilton");
fido.bark();
fluffy.bark();
spot.bark();
scotty.bark();
beatrice.bark();
scotty.gait("Walk");
beatrice.groom();