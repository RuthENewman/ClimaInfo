const request = require('request');

const testURL = "https://api.darksky.net/forecast/bef64b7f9653bd2ecdad26b985f0706b/37.8267,-122.4233?units=si";

request({url: testURL, json: true}, (error, response) => {
  const currentlyData = response.body.currently;
  const dailyData = response.body.daily;
  console.log('It is currently ' + currentlyData.temperature
             + ' C. There is a '
             + currentlyData.precipProbability
             + '% chance of rain.');
})
