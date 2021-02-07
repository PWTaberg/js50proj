const loveMe = document.querySelector('.loveMe');
const times = document.querySelector('#times');

console.log('Go');
console.log(loveMe);

let clickTime = 0;
loveMe.addEventListener('click', (e) => {
	if (clickTime === 0) {
		clickTime = new Date().getTime();
		console.log(clickTime);
	} else {
		let clickTime2 = new Date().getTime();
		if (clickTime2 - clickTime < 800) {
			// double click!
			createHeart(e);
			clickTime = 0;
		} else {
			console.log('not double');
			clickTime = new Date().getTime();
		}
	}
});

const createHeart = (e) => {
	heart = document.createElement('i');
	heart.classList.add('fas');
	heart.classList.add('fa-heart');

	const x = e.clientX;
	const y = e.clientY;

	const offsetLeft = e.target.offsetLeft;
	const offsetTop = e.target.offsetTop;

	const xInside = x - offsetLeft;
	const yInside = x - offsetTop;

	console.log(xInside, yInside);

	heart.style.top = `${yInside}px`;
	heart.style.left = `${xInside}px`;

	loveMe.appendChild(heart);
};
