//Init weather object

const weather = new Weather('Seattle', 'WA');

weather.getWeather()
  .then(results => {
    console.log(results);
  }) //receiving the promise (using async)
  .catch(err => console.log(err))