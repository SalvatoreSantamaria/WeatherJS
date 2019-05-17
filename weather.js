class Weather {
  constructor(city, state) {
    this.apiKey = 'c32b17d19cf44c975e03ef78c02ce775';
    this.city = city;
    this.state = state;
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch
    (`http://api.openweathermap.org/data/2.5/weather?q=${this.city}`);

    const responseData = await response.json();

    return responseData.coord;
  }

  // Change weather location
  changeLocation(city, state) {
    this.city = city;
    this.state = state;
  }
}