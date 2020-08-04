//A trip to Objectville

let chevy = {

    make : "Chevy",
    model: "Bel Air",
    year : 1957,
    color: 'red',
    passengers: 2,
    convertible: false,
    mileage :1021,
};


let cadi = {
    make : "Cadilac",
    model: "Gm Cadiilac",
    yera : 1995,
    color: "Tan",
    passangers : "5",
    convertible : false,
    mileage : 120,
    seats : "Big bucket"
};
//console.log(cadi);

let fiat = {
    make: "Fiat",
    model: "500",
    year: 1957,
    color: "Medium Blue",
    passengers: 2,
    convertible: false,
    mileage: 88000
};

let miles = fiat.mileage;
if (miles > 200) {
    //console.log("Buy it")
} else {
    //console.log("Ignore getting it")
}

let mile = fiat.mileage;
fiat.mileage = 1000;
//console.log(mile)

//This will add new property to the object
fiat.needswashing = true;
//console.log( typeof(fiat));

let dog = {
    name: "Fido",
    weight: 20.2,
    age: 4,
    breed: "mixed",
    activity: "Fetch balls"
};


let bark;
if (dog.weight > 20) {
    bark = "WOOF WOOF";
} else {
    bark = "woof woof";
}

let speak = dog.name + " Says" + " "+ bark +" when he wants to " + dog.activity;
console.log(speak)

let taxi = {
    make: "Webville Motors",
    model: "Taxi",
    year: 1955,
    color: "yellow",
    passengers: 4,
    convertible: false,
    mileage: 281341
}


function prequal(car) {
    if (car.mileage > 10000) {
        return false;
    } else if (car.year > 1960) {
        return false;
    }
    return true;
};

let worthALook = prequal(taxi);
if (worthALook) {
    console.log("You gotta check out this " + taxi.make + " " + taxi.model);
} else {
    console.log("You should really pass on the " + taxi.make + " " + taxi.model);
}



// let fiat = {
//     // other properties and methods here...
//     drive: function () {
//         if (this.started) {
//             if (this.fuel > 0) {
//                 alert(this.make + " " +
//                     this.model + " goes zoom zoom!");
//                 this.fuel = this.fuel - 1;
//             } else {
//                 alert("Uh oh, out of fuel.");
//                 this.stop();
//             }
//         } else {
//             alert("You need to start the engine first.");
//         }
//     },
//     addFuel: function (amount) {
//         this.fuel = this.fuel + amount;
//     }
// };
