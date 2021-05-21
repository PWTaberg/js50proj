// console.log(document)

// Get a list of all panels
const panels = document.querySelectorAll('.panel');

console.log('panel with index=2::', panels[2]);
console.log('length -  number of panels::', panels.length);

// Set up listners for each panel  ( 5 listeners )
/*
panels.forEach((panel, index) => {
	console.log('panel with index::', index, panel);
	panel.addEventListener('click', () => {
		console.log('click - within container');
		removeActiveClasses();

		panel.classList.add('active');
	});
});
*/

// Classic for loop instead

for (index = 0; index < panels.length; index++) {
	console.log('classic for loop', index);

	const thePanel = panels[index];
	panels[index].addEventListener('click', (e) => {
		console.log('click - within container');
		removeActiveClasses();

		e.target.classList.add('active');
	});
}


// Remove all active classes
function removeActiveClasses() {
	const activePanels = document.querySelectorAll('.panel.active');
	//console.log('activePanels', activePanels);
	activePanels.forEach((panel) => {
		panel.classList.remove('active');
	});
}

/* modified Step 2*/

/* only one eventListener, event bubbeling */
const container = document.querySelector('.container');
/*
container.addEventListener('click', (e) => {
	console.log('click within container');

	console.log('e', e);
	if (e.target.classList.contains('panel')) {
		console.log('click within a panel');

		removeActiveClasses();

		e.target.classList.add('active');
	} else {
		console.log('click outside of panel');
	}
});
*/

const headerTitle = document.getElementById('H-T');
headerTitle.innerHTML = '<h1>Hello</h1>';
console.log(headerTitle);
