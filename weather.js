class Weather {
  constructor(lat, state) {
    this.apiKey = 'c32b17d19cf44c975e03ef78c02ce775';
    this.lat = 47.606209;
    this.lon = -122.332069;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${this.lat}&lon=${this.lon}`);

    const responseData = await response.json();


    var obj = {
      conditions: responseData.main,
      wind: responseData.wind.speed,
      name: responseData.id,
      currentWeather: responseData.weather[0].main ,
      description: responseData.weather[0].description,
      icon: responseData.weather[0].icon,
      temp: responseData.main.temp
    }

    // return responseData.main;
    console.log(obj)
    return obj;
  }

  // Change weather location
  changeLocation(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }
}