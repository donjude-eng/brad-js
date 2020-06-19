// GAME FUNCTION
// - Player must guess a number between a min and max
// - Player gets a certain amount of guesses
// - Notify player of guesses remaining
// - Notify the player of the correct answer if loose.
// - Let the player choose to play again.

// Game values

let min =1,
    max = 20,
    winningNum = getRandomNum(min, max),
    guessesLeft = 3;

//UI Elements
const game = document.querySelector('#game'),
      minNum =document.querySelector('.min-num'),
      maxNum = document.querySelector('.max-num'),
      guessBtn = document.querySelector('#guess-btn'),
      guessInput = document.querySelector('#guess-input'),
      message = document.querySelector('.message');

// Assign UI min and max
minNum.textContent = min;
maxNum.textContent = max;

// Play again event listener
game.addEventListener('mousedown' , function(e){
  if (e.target.className === 'play-again'){
    window.location.reload();
  }
})


// Listen for guess

guessBtn.addEventListener ('click', function(){
   let guess = parseInt (guessInput.value);
   console.log(guess);


   ///Validate

   if (isNaN (guess) || guess < min || guess > max){
     setMessage(`Please enter a number between ${min} and ${max}` ,'red');
   }

   ///Check if won
   if (guess === winningNum){
     // Game over -won

     gameOver (true ,`${winningNum} is correct, YOU WIN!` );

   } else {
     //Wrong number
     guessesLeft -= 1;

     if (guessesLeft === 0) {
       //Game over -lost

       gameOver(false, `Game Over , you lost. The correct number wa ${winningNum}` );

       // Disable input
       guessInput.disabled = true;
       //Change border color
       guessInput.style.borderColor = 'red';
       //set message
       setMessage(`Game Over , you lost. The correct number was ${winningNum}`, 'red');
      }else{
       //Game continuous - answer wrong

       //Change border color
       guessInput.style.borderColor = 'red';

       //Clear Input
       guessInput.value = '';

       //Tell user its the wrong number.
       setMessage(`${guess} is not correct, ${guessesLeft} guessesleft` , 'red');
     }
   }

});

//Game over

function gameOver (won , msg){
  let color;
  won === true ? color = 'green' : color = 'red';

  // Disable input
  guessInput.disabled = true;
  //Change border color
  guessInput.style.borderColor = color;
  //Set text color
  message.style.color = color;
  //set message
  setMessage(msg);
  // Play again?
  guessBtn.value = 'Play Again';
  guessBtn.className +='play-again';

}

// Get Winning Number
function getRandomNum(min, max){
  return (Math.floor (Math.random()*(max-min+1)+ min));

}

//Set message
function setMessage(msg, color){
  message.style.color =color;
  message.textContent = msg;
}

