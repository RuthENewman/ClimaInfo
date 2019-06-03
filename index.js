const geocode = require('./utilities/geocode');
const forecast = require('./utilities/forecast');

// Dark Sky API

forecast(-75.7088, 44.1545, (error, data) => {
  console.log('Error', error)
  console.log('Data', data)
})

// Mapbox geocoding

geocode('Nashville', (error, data) => {
  console.log('Error', error)
  console.log('Data',data)
})
