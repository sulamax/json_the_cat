const request = require('request');

const fetchBreedDescription = (breedName, callback) => {
  request.get(
    `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`,
    (error, response, body) => {
      if (error) {
        callback(error, null);
      } else {
        const breed = JSON.parse(body)[0];
        if (!breed) {
          callback(null, "Breed not found!!!");
        } else {
          callback(null, breed.description);
        }
      }
    }
  );
};
