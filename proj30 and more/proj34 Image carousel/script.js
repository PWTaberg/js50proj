const imgs = document.getElementById('imgs');
const leftBtn = document.getElementById('left');
const rightBtn = document.getElementById('right');

const img = document.querySelectorAll('#imgs img');

let idx = 0;

let interval = setInterval(run, 2000);

function run() {
	idx++;

	changeImage();
}

function changeImage() {
	if (idx > img.length - 1) {
		idx = 0;
		imgs.style.transition = 'none';
	} else if (idx < 0) {
		idx = img.length - 1;
	} else {
		imgs.style.transition = `transform 0.5s ease-in-out`;
	}

	imgs.style.transform = `translateX(${-idx * 500}px)`;
}

rightBtn.addEventListener('click', () => {
	idx++;
	changeImage();
	resetIntervall();
});

leftBtn.addEventListener('click', () => {
	idx--;
	changeImage();
	resetIntervall();
});

function resetIntervall() {
	clearInterval(interval);

	interval = setInterval(run, 2000);
}
