const bg = document.querySelector('.bg');
const loadText = document.querySelector('.loading-text');

let load = 0;

// setInterval( function, milisecond)
let timeInterval = setInterval(blurring, 30);

function blurring() {
	console.log(load);
	load++;

	if (load > 99) {
		// Stopp timer when reaching 100
		clearInterval(timeInterval);
	}

	// calculate blur for each load value 0-100
	//console.log(`${load}%`);
	//console.log(loadText);
	console.log('opacity:', scale(load, 0, 100, 1, 0));
	console.log('blur:', scale(load, 0, 100, 30, 0));

	loadText.innerText = `${load}%`;
	loadText.style.opacity = scale(load, 0, 100, 1, 0);

	bg.style.filter = `blur(${scale(load, 0, 100, 30, 0)}px)`;
}

// Map 0-100 => 1.0 - 0.0,
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

//https://stackoverflow.com/questions/10756313/javascript-jquery-map-a-range-of-numbers-to-another-range-of-numbers
