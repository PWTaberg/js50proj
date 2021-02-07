const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

let clickTime = 0;
let timesClicked = 0;

loveMe.addEventListener('click', (e) => {
	// Findout if double-click
	if (clickTime === 0) {
		// Absolute first click, get tics
		clickTime = new Date().getTime();
	} else {
		// Next click click, get tics
		let clickTime2 = new Date().getTime();
		if (clickTime2 - clickTime < 800) {
			// OK - double click
			createHeart(e);
			clickTime = 0;
		} else {
			// NOT - double click, save clickTime2 as first click
			clickTime = clickTime2;
			//clickTime = new Date().getTime()
		}
	}
});

const createHeart = (e) => {
	const heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');

	// The coordinates of the click on the screen
	const x = e.clientX;
	const y = e.clientY;

	// The coordinates of the on the image
	const offsetLeft = e.target.offsetLeft;
	const offsetTop = e.target.offsetTop;

	// The relative coordinates of the click oon the image
	const xInside = x - offsetLeft;
	const yInside = y - offsetTop;

	heart.style.top = `${yInside}px`;
	heart.style.left = `${xInside}px`;

	loveMe.appendChild(heart);

	times.innerHTML = ++timesClicked;

	setTimeout(() => heart.remove(), 1000);
};
