// function pageLoadedHandler() {
//     alert("I'm alive!");
// }
// window.onload = pageLoadedHandler;


// window.onload = init;
// function init() {
//     let image = document.getElementById("zero");
//     image.onclick = showAnswer;
// }

// function showAnswer() {
//     let image = document.getElementById("zero");
//     image.src = "img/zero.jpg";
// }

///Traditional way by wrting eventhandler for each id
window.onload = init;
// function init() {
//     let image0 = document.getElementById("zero");
//     image0.onclick = showImageZero;

//     let image1 = document.getElementById("one");
//     image1.onclick = showImageOne;

//     let image2 = document.getElementById("two");
//     image2.onclick = showImagetwo;

//     let image3 = document.getElementById("three");
//     image3.onclick = showImageThree;

//     let image4 = document.getElementById("four");
//     image4.onclick = showImagefour;

//     let image5 = document.getElementById("five");
//     image5.onclick = showImagefive;

// }

//making it two one handler using for loop.
function init() {
    let image = document.getElementById("zero");
    image.onclick = showAnswer;

    let images = document.getElementsByTagName("img");
    for (var i = 0; i < images.length; i++) {
        images[i].onclick = showAnswer;
    }
    console.log(init)

};


//Foe each imgaes without blur
// function showImageZero() {
//     let image = document.getElementById("zero");
//     image.src = "img/zero.jpg";
// }

// function showImageOne() {
//     let image = document.getElementById("one");
//     image.src = "img/one.jpg";
// }

// function showImagetwo() {
//     let image = document.getElementById("two");
//     image.src = ("img/two.jpg")
// }

// function showImageThree() {
//     let image = document.getElementById("three");
//     image.src = ("img/three.jpg")
// }

// function showImagefour() {
//     let image = document.getElementById("four");
//     image.src = ("img/four.jpg")
// }

// function showImagefive() {
//     let image = document.getElementById("five");
//     image.src = ("img/five.jpg")
// }

////Using showanswer function for loop
function showAnswer() {
    let image = document.getElementById("zero");
    image.src = "img/zero.jpg";
}

function showAnswer() {
    let image = document.getElementById("one");
    image.src = "img/one.jpg";
}

function showAnswer() {
    let image = document.getElementById("two");
    image.src = ("img/two.jpg")
}

function showAnswer() {
    let image = document.getElementById("three");
    image.src = ("img/three.jpg")
}

function showAnswer() {
    let image = document.getElementById("four");
    image.src = ("img/four.jpg")
}

function showAnswer() {
    let image = document.getElementById("five");
    image.src = ("img/five.jpg")
}

