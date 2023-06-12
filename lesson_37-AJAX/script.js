const apiKey = 'ced0220d';

document.addEventListener('DOMContentLoaded', function () {
  document.getElementById('searchButton').addEventListener('click', function () {
    searchMovies();
  });

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('movie-details-button')) {
      const imdbId = event.target.dataset.imdbid;
      getMovieDetails(imdbId);
    }
  });

  document.addEventListener('click', function (event) {
    if (event.target.classList.contains('pagination-button')) {
      const page = event.target.dataset.page;
      searchMovies(page);
    }
  });
});

function searchMovies(page = 1) {
  const searchInput = document.getElementById('searchInput').value;
  const type = document.getElementById('typeSelect').value;
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}&type=${type}&page=${page}`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function (data) {
      displayMovies(data);
      displayPagination(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayMovies(data) {
  const moviesList = document.getElementById('moviesList');
  moviesList.innerHTML = '';

  if (data.Search) {
    data.Search.forEach(function (movie) {
      const movieItem = document.createElement('li');
      movieItem.classList.add('movie-item');

      const title = document.createElement('div');
      title.textContent = movie.Title;

      const year = document.createElement('div');
      year.textContent = `Year: ${movie.Year}`;

      const detailsButton = document.createElement('button');
      detailsButton.classList.add('movie-details-button');
      detailsButton.dataset.imdbid = movie.imdbID;
      detailsButton.textContent = 'Details';

      const movieDetails = document.createElement('div');
      movieDetails.classList.add('movie-details');

      movieItem.append(title, year, detailsButton, movieDetails);
      moviesList.appendChild(movieItem);
    });
  } else {
    moviesList.textContent = 'Movie not found!';
  }
}

function displayPagination(response) {
  const totalResults = parseInt(response.totalResults);
  const totalPages = Math.ceil(totalResults / 10);
  const pagination = document.getElementById('pagination');
  pagination.innerHTML = '';

  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const button = document.createElement('button');
      button.classList.add('pagination-button');
      button.textContent = i;
      button.dataset.page = i;
      pagination.appendChild(button);
    }
  }
}

function getMovieDetails(imdbId) {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`;

  fetch(url)
    .then(function (response) {
      if (!response.ok) {
        throw new Error('Network response was not ok');
      }
      return response.json();
    })
    .then(function (data) {
      displayMovieDetails(data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

function displayMovieDetails(movie) {
  const details = document.querySelector(`.movie-item .movie-details[data-imdbid="${movie.imdbID}"]`);
  details.innerHTML = '';

  const poster = document.createElement('img');
  poster.setAttribute('src', movie.Poster);

  const rating = document.createElement('div');
  rating.textContent = `IMDb Rating: ${movie.imdbRating}`;

  const plot = document.createElement('div');
  plot.textContent = `Plot: ${movie.Plot}`;

  const actors = document.createElement('div');
  actors.textContent = `Actors: ${movie.Actors}`;

  const genre = document.createElement('div');
  genre.textContent = `Genre: ${movie.Genre}`;

  const director = document.createElement('div');
  director.textContent = `Director: ${movie.Director}`;

  details.append(poster, rating, plot, actors, genre, director);
  details.style.display = 'block';
}
