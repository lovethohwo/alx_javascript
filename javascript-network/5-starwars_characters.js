const request = require('request');

// Check if the user provided a Movie ID as a command-line argument
const movieId = process.argv[2];

if (!movieId) {
  console.error('Please provide a Movie ID as an argument.');
  process.exit(1);
}

// Define the URL for the Star Wars API
const apiUrl = `https://swapi.dev/api/films/${movieId}/`;

// Make a request to the API to get the movie data
request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching movie data:', error);
    process.exit(1);
  }

  if (response.statusCode !== 200) {
    console.error('Error:', response.statusCode, body);
    process.exit(1);
  }

  const movie = JSON.parse(body);

  console.log(`Characters in ${movie.title}:`);

  // Loop through the characters and print their names
  movie.characters.forEach((characterUrl) => {
    request(characterUrl, (error, response, body) => {
      if (error) {
        console.error('Error fetching character data:', error);
        return;
      }

      if (response.statusCode !== 200) {
        console.error('Error:', response.statusCode, body);
        return;
      }

      const character = JSON.parse(body);
      console.log(character.name);
    });
  });
});
