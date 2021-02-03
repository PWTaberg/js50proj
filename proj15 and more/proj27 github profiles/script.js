const APIURL = 'https://api.github.com/users/';

const form = document.getElementById('form');
const search = document.getElementById('search');
const main = document.getElementById('main');

/* .then syntax
function getUser(username) {
	axios
		.get(APIURL + username)
		.then((res) => console.log(res.data))
		.catch((err) => console.log(err));
}
*/

async function getUser(username) {
	try {
		const { data } = await axios.get(APIURL + username);

		//console.log(data);
		if (data) {
			createUserCard(data);
			getRepos(username);
		} else {
			createErrorCard('No profile with this username');
		}
	} catch (err) {
		//console.log(err);
		createErrorCard('No profile with this username');
	}
}

async function getRepos(username) {
	try {
		//  await axios.get(APIURL + username + '/repos');
		const { data } = await axios.get(
			APIURL + username + '/repos?sort=created'
		);

		//console.log(data);

		if (data) {
			addReposToCard(data);
		} else {
			createErrorCard('Problem fetching repos 1');
		}
	} catch (err) {
		//console.log(err);
		createErrorCard('Problem fetching repos 2');
	}
}

//getUser('bradtraversy');

function createUserCard(user) {
	// kolla url i browsee för att se vad vi letar efter
	//console.log(user);
	// Take main from HTML
	const cardHTML = `
    <div class="card">
        <div>
        <img src="${user.avatar_url} alt="${user.name}" class="avatar">
        </div>
        <div class="user-info">
        <h2>${user.name}</h2>
        <p>${user.bio}</p>
        <ul>
            <li>${user.followers} <strong>Followers </strong></li>
            <li> ${user.following} <strong>Following </strong></li>
            <li> ${user.public_repos} <strong>Repos </strong></li>
        </ul>
            <div id="repos">
            <a href="#" class="repo">Repo 1</a>
            <a href="#" class="repo">Repo 2</a>
            <a href="#" class="repo">Repo 3</a>
        </div> 
        </div>
    </div>
  </div>`;
	// replace main
	main.innerHTML = cardHTML;
}

function createErrorCard(msg) {
	const cardHTML = `
        <div class="card">
            <h1>${msg}</h1>
        </div>
    `;
	main.innerHTML = cardHTML;
}

// List repos
function addReposToCard(repos) {
	//console.log('addRepos' + repos);

	// Get ref to 'repos' div
	const reposElement = document.getElementById('repos');

	// check it out
	console.log(reposElement);

	// Loop throug repos
	// repos.forEach((repo) =>
	// limit repos to 10
	repos.slice(0, 10).forEach((repo) => {
		console.log(repo);

		// Build  a repo link for each
		// Create an a element
		const repoElement = document.createElement('a');
		// add class
		repoElement.classList.add('repo');
		// add href
		repoElement.href = repo.html_url;
		// make it go to a new page
		repoElement.target = '_blank';
		// add the repo name
		repoElement.innerText = repo.name;
		// We now have created an a element in document, but we have not yet linked it to the repos div
		// Check out document
		console.log(reposElement);
		console.log(repoElement);

		// add the a element as a child to the repos div
		reposElement.appendChild(repoElement);
	});
}

form.addEventListener('submit', (e) => {
	e.preventDefault();
	//console.log(e.target);
	const user = search.value;
	//console.log(search.value);

	if (user) {
		getUser(user);
	}

	search.value = '';
});
