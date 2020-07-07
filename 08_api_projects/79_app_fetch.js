// Init weather object

const weather = new Weather('karachi', 'pakistan');

// Get weather on the DOM load
document.addEventListener('DOMContentLoaded' , getWeather);


//weather.changeLocation ('delhi', 'india');

function getWeather(){
weather.getWeather()
.then(results => {
    console.log(results);
})
.catch(err => console.log(err));
}
