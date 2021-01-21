// Step 1

const progress = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
// List of all circles
const circles = document.querySelectorAll('.circle');

// Step 2

// the active step
let currentActive = 1;

// Step 3

// next button, make next step active
next.addEventListener('click', () => {
	// syep 3.1

	// step 3.3
	// Make sure you can't go by last steå
	currentActive++;
	if (currentActive > circles.length) {
		currentActive = circles.length;
	}

	// step 3.2
	console.log(currentActive);

	// Step 5
	updateProgress();
});

// Step 4
// prev button, do the opposite
prev.addEventListener('click', () => {
	currentActive--;
	if (currentActive < 1) {
		currentActive = 1;
	}
	// Step 5
	updateProgress();
});

// Step 5
function updateProgress() {
	// 5.1 forEach circle
	// update active on circles
	circles.forEach((circle, index) => {
		// 5.2 print index / currentActive
		console.log(index, '/', currentActive);
		// 5.3
		// Check if circle index is less than currentActive
		if (index < currentActive) {
			// Add active
			circle.classList.add('active');
		} else {
			// remove active
			circle.classList.remove('active');
		}
	});

	// step 6
	// Get list of .active
	const actives = document.querySelectorAll('.active');

	// step 6.1
	// define length of progressbar
	console.log('actives', actives.length);
	console.log('circles', circles.length);

	// progress in procent
	// 6.2
	//let progressbarWidth = (actives.length / circles.length) * 100;

	let progressbarWidth = ((actives.length - 1) / (circles.length - 1)) * 100;

	// 6.3
	// Update progress width
	progress.style.width = `${progressbarWidth}%`;

	// Step 7
	// Enable / Disable buttons
	if (currentActive === 1) {
		// Disable PREV button
		console.log('currentActive === 1');
		prev.disabled = true;
	} else if (currentActive === circles.length) {
		// Disable NEXT button
		console.log('currentActive === length');
		next.disabled = true;
	} else {
		// Enable PREV & NEXT button
		console.log('currentActive between');
		prev.disabled = false;
		next.disabled = false;
	}
}
