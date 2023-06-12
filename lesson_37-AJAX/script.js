const apiKey = 'ced0220d'; 

$(document).ready(function () {
  $('#searchButton').click(function () {
    searchMovies();
  });

  $(document).on('click', '.movie-details-button', function () {
    const imdbId = $(this).data('imdbid');
    getMovieDetails(imdbId);
  });

  $(document).on('click', '.pagination-button', function () {
    const page = $(this).data('page');
    searchMovies(page);
  });
});

function searchMovies(page = 1) {
  const searchInput = $('#searchInput').val();
  const type = $('#typeSelect').val();
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&s=${searchInput}&type=${type}&page=${page}`;

  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      displayMovies(response);
      displayPagination(response);
    },
    error: function (error) {
      console.log(error);
    }
  });
}

function displayMovies(data) {
  const moviesList = $('#moviesList');
  moviesList.empty();

  if (data.Search) {
    data.Search.forEach(movie => {
      const movieItem = $('<li>').addClass('movie-item');
      const title = $('<div>').text(movie.Title);
      const year = $('<div>').text(`Year: ${movie.Year}`);
      const detailsButton = $('<button>')
        .addClass('movie-details-button')
        .attr('data-imdbid', movie.imdbID)
        .text('Details');

      const movieDetails = $('<div>').addClass('movie-details');

      movieItem.append(title, year, detailsButton, movieDetails);
      moviesList.append(movieItem);
    });
  } else {
    moviesList.text('Movie not found!');
  }
}

function displayPagination(response) {
  const totalResults = parseInt(response.totalResults);
  const totalPages = Math.ceil(totalResults / 10);
  const pagination = $('#pagination');
  pagination.empty();

  if (totalPages > 1) {
    for (let i = 1; i <= totalPages; i++) {
      const button = $('<button class="pagination-button">')
        .text(i)
        .data('page', i);
      pagination.append(button);
    }
  }
}

function getMovieDetails(imdbId) {
  const url = `http://www.omdbapi.com/?apikey=${apiKey}&i=${imdbId}`;

  $.ajax({
    url: url,
    type: 'GET',
    dataType: 'json',
    success: function (response) {
      displayMovieDetails(response);
    },
    error: function (error) {
      console.log(error);
    }
  });
}

function displayMovieDetails(movie) {
  const details = $(`.movie-item .movie-details[data-imdbid="${movie.imdbID}"]`);
  details.empty();

  const poster = $('<img>').attr('src', movie.Poster);
  const rating = $('<div>').text(`IMDb Rating: ${movie.imdbRating}`);
  const plot = $('<div>').text(`Plot: ${movie.Plot}`);
  const actors = $('<div>').text(`Actors: ${movie.Actors}`);
  const genre = $('<div>').text(`Genre: ${movie.Genre}`);
  const director = $('<div>').text(`Director: ${movie.Director}`);

  details.append(poster, rating, plot, actors, genre, director);
  details.show();
}
