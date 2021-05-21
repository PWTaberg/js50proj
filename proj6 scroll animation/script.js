const boxes = document.querySelectorAll('.box');

console.log(boxes);

window.addEventListener('scroll', checkBoxes);

checkBoxes();

function checkBoxes() {
	console.log('trigger bottom', (window.innerHeight / 5) * 4);
	console.log('window.innerHeight', window.innerHeight);
	const triggerBottom = (window.innerHeight / 5) * 4;

	boxes.forEach((box) => {
		// Find out where top of box is
		const boxTop = box.getBoundingClientRect().top;
		console.log('triggerBottom ', triggerBottom, 'boxTop', boxTop);

		if (boxTop < triggerBottom) {
			box.classList.add('show');
		} else {
			box.classList.remove('show');
		}
	});
}
