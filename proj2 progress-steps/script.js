// Step 1

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// List of all circles
const allCircles = document.querySelectorAll('.circle');

// the active step
let currentActive = 1;

// next button, make next step active
next.addEventListener('click', () => {
	// Make sure you can't go by last steå
	currentActive++;
	if (currentActive > allCircles.length) {
		currentActive = allCircles.length;
	}

	console.log(currentActive);
	updateProgress();
});

// prev button, do the opposite
prev.addEventListener('click', () => {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}

	updateProgress();
});

function updateProgress() {
	// update active on circles
	updateCircles();

	updateProgressBar();

	// Enable / Disable buttons
	updateButtons();
}

function updateCircles() {
	allCircles.forEach((circle, index) => {
		console.log(index, '/', currentActive);

		// Check if circle index is less than currentActive
		if (index < currentActive) {
			// Add active to circle
			circle.classList.add('active');
		} else {
			// remove active
			circle.classList.remove('active');
		}
	});
}

function updateProgressBar() {
	// Get list of .active cilrcles
	const allActiveCircles = document.querySelectorAll('.active');

	// define length of progressbar
	console.log('actives', allActiveCircles.length);
	console.log('circles', allCircles.length);

	// progress in procent

	//let progressbarWidth = (actives.length / circles.length) * 100;
	// If number of circles are 4, then number of bars is 3

	let progressbarWidth =
		((allActiveCircles.length - 1) / (allCircles.length - 1)) * 100;


	// Update progress width
	progress.style.width = `${progressbarWidth}%`;

	console.log('width ', progressbarWidth);
}

function updateButtons() {
	if (currentActive === 1) {
		// Disable PREV button
		console.log('currentActive === 1');
		prev.disabled = true;
	} else if (currentActive === allCircles.length) {
		// Disable NEXT button
		console.log('currentActive === length');
		next.disabled = true;
	} else {
		// Enable PREV & NEXT button
		console.log('currentActive between');
		prev.disabled = false;
		next.disabled = false;
	}

	// check  button html
	console.log(prev);
	console.log(next);
}
