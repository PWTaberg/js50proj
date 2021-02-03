const tagsEl = document.getElementById('tags');
const textarea = document.getElementById('textarea');

textarea.focus();

textarea.addEventListener('keyup', (e) => {
	createTags(e.target.value);

	if (e.key === 'Enter') {
		// We reset textarea after 0.01 sec
		setTimeout(() => {
			e.target.value = '';
		}, 10);

		//
		randomSelect();
	}
});

function createTags(input) {
	const tags = input
		.split(',')
		.filter((tag) => tag.trim() !== '')
		.map((tag) => tag.trim());

	// clear tags
	tagsEl.innerHTML = '';

	tags.forEach((tag) => {
		const tagEl = document.createElement('span');
		tagEl.classList.add('tag');
		tagEl.innerText = tag;
		tagsEl.appendChild(tagEl);
	});
}

function randomSelect() {
	const times = 30;

	// Start flickering every 0.1s
	const interval = setInterval(() => {
		// Highlight a random tag
		const randomTag = pickRandomTag();
		highlightTag(randomTag);

		// unhighlight it after 0,1 seconds
		setTimeout(() => {
			unHighlightTag(randomTag);
		}, 100);
	}, 100);

	// stop flickering after 3 seconds
	setTimeout(() => {
		// Stop Interval timer
		clearInterval(interval);

		// Dubble flickering
		setTimeout(() => {
			const randomTag = pickRandomTag();
			highlightTag(randomTag);
		}, 100);
	}, times * 100);
}

function pickRandomTag() {
	// Get list of tags, this is dynamic cant't be done before
	const tags = document.querySelectorAll('.tag');
	// Return a random number 0 - lenght -1
	return tags[Math.floor(Math.random() * tags.length)];
}

function highlightTag(tag) {
	tag.classList.add('highlight');
}

function unHighlightTag(tag) {
	tag.classList.remove('highlight');
}
