const request = require('request');
const breedName = process.argv[2];
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

// const get = function(url, callback) {
request.get(url, function(error, response, body) {
  if (error) {
    return console.log('Failed to request details: ', error);
    // throw "Error getting URL "+error
  }
  const data = JSON.parse(body);


  const breed = data[0];
  if (breed) {
    console.log(breed.description);
  } else {
    console.log(`Failed to find breed ${breedName}`);
  }
})