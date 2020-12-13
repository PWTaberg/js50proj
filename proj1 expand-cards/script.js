const panels = document.querySelectorAll('.panel');

panels.forEach((panel, index) => {
	panel.addEventListener('click', () => {
		// console.log(index);
		removeActiveClasses();
		panel.classList.add('active');
	});
});

function removeActiveClasses() {
	panels.forEach((panel) => {
		panel.classList.remove('active');
	});
}

console.log('document', document);

console.log('panels', panels);

console.log('window', window);
