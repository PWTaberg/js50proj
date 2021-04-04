// Simplify, skip random

const buttonInfo = document.getElementById('buttonInfo');
const buttonError = document.getElementById('buttonError');
const buttonSuccess = document.getElementById('buttonSuccess');

const toasts = document.getElementById('toasts');

// Not used
const messages = [
	'Message One',
	'Message Two',
	'Message Three',
	'Message Four',
];

// Not really needed
const types = ['info', 'success', 'error'];

// button.addEventListener('click', () => createNotification());
buttonInfo.addEventListener('click', () =>
	createNotification('Info message', 'info')
);
buttonSuccess.addEventListener('click', () =>
	createNotification('Success message', 'success')
);
buttonError.addEventListener('click', () =>
	createNotification('Error message', 'error')
);

function createNotification(message = null, type = null) {
	// Create div
	const notif = document.createElement('div');
	// add class toast
	notif.classList.add('toast');
	// add message

	notif.classList.add(type);

	notif.innerText = message;

	// Add tost to toasts div
	toasts.appendChild(notif);

	// Make it disapear in 3 secs
	setTimeout(() => {
		notif.remove();
	}, 3000);
}

// Not used
function getRandomMessage() {
	//  return a random message
	return messages[Math.floor(Math.random() * messages.length)];
}

// Not used
function getRandomType() {
	return types[Math.floor(Math.random() * types.length)];
}
