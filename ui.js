class UI {
  constructor() {
    this.location = document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string');
    this.details = document.getElementById('w-details');
    this.icon = document.getElementById('w-icon');
    this.humidity = document.getElementById('w-humidity');
    this.feelsLike = document.getElementById('w-feels-like');
    this.dewpoint= document.getElementById('w-dewpoint');
    this.wind = document.getElementById('w-wind');
  }

  paint(weather) {
    //this.location.textContent = weather.name;
    this.desc.textContent = weather.description;
    this.string.textContent = weather.currentWeather;
    this.icon.setAttribute('src', weather.icon);
    //this.humidity.textContent = `Relative Humidity: ${weather.relative_humidity}`;
    this.feelsLike.textContent = `Temp: ${weather.temp}`;
    //this.dewpoint.textContent = `DewPoint: ${weather.dewpoint_string}`;
    this.wind.textContent ='Wind '+  weather.wind + ' mph';
  }
}