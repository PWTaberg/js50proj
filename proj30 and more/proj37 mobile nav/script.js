const contents = document.querySelectorAll('.content');
const listItems = document.querySelectorAll('nav ul li');

console.log(contents);
console.log(listItems);

listItems.forEach((item, idx) => {
	item.addEventListener('click', () => {
		hideAllContents();
		hideAllItems();

		item.classList.add('active');

		contents[idx].classList.add('show');
	});
});

function hideAllContents() {
	console.log('hideContents');
	contents.forEach((content) => content.classList.remove('show'));
}

function hideAllItems() {
	console.log('hideItems');
	listItems.forEach((item) => item.classList.remove('active'));
}
