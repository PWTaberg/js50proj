// Keys are in ../../config/movieApp.js

//

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

// Get initial movies
getMovies(API_URL);

async function getMovies(url) {
	const response = await fetch(url);
	const data = await response.json();

	showMovies(data.results);
}

function showMovies(movies) {
	// Clear screen
	main.innerHTML = '';

	// Get each movie
	movies.forEach((movie) => {
		const { title, poster_path, vote_average, overview } = movie;

		// Create movie div with class 'movie'
		const movieEl = document.createElement('div');
		movieEl.classList.add('movie');

		// Add Movie data according to mockup
		movieEl.innerHTML = ` 
        <img
        src="${IMG_PATH + poster_path}"
        alt="${title}">
      <div class="movie-info">
        <h3>${title}</h3>
        <span class="${getClassByRate(vote_average)}">${vote_average}</span>
      </div>
      <div class="overview">
        <h3>Overview</h3>
        <p>${overview}</p>
        </div>`;

		// Append movie-element
		main.appendChild(movieEl);
	});
}

function getClassByRate(vote) {
	let rateClass = '';
	if (vote > 8) {
		rateClass = 'green';
	} else if (vote >= 5) {
		rateClass = 'orange';
	} else {
		rateClass = 'red';
	}

	return rateClass;
}
form.addEventListener('submit', (e) => {
	e.preventDefault();

	const searchTerm = search.value;
	console.log(searchTerm);

	if (searchTerm && searchTerm !== '') {
		getMovies(SEARCH_API + searchTerm);
		search.value = '';
	} else {
		window.location.reload();
	}
});
