//Init weather object

//uses lat, lon
const weather = new Weather(1, 1);
// Get weather on DOM load

document.addEventListener('DOMContentLoaded', getWeather);
//weather.changeLocation = (50, 50);

function getWeather() {
  weather.getWeather()
    .then(results => {
      //console.log(results);
      Uint16Array.paint(results);

    }) //receiving the promise (using async)
    .catch(err => console.log(err))
}