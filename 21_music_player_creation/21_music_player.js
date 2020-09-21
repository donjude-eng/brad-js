const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['hey' , 'summer', 'ukulele' , 'oneRepublic' , 'Titanium'];

// Keep track of songs
let songIndex = 4;


// Initially load song details inti DOM
loadSong(songs[songIndex]);

//Update the song details
function loadSong(song){
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpg`;

}

//play Song
function playSong(){
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}


//pause Song
function pauseSong(){
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

//Previous Song
function previousSong(){
    songIndex --;

    if(songIndex < 0){
        songIndex = songs.length - 1;
    }
    loadSong(songs[songIndex]);
    playSong();
}

//Next song

function nextSong(){
    songIndex ++;

    if(songIndex > songs.length -1){
        songIndex = 0;

    }
    loadSong(songs[songIndex]);
    playSong();
}

//Update Progress bar
function updateProgress(e){

   const {duration , currentTime} = e.srcElement;
   console.log(duration , currentTime);
   const progressPercent = ( currentTime / duration) * 100;
   progress.style.width = `${progressPercent}%`;

}

// Set progress bar

function setProgress(e) {
    const width = this.clientWidth;
    const clickX = e.offsetX;
    const duration = audio.duration;

    audio.currentTime = (clickX / width) * duration;
}


//Event listners
function playingStatus(){
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying){
        pauseSong();
    } else {
        playSong();
    }

}
playingStatus();


//Change song
playBtn.addEventListener('click',playingStatus);
prevBtn.addEventListener('click', previousSong);
nextBtn.addEventListener('click', nextSong);

//Time and song update
audio.addEventListener('timeupdate', updateProgress);

//Click on progress bar
progressContainer.addEventListener('click' , setProgress);
