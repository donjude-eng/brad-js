class UI {
    constructor(){
        this.location = document.getElementById('w-location');
        this.desc = document.getElementById('w-desc');
        this.string = document.getElementById('w-string');
        this.details = document.getElementById('w-details');
        this.icon = document.getElementById('w-icon');
        this.humidity = document.getElementById('w-humidity');
        this.feels_like = document.getElementById('w-feels-like');
        this.pressure = document.getElementById('w-dewpoint');
        this.speed = document.getElementById('w-wind');

    }


    //Show on display

    paint (weather) {
        this.location.textContent = weather.name;
        this.desc.textContent = weather.weather[0].description;
        this.string.textContent = weather.main.temp;
        this.humidity.textContent = `Relative Humidity: ${weather.main.humidity}`;
        this.feels_like.textContent = `Feels like: ${weather.main.feels_like}`;
        this.pressure.textContent = `Pressure: ${weather.main.pressure}`;
        this.speed.textContent = `Wind: ${weather.wind.speed}`;

    }


}
