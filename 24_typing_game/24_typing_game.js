const word = document.getElementById('word');
const text = document.getElementById('text');
const scoreEl = document.getElementById('score');
const timeEl = document.getElementById('time');
const endGameEl = document.getElementById('end-game-container');
const settingsBtn = document.getElementById('settings-btn');
const settings = document.getElementById('settings');
const settingsForm = document.getElementById('settings-form');
const difficultySelect = document.getElementById('difficulty');


// List of words for game
const words = [
    'sigh',
    'tense',
    'airplane',
    'ball',
    'pies',
    'juice',
    'warlike',
    'bad',
    'north',
    'dependent',
    'steer',
    'silver',
    'highfalutin',
    'superficial',
    'quince',
    'eight',
    'feeble',
    'admit',
    'drag',
    'loving'
];

//Init word
let randomWord;

//Init score
let score = 0;

//Init time
let time = 10;

// focus on thext on start
text.focus();

//start counting down
const timeInterval = setInterval(updateTime, 1000);

//Generate Random Word from Array
function randomWordGenerator(){
    return words[Math.floor(Math.random() * words.length)]

}

//Add word to the DOM
function addWordToDom(){
    randomWord = randomWordGenerator();
    word.innerHTML = randomWord;
}

//Update score
function updateScore(){
    score++;
    scoreEl.innerHTML = score +1;

}

//Update Time
function updateTime(){
    time--;
    timeEl.innerHTML = time + 's';

    if(time === 0){
        clearInterval(timeInterval);
        gameOver();
    }
}

// Game Over, show end screen
function gameOver(){
    endGameEl.innerHTML = `
    <h1>Time ran out</h1>
    <p>Your final score is ${score}</p>
    <button onclick="location.reload()">Reload</button>
    `;
    endGameEl.style.display='flex';
    endGameEl.style.color='yellow';

}

addWordToDom();

//Event listners
//Typing
function updateValue(e){
    const insertedText = e.target.value;

    if(insertedText === randomWord) {
        addWordToDom();
        updateScore();
    //Clear the word
     e.target.value = '';

     time += 5;
     updateTime()
    }

}
text.addEventListener('input', updateValue)

//A Settings btn click
settingsBtn.addEventListener('click' , () =>
settings.classList.toggle('hide'));