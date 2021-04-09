// console.log(document)

// Step 1 selects anything using css
// Get a list of all panels
const panels = document.querySelectorAll('.panel');
// console.log(panels)
console.log(panels);

// Step 2
//Get a list of panels
/* See modified step 2
panels.forEach((panel, index) => {
	panel.addEventListener('click', () => {
		// step 2.2
		removeActiveClasses();

		// step 2.1
		panel.classList.add('active');
	});
});
*/
// Step 2.2
// Remove all active classes
function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}

/* modified Step 2*/

/* only one eventListener, event bubbeling */
const container = document.querySelector('.container');

container.addEventListener('click', (e) => {
	if (e.target.classList.contains('panel')) {
		// step 2.2
		removeActiveClasses();

		e.target.classList.add('active');
	} else {
		console.log('this is outside the panel');
	}
});
