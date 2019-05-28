const request = require('request');

const testURL = "https://api.darksky.net/forecast/bef64b7f9653bd2ecdad26b985f0706b/37.8267,-122.4233";

request({url: testURL}, (error, response) => {
  const data = JSON.parse(response.body)
  console.log(data.currently);
})
