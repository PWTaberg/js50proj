const ratings = document.querySelectorAll('.rating');
const ratingsContainer = document.querySelector('.ratings-container');
const sendBtn = document.querySelector('#send');
const panel = document.querySelector('#panel');

let selectedRating = 'Satisfied';

// Using panel will cause an error because panel structure has change
ratingsContainer.addEventListener('click', (e) => {
	console.log('click');

	// It is the img container that is of class rating
	if (e.target.parentNode.classList.contains('rating')) {
		removeActive();
		e.target.parentNode.classList.add('active');
		console.log(e.target.nextElementSibling);
		selectedRating = e.target.nextElementSibling.innerHTML;
	}
});

sendBtn.addEventListener('click', (e) => {
	// Change panel so it contains the feedback instead
	panel.innerHTML = `
    <i class="fas fa-heart"></>
    <strong>Thank You!</strong>
    <br>
    <strong>Feedback: ${selectedRating} </strong>
    <p>We'll use your feedback to improve our customer support</p>
    `;
});

function removeActive() {
	ratings.forEach((rating) => rating.classList.remove('active'));
}

function removeActive2() {
	for (let i = 0; i < ratings.length; i++) {
		ratings[i].classList.remove('active');
	}
}
