let randomLoc = Math.floor(Math.random() * 5);

let location1 = randomLoc;
let location2 = location1 + 1;
let location3 =  location2 + 1;

let guess;
let guesses = 0;
let hits = 0;
let isSunk = false;



while (isSunk === false) {
    guess = prompt('Ready , aim , fire! (Enter a number from 0-6):');

    if (guess < 0 || guess > 6) {
        alert('Please nenter a valid cell number!');
    } else {
        guesses = guesses + 1;

        if (guess == location1 || guess == location2 || guess == location3) {
            alert('Hit!');
            hits = hits + 1;
            if (hits == 3) {
                isSunk = true;
                alert("You sank my battleship!");
            }
        } else {
            alert('Miss');
        }
    }
};


let stats = ' You took ' + guesses + ' guesses to sink the battleship,' + ' which means yourshooting accuracy was ' + (3 / guesses);
alert(stats);




if (price < 200 || price > 600) {
    alert("Price is too low or too high! Don't buy the gadget.");
} else {
    alert("Price is right! Buy the gadget.");
}

if (price >= 200 || price <= 600) {
    alert("Price is right! Buy the gadget.");
} else {
    alert("Price is too low or too high! Don't buy the gadget.");
}

//Say we need to test that an item is inStock AND onSale. We could do that
//like this:
if(inStock == true) {
    if (onSale == true) {
        //Sounds like a bargain!
        alert('Buy buy buy!')
    }
}


//Here’s our AND operator. With AND this combined conditional
//is true only if the first part AND the second part are true.

if (inStock == true && onSale == true) {
    //sounds like a bargain!
    alert('Buy buy buy!');
}

if(inStock == true && (onSale == true || proce < 60)) {
    //Sounds like a bargain!
    alert('buy buy buy!');
}

var temp = 81;
var willRain = true;
var humid = (temp > 80 && willRain == true);
//true and true = true

// //Answer is True

var guess = 6;
var isInvalid = (guess >= 0 && guess <= 6 );
//false and true =
//Answer  is True

var kB = 1287;
var tooBig = (kB > 1000);
var urgent = true;
var sendFile =(urgent == true || tooBig == false);
true == true ||true == false
true == false
true

var keyPressed ='N';
var points = 142;
var level;
if(keyPressed =='Y' || (points > 100  && points < 200)) {
    level = 2;
} else {
    level = 1;
}

//false or true and true
level = 2


