class Weather {
  constructor(city, state) {
    this.apiKey = 'c32b17d19cf44c975e03ef78c02ce775';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(`https://fcc-weather-api.glitch.me/api/current?lat=35&lon=139`);

    const responseData = await response.json();

    return responseData.main;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}