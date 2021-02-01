// Simplify, skip random

const button = document.getElementById('button');
const toasts = document.getElementById('toasts');

const messages = [
	'Message One',
	'Message Two',
	'Message Three',
	'Message Four',
];

const types = ['info', 'success', 'error'];

button.addEventListener('click', () => createNotification());

function createNotification(message = null, type = null) {
	// Create div
	const notif = document.createElement('div');
	// add class toast
	notif.classList.add('toast');
	// add message
	notif.classList.add(type ? type : getRandomType());

	notif.innerText = message ? message : getRandomMessage();

	toasts.appendChild(notif);

	setTimeout(() => {
		notif.remove();
	}, 3000);
}

function getRandomMessage() {
	//  return a random message
	return messages[Math.floor(Math.random() * messages.length)];
}

function getRandomType() {
	return types[Math.floor(Math.random() * types.length)];
}
