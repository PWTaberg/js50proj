const boxesContainer = document.getElementById('boxes');
const btn = document.getElementById('btn');

// <div class="box" style='background-position: 0 0'></div>
function createBoxes() {
	for (let row = 0; row < 4; row++) {
		for (let col = 0; col < 4; col++) {
			const box = document.createElement('div');
			box.classList.add('box');
			box.style.backgroundPosition = `${-col * 125}px ${-row * 125}px`;
			boxesContainer.appendChild(box);
			//console.log(box);
		}
	}
}

createBoxes();

btn.addEventListener('click', () => boxesContainer.classList.toggle('big'));
