//Addevent listeners.


//First test

// const sayHello1 = function(name1 , name2){
//     console.log('Hello Greetings to Done');
// }
// sayHello1('Don' , 'Jude');
// console.log(`${name1} , ${name2}`);

// let sayHello = function(name1 , name2) {
//     console.log('Hello greetings to');
//     console.log(`${name1} , ${name2}`)
// }

// sayHello('Don', 'Jude');

// let fullNameMaker = function(firstName, lasteName) {
//     console.log('Welcome to Dons world');
//     console.log(`Happy to have you,${firstName} ${lasteName}`);
// }

// fullNameMaker('Don' , 'Jude');


// let numAdd = function(num1 , num2) {
//     let added = num1 + num2;
//     return added
// }

// let total = numAdd (50 , 75);
// console.log(total)

// //console.log(numAdd(50 , 25));


// let nameConstruct = function(name1, name2 , name3) {
//     console.log('Welcome to my home, MR')
//     console.log(`${name1} ${name2} ${name3}`)
// }

//nameConstruct('Sagar' , 'Alias' , 'Jacky')

// let nameConstruct2 =
//  function(name1 , name2) {
//     let added = name1 + name2
//     return nameConstruct
// }

// console.log(nameCOnstruct2('Don Jude'));


// let addNum = function(number1 , number2) {
//     let value1 = number1 + number2;
//     let value2 = number1 - number2;
//     return value1 , value2
// }

// let result = addNum(10 , 20)
// console.log(result)

document.getElementById('key_a').addEventListener('click' , keyPressA);
document.getElementById('key_b').addEventListener('click' , keyPressB);
document.getElementById('key_c').addEventListener('click' , keyPressC);
document.getElementById('key_d').addEventListener('click' , spacePress);
document.getElementById('key_e').addEventListener('click' , enterPress);

currentText = document.getElementById("keyboard").value;
console.log(currentText);

function keyPressA(e) {
    e.preventDefault()
    document.getElementById("keyboard").value += "A";

    currentText = document.getElementById("keyboard").value;
    arrayText = [...currentText];
    console.log(arrayText);

    console.log(currentText);
    console.log("Pressed A")
}

function keyPressB(e) {
    e.preventDefault()
    document.getElementById("keyboard").value += "B";

    console.log("Pressed B")
}

function keyPressC(e) {
    e.preventDefault()
    document.getElementById("keyboard").value += "C";

    console.log("Pressed C")
}

function spacePress(e) {
    let textValue = keyPressA(e) +' '+ keyPressB(e);
    e.preventDefault()
    document.getElementById('keyboard').value += (textvalue);
    console.log("space")
}

function enterPress(e){
  e.preventDefault();

  document.getElementById('keyboard').value += "\n";
  console.log("Pressed Enter")
}
