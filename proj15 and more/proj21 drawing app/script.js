// Using Canvas API

const canvas = document.getElementById('canvas');
const increaseBtn = document.getElementById('increase');
const decreaseBtn = document.getElementById('decrease');
const clearEl = document.getElementById('clear');
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');

const ctx = canvas.getContext('2d');

let size = 10;
let color = 'black';
let isPressed = false;
let x;
let y;

// Circle
function drawCircle(x, y) {
	ctx.beginPath();
	ctx.arc(x, y, size, 0, Math.PI * 2); // Outer circle

	ctx.fillStyle = color;
	ctx.fill();
}

// Line
function drawLine(x1, y1, x2, y2) {
	ctx.beginPath();
	ctx.moveTo(x1, y1); // Move to without draw
	ctx.lineTo(x2, y2); // Draw line to
	ctx.strokeStyle = color;
	ctx.lineWidth = size * 2; // same size on circle and line
	ctx.stroke();
}

// For trying out function
//drawCircle(100, 200);

//drawLine(300, 300, 200, 500);

// Mouse down
canvas.addEventListener('mousedown', (e) => {
	isPressed = true;

	// Get coordinates
	x = e.offsetX;
	y = e.offsetY;
});

// Mouse up
canvas.addEventListener('mouseup', (e) => {
	isPressed = false;

	// Get coordinates
	x = undefined;
	y = undefined;
});

// Mouse move
canvas.addEventListener('mousemove', (e) => {
	if (isPressed) {
		// Get coordinates on to where we are drawing
		x2 = e.offsetX;
		y2 = e.offsetY;

		//pen down make a round circle from start
		drawCircle(x2, y2);

		drawLine(x, y, x2, y2);

		// after each move remember where we moved to
		x = x2;
		y = y2;
	}
});

// Update size info on screen
function updateSizeOnScreen() {
	sizeEl.innerText = size;
}

// change color value
colorEl.addEventListener('change', (e) => (color = e.target.value));

// Increase line size
increaseBtn.addEventListener('click', () => {
	size += 5;

	// Limit to 50
	if (size > 50) {
		size = 50;
	}

	updateSizeOnScreen();
});

// decrease line size
decreaseBtn.addEventListener('click', () => {
	size -= 5;

	// Limit to 50
	if (size < 5) {
		size = 5;
	}

	updateSizeOnScreen();
});

// Clear canvas
clearEl.addEventListener('click', () =>
	ctx.clearRect(0, 0, canvas.width, canvas.height)
);
