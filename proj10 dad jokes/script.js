const jokeEl = document.getElementById('joke');
const jokeBtn = document.getElementById('jokeBtn');

jokeBtn.addEventListener('click', generateJoke);

generateJoke();

/* using async / await */
async function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	const result = await fetch(`https://icanhazdadjoke.com`, config);

	const data = await result.json();

	jokeEl.innerHTML = data.joke;
}

/* using promises
function generateJoke() {
	const config = {
		headers: {
			Accept: 'application/json',
		},
	};

	fetch(`https://icanhazdadjoke.com`, config)
		.then((res) => res.json())
		.then((data) => {
			jokeEl.innerHTML = data.joke;
		});
}
*/
