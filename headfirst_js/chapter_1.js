//Excercise 1 (variable and values)

let joke = 'JavaScript walked into a bar....'; //A mistake here on Quotes is not consistant
let toldJoke = false; ///This was written in string
let $punchline = 'Better watch out for those semi-colons.';
let entage = 20; ///There is an additional value in the variable entage
let result
if (toldJoke == true) {
    //console.log($punchline);
} else {
    //console.log(joke);
}

// //Excercise 2 (Variable and Values)

let zipCode = 98104;
let joesFavoriteMovie = "Forbidden Planet"; ///The variable name had a additinal character.
let movieTicket$ = 9;
if (movieTicket$ >= 9) {
    //console.log("Too much!");
} else {
    //console.log("We're going to see " + joesFavoriteMovie);
}

//Excercise 3 (While loop : 1)
let scoops = 5;
while(scoops > 1) {
    //console.log('Another scoop');
    scoops = scoops - 1;
}
//console.log('Life without ice cream isn\'t the same');


let count = 1;
while(count <=100) {
    //console.log(count);
    count = count + 1;
    //count = count -1;
}
//console.log('This is end')

//Excercise 4 (While loop : 2)
let countNum = 1;

while(countNum <= 1000) {
    //console.log(countNum)
    countNum = countNum +1;
}
//console.log('This is the end')



//Excercise 5 ()
let scoops = 5

if (scoops === 5) {
    console.log('Eat faster, the icescream is going to melt');
} else if (scoops === 5) {
    console.log('Ice cream is running low!');
} else if (scoops >= 2) {
    console.log('Going once!');
} else if (scoops == 1) {
    console.log('Going twice!');
} else if (scoops == 0) {
    console.log('Gone!');
} else {
    console.log('still lots icecream left');
}


// //Excersise - 6

if (scoops === 5) {
    console.log('2 #Eat faster, the icescream is going to melt');
}

if (scoops === 5) {
    console.log('2 #Ice cream is running low!');
}
if (scoops >= 2) {
    console.log('2 #Going once!');
}
if (scoops == 1) {
    console.log('2 #Going twice!');
}
if (scoops == 0) {
    console.log('2 #Gone!');
} else {
    console.log('2 #still lots icecream left');
}


//Excercise - 7
// console.log (scoops == 0);

if (true) { //level 1

    if (true) { //level 2
        console.log ("inisde level 1 if, and level 2 if ")

    } else {
        console.log ("inside level 1 if, and level 2 else")

    }
} else { //level 1

    if (true) {
        console.log ("inside level 1 else and level 2 if")
    } else {
        console.log ("inside else and first else block")
    }
}

//Excercise - 8
let setCount = 10;

if (setCount >= 10) {
    console.log('The customer count is correct')

    if (setCount >= 5) {
        console.log('#2Customer count is correct');
    } else {
        console.log('Customer count is incorrect');
    }

} else {

    console.log('Customer count is Wrong')
}

//Exercise 6 (if condition)
var word = 'bottles';
var countBot = 99;

while(countBot > 0) {
    console.log(countBot + ' ' + word + ' of beer on the wall');
    console.log(countBot + ' ' + word + ' of beer ,');
    console.log('Take one down, pass it around');
    countBot = countBot -1;

    if(countBot > 0 ){
        //console.log(countBot + '' + word + ' of beer on the wall');
    } else {
        console.log('No more' + word + 'of beer on the wall')
    }
}

let setCount = 10;

if (setCount >= 10) {
    console.log('The customer count is correct')

    if (setCount >= 5) {
        console.log('#2Customer count is correct');
    } else {
        console.log('Customer count is incorrect');
    }

} else {

    console.log('Customer count is Wrong')
}