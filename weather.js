class Weather {
  constructor(lat, state) {
    this.apiKey = 'c32b17d19cf44c975e03ef78c02ce775';
    this.lat = 2;
    this.lon = 2;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=${this.lat}&lon=${this.lon}`);

    const responseData = await response.json();


    var obj = {
      conditions: responseData.main,
      wind: responseData.wind,
      name: responseData.name,
    }

    // return responseData.main;
    return obj;
  }

  // Change weather location
  changeLocation(lat, lon) {
    this.lat = lat;
    this.lon = lon;
  }
}