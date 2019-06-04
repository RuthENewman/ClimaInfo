const geocode = require('./utilities/geocode');
const forecast = require('./utilities/forecast');

const city = process.argv[2];

if (!city) {
  console.log('Please include a city in your query')
}
else {
  // Dark Sky API & Mapbox geocoding

  geocode(city, (error, {latitude, longitude, location}) => {
    if (error) {
      return console.log(error)
    }
    forecast(latitude, longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(location)
      console.log(forecastData)
    })
  })
}
