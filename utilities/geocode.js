const request = require('request');

const geocode = (address, callback) => {
  const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/" + encodeURIComponent(address) + ".json?access_token=pk.eyJ1IjoicnV0aGVuZXdtYW4iLCJhIjoiY2p3OGVvdGw2MmdpYjQzcGx4c3p3bmM1MCJ9.tvwMTbvxPpFxYDABIUiKOw";
  request({url: url, json: true}, (error, response) => {
    if(error) {
      callback('Unable to connect to location identification service', undefined)
    } else if (response.body.features.length == 0) {
      callback('Please try another location to search', undefined)
    } else {
      callback(undefined,{
        latitude: response.body.features[0].center[1],
        longitude: response.body.features[0].center[0],
        location: response.body.features[0].place_name
      })
    }
  });
}

module.exports = geocode;
