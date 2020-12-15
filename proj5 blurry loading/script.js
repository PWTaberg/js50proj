const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

let timeInterval = setInterval(blurring, 30);

function blurring() {
	load++;

	if (load > 99) {
		clearInterval(timeInterval);
	}
	//console.log(`${load}%`);
	//console.log(loadText);
	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);

	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Map 0-100 => 1.0 - 0.0
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
