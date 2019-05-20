//Init weather object

//uses lat, lon
const weather = new Weather(1, 1);
// Get weather on DOM load

//Init UI
const ui = new UI();

document.addEventListener('DOMContentLoaded', getWeather);
//weather.changeLocation = (50, 50);

function getWeather() {
  weather.getWeather()
    .then(results => {
      console.log(results + 'these are the results on the app.js page');
      ui.paint(results);

    }) //receiving the promise (using async)
    .catch(err => console.log(err))
}