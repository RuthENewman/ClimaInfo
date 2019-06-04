const geocode = require('./utilities/geocode');
const forecast = require('./utilities/forecast');

const city = process.argv[2];

if (!city) {
  console.log('Please include a city in your query')
}
else {
  // Dark Sky API & Mapbox geocoding

  geocode(city, (error, data) => {
    if (error) {
      return console.log(error)
    }
    forecast(data.latitude, data.longitude, (error, forecastData) => {
      if (error) {
        return console.log(error)
      }
      console.log(data.location)
      console.log(forecastData)
    })
  })
}
