const request = require('request');

// Dark Sky API

const testURL = "https://api.darksky.net/forecast/bef64b7f9653bd2ecdad26b985f0706b/37.8267,-122.4233?units=si";

request({url: testURL, json: true}, (error, response) => {
  const currentlyData = response.body.currently;
  const dailyData = response.body.daily;
  console.log(dailyData.data[0].summary)
  console.log('It is currently ' + currentlyData.temperature
             + ' C. There is a '
             + currentlyData.precipProbability
             + '% chance of rain.');
})


// Mapbox geocoding

const mapboxURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/Los%20Angeles.json?access_token=pk.eyJ1IjoicnV0aGVuZXdtYW4iLCJhIjoiY2p3OGVvdGw2MmdpYjQzcGx4c3p3bmM1MCJ9.tvwMTbvxPpFxYDABIUiKOw";

const defaultAPIkey = "pk.eyJ1IjoicnV0aGVuZXdtYW4iLCJhIjoiY2p3OGVvdGw2MmdpYjQzcGx4c3p3bmM1MCJ9.tvwMTbvxPpFxYDABIUiKOw"

request({url: mapboxURL, json: true}, (error, response) => {
  const mapboxData = response.body.features[0];
  const longitude = mapboxData.center[0];
  const latitude = mapboxData.center[1];
  console.log(longitude)
  console.log(latitude)
})
