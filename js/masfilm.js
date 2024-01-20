document.addEventListener('DOMContentLoaded', () => {
    const listaPeliculas = document.getElementById('listaPeliculas');
    const apiUrl = 'https://api.themoviedb.org/3/movie/top_rated?api_key=d64cdbae6200571e7e7bf3941ac65a5d';
  
    fetch(apiUrl)
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {

        if ('results' in data) {
          mostrarPeliculas(data.results);
        } else {
          console.error('La propiedad results no está presente en la respuesta de la API.');
        }
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
});

function mostrarPeliculas(peliculas) {
    const fragmento = document.createDocumentFragment();

    peliculas.forEach(pelicula => {
        const li = document.createElement('li');
        li.textContent = pelicula.title;
        fragmento.appendChild(li);
    });

    listaPeliculas.appendChild(fragmento);
}
