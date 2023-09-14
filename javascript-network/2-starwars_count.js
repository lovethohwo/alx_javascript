const request = require('request');

function countMoviesWithWedgeAntilles(apiUrl) {
  const characterId = 18;
  const characterUrl = `${apiUrl}people/${characterId}/`;

  request.get(characterUrl, (error, response, body) => {
    if (error) {
      console.error('Error:', error);
    } else if (response.statusCode !== 200) {
      console.error('Status:', response.statusCode);
    } else {
      const characterData = JSON.parse(body);
      const moviesWithWedgeAntilles = characterData.films.length;
      console.log(moviesWithWedgeAntilles);
    }
  });
}

const apiUrl = process.argv[2];
countMoviesWithWedgeAntilles(apiUrl);