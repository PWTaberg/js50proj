const buttons = document.querySelectorAll('.ripple');

buttons.forEach((button) => {
	button.addEventListener('click', function (e) {
		// NOT USE ARROW function beacuse we use THIS in this function

		// x, y coordinates within the viewport - not the button
		const x = e.clientX;
		const y = e.clientY;

		// the buttons position
		const buttonTop = e.target.offsetTop;
		const buttonLeft = e.target.offsetLeft;

		// the relaive position
		const xInside = x - buttonLeft;
		const yInside = y - buttonTop;

		// Create the span
		const circle = document.createElement('span');

		// Add circle to the circle
		circle.classList.add('circle');
		// Add style to the span
		circle.style.top = yInside + 'px';
		circle.style.left = xInside + 'px';

		// append it to the element that was clicked on
		// THIS IS USED - therefore the inner function cannot be an arrow function
		this.appendChild(circle);

		console.log(x, y);
		console.log(buttonLeft, buttonTop);
		console.log(xInside, yInside);

		// We need to remove the element we just added otherwise the DOM will waste memory
		setTimeout(() => circle.remove(), 500);
	});
});
