const range = document.getElementById('range');

range.addEventListener('input', (e) => {
	console.log('range');
	const value = +e.target.value;
	const label = e.target.nextElementSibling;

	const range_width = getComputedStyle(e.target).getPropertyValue('width');

	const label_width = getComputedStyle(label).getPropertyValue('width');

	num_width = +range_width.substring(0, range_width.length - 2);
	console.log(num_width);

	num_label_width = +label_width.substring(0, label_width.length - 2);

	const max = +e.target.max;
	const min = +e.target.min;

	left = value * (num_width / max) - num_label_width / 2;

	//left = value * (num_width / max) - scale(value, min, max, 10, -10);

	console.log(left);

	label.style.left = `${left}px`;

	label.innerHTML = value;
});

// From stack overflow
const scale = (num, in_min, in_max, out_min, out_max) => {
	return ((num - in_min) * (out_max - out_min)) / (in_max - in_min) + out_min;
};
