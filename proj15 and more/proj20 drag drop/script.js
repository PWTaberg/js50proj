const fill = document.querySelector('.fill');
const empties = document.querySelectorAll('.empty');

fill.addEventListener('dragstart', dragStart);
fill.addEventListener('dragend', dragEnd);

for (const empty of empties) {
	empty.addEventListener('dragover', dragOver);
	empty.addEventListener('dragenter', dragEnter);
	empty.addEventListener('dragleave', dragLeave);
	empty.addEventListener('drop', dragDrop);
}

function dragStart() {
	// add class hold -> making the edges white of the dragged image
	this.className += ' hold';
	// making the old square white
	setTimeout(() => (this.className = 'invisible'), 0);
}

function dragEnd() {
	this.className = 'fill';
}

function dragOver(e) {
	// Needed for dragNdrop to work
	e.preventDefault();
}

function dragEnter(e) {
	// Needed for dragNdrop to work
	e.preventDefault();
	// Give the hover effect when enter
	this.className += ' hovered';
}

function dragLeave() {
	// make sure to clear the over effect by making the class 'empty'
	this.className = 'empty';
}

function dragDrop() {
	// making that class is empty avter drop
	this.className = 'empty';
	// add the fill item into this
	this.append(fill);
}
