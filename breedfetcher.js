const request = require("request");
const fetchBreedDescription = function(breedName, callback) {
  request('https://api.thecatapi.com/v1/breeds', (error, response, body) => {
    if (error) {
      callback("error: ", error);
    }
    body = JSON.parse(body);
    let found = false;
    for (let i = 0; i < body.length; i++) {
      if (body[i]['name'] === breedName) {
        callback(null, body[i]['description']);
        found = true;
      }
    }
    if (!found) {
      callback("Breed not found!");
    }
  });
};

module.exports = { fetchBreedDescription };

// request(`https://api.thecatapi.com/v1/images/search?breed_ids=${args[2]}`, (error, response, body) => {
//   if (!body) {
//     console.log("Invalid Breed!")
//   }
//   const data = JSON.parse(body);
//   console.log(data[Object.keys(data)]['breeds'][0]['description'])
// })