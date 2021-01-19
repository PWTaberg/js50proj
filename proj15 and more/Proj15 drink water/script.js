const smallCups = document.querySelectorAll('.cup-small');
const liters = document.getElementById('liters');
const percentage = document.getElementById('percentage');
const remained = document.getElementById('remained');

// Do this third
updateBigCup();

// Start here
// Small cups
smallCups.forEach((cup, cupIndex1) => {
	cup.addEventListener('click', () => highlightCups(cupIndex1));
});

// Highlight cup that is clicked on as well as all cups before
function highlightCups(cupIndex1) {
	// Do this second

	// Toggle: check if cup already is marked as full
	// If so change the index so it points on the cup before
	if (
		smallCups[cupIndex1].classList.contains('full') &&
		!smallCups[cupIndex1].nextElementSibling.classList.contains('full')
	) {
		cupIndex1--;
	}

	// Do this first

	// Go through all cups to see which cup-index
	smallCups.forEach((cup, cupIndex2) => {
		if (cupIndex2 <= cupIndex1) {
			cup.classList.add('full');
		} else {
			cup.classList.remove('full');
		}
	});
	// In step three
	// Update Big cup
	updateBigCup();
}

// Do this third
// Big cup
function updateBigCup() {
	// Check how many cups are full
	const fullCups = document.querySelectorAll('.cup.cup-small.full').length;
	// check total amount of cups
	const totalCups = document.querySelectorAll('.cup.cup-small').length;
	console.log(fullCups, '/', totalCups);

	// Do this forth
	// Adjust volume in Big cup
	// according to number of full small cups
	if (fullCups === 0) {
		// Empty Big cup if no cups are full
		percentage.style.visibility = 'hidden';
		percentage.style.height = 0;
	} else {
		// Adjust height depending on number of full cups
		percentage.style.visibility = 'visible';
		percentage.style.height = `${(fullCups / totalCups) * 330}px`;
		percentage.innerText = `${(fullCups / totalCups) * 100}%`;
	}
	// Do this last
	// Adjust Remained text according to number of full cups
	if (fullCups === totalCups) {
		remained.style.visibility = 'hidden';
		remained.style.height = 0;
	} else {
		remained.style.visibility = 'visible';
		liters.innerText = `${2 - (250 * fullCups) / 1000}L`;
	}
}
