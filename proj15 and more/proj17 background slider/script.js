// Define DOM constants
const body = document.body;
const slides = document.querySelectorAll('.slide');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

// Set both background and active image to the same
let activeSlide = 0;

// Set active image
function setActiveSlide() {
	// First remove 'active' class from any/all slides
	slides.forEach((slide) => slide.classList.remove('active'));

	// add 'active' class to activeSlide
	slides[activeSlide].classList.add('active');
}

// Listen to arrow click
rightBtn.addEventListener('click', () => {
	activeSlide++;

	if (activeSlide > slides.length - 1) {
		activeSlide = 0;
	}
	setBgToBody();
	setActiveSlide();
});

leftBtn.addEventListener('click', () => {
	activeSlide--;

	if (activeSlide < 0) {
		activeSlide = slides.length - 1;
	}
	setBgToBody();
	setActiveSlide();
});

// Set background image - kan man göra sist
setBgToBody();

function setBgToBody() {
	body.style.backgroundImage = slides[activeSlide].style.backgroundImage;
}
