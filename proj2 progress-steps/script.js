const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circles = document.querySelectorAll('.circle');

let currentActive = 1;

next.addEventListener('click', () => {
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	updateProgress();
});

prev.addEventListener('click', () => {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}

	updateProgress();
});

function updateProgress() {
	// update active on circles
	circles.forEach((circle, index) => {
		if (index < currentActive) {
			circle.classList.add('active');
		} else {
			circle.classList.remove('active');
		}
	});

	const actives = document.querySelectorAll('.active');

	// define length of progressbar

	// progress in procent
	let progressbarWidth = ((actives.length - 1) / (circles.length - 1)) * 100;

	progress.style.width = `${progressbarWidth}%`;

	//	progress.style.width =((actives.length - 1) / (circles.length - 1)) * 100 + '%';

	if (currentActive === 1) {
		console.log('currentActive === 1');

		prev.disabled = true;
	} else if (currentActive === circles.length) {
		console.log('currentActive === length');

		next.disabled = true;
	} else {
		console.log('currentActive between');

		prev.disabled = false;
		next.disabled = false;
	}
}
