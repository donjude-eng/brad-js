let access = document.getElementById("code9");
let code = access.innerHTML;
code = code + " midnight";
//alert(code);


let planet = document.getElementById("greenplanet");
let planet = document.getElementById("redplanet");
let planet = document.getElementById("blueplanet");


planet.innerHTML = "Red Alert : hit by phaser fire!";

console.log(planet.innerHTML);

let scoop = document.getElementById("greenplanet");
let altText = scoop.getAttribute("redtext");
//console.log("I can't see the image in the console,");
//console.log(" but I'm told it looks like: " + altText);

let green = document.getElementById("greenPlanet");
let altText = green.getAttribute("redtext");
if (altText == null) {
    //console.log("Oh, I guess there isn't an alt attribute.");
} else {
    //console.log("I can't see the image in the console,");
    //console.log(" but I'm told it looks like " + altText);
}


//Adding color yo the browser using Dom
function init() {
    let planet = document.getElementById("greenplanet");
    planet.innerHTML = "Red Alert: hit by phaser fire!";
    planet.setAttribute("class", "redtext");
}
window.onload = init;

//Sharpen your pencil adding elements to the dom
function addSongs() {
    let song1 = document.getElementById("song1");
    let song2 = document.getElementById("song2");
    let song3 = document.getElementById("song3");
    song1.innerHTML = "Blue Suede Strings, by Elvis Pagely";
    song2.innerHTML = "Great Objects on Fire, by Jerry JSON Lewis";
    song3.innerHTML = "I Code the Line, by Johnny JavaScript";
}
window.onload = addSongs;

// Adding elemnts green planet to the dom
function init() {
    //let planet = document.getElementById("greenplanet");
    //planet.innerHTML = "Red Alert: hit by phaser fire!";
}
window.onload = init; ///Here, we’re assigning the function init to the
// window.onload property. Make sure you don't
// use parentheses after the function name! We're
// not calling the function; we're just assigning the
// function value to the window.onload property.
//console.log(init);