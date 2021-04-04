const hourEl = document.querySelector('.hour');
const minuteEl = document.querySelector('.minute');
const secondEl = document.querySelector('.needle.second');
const timeEl = document.querySelector('.time');
const dateEl = document.querySelector('.date');
const toggle = document.querySelector('.toggle');
const clockEl = document.querySelector('.clock');
const clockContainerEl = document.querySelector('.clock-container');

const timeToggle = document.querySelector('.timeToggle');

const days = [
	'Sunday',
	'Monday',
	'Tuesday',
	'Wednesday',
	'Thursday',
	'Friday',
	'Saturday',
];

const months = [
	'Jan',
	'Feb',
	'Mar',
	'Apr',
	'May',
	'Jun',
	'Jul',
	'Aug',
	'Sep',
	'Oct',
	'Nov',
	'Dec',
];

toggle.addEventListener('click', (e) => {
	const html = document.querySelector('html');
	if (html.classList.contains('dark')) {
		html.classList.remove('dark');
		e.target.innerHTML = 'Dark mode';
	} else {
		html.classList.add('dark');
		e.target.innerHTML = 'Light mode';
	}
});

function setTime() {
	const time = new Date();

	const month = time.getMonth();
	const day = time.getDay();
	const date = time.getDate();
	const hours = time.getHours();
	const hoursForClock = hours % 12;
	const minutes = time.getMinutes();
	const seconds = time.getSeconds();
	const ampm = hours >= 12 ? 'PM' : 'AM';


	// If hour-needle is > 0, then allow transition
	if (scale(hours, 0, 11, 0, 360) > 1) {
		minuteEl.style.transition = '';
	}
	// if hours-needle > 359, then turn of transition
	if (scale(hours, 0, 11, 0, 360) > 359) {
		minuteEl.style.transition = 'none';
	}
	// Get hour 0-360
	hourEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		hoursForClock,
		0,
		11,
		0,
		360
	)}deg)`;

	// If minute-needle is > 0, then allow transition
	if (scale(minutes, 0, 59, 0, 360) > 1) {
		minuteEl.style.transition = '';
	}
	// if seconds-needle > 359, then turn of transition
	if (scale(minutes, 0, 59, 0, 360) > 359) {
		minuteEl.style.transition = 'none';
	}

	// get minute 0-360
	minuteEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		minutes,
		0,
		59,
		0,
		360
	)}deg)`;

	// If seconds-needle is > 0, then allow transition
	if (scale(seconds, 0, 59, 0, 360) > 1) {
		secondEl.style.transition = '';
	}

	// if seconds-needle > 359, then turn of transition
	if (scale(seconds, 0, 59, 0, 360) > 359) {
		secondEl.style.transition = 'none';
	}
	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	secondEl.style.transform = `translate(-50%, -100%) rotate(${scale(
		seconds,
		0,
		59,
		0,
		360
	)}deg)`;

	timeEl.innerHTML = `${hoursForClock}:${
		minutes < 10 ? `0${minutes}` : minutes
	} ${ampm}`;

	dateEl.innerHTML = `${days[day]}, ${months[month]} <span class="circle">${date} </span>`;
}

// From stack overflow
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};

setTime();

setInterval(setTime, 1000);

console.log(scale(59, 0, 59, 0, 360));
console.log(scale(0, 0, 59, 0, 360));
