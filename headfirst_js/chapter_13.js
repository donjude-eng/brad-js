function Dog(name, breed, weight) {
    this.name = name;
    this.breed = breed;
    this.weight = weight;
    this.bark = function () {
        if (this.weight > 25) {
            alert(this.name + " says Woof!");
        } else {
            alert(this.name + " says Yip!");
        }
    };
}

let fido = new Dog("Fido", "Mixed", 38);
let fluffy = new Dog("Fluffy", "Poodle", 30);
let spot = new Dog("Spot", "Chihuahua", 10);