function countMoviesWithWedgeAntilles(apiUrl) {
  const characterId = 18;

  return fetch(apiUrl)
    .then(response => response.json())
    .then(data => {
      const films = data.results;
      let count = 0;

      for (const film of films) {
        const characters = film.characters;
        if (characters.includes(`https://swapi-api.alx-tools.com/api/people/${characterId}/`)) {
          count++;
        }
      }

      return count;
    })
    .catch(error => {
      console.error('Error occurred:', error);
      return null;
    });
}

const apiUrl = 'https://swapi-api.alx-tools.com/api/films/';
countMoviesWithWedgeAntilles(apiUrl)
  .then(movieCount => {
    if (movieCount !== null) {
      console.log(`The number of movies where Wedge Antilles is present: ${movieCount}`);
    }
  });