const form = document.getElementById('form');
const input = document.getElementById('input');
const todosUL = document.getElementById('todos');

//Check local storage - done last
const todos = JSON.parse(localStorage.getItem('todos'));

if (todos) {
	todos.forEach((todo) => addTodo(todo));
}

// listen for submit
form.addEventListener('submit', (e) => {
	e.preventDefault();

	addTodo();
});

function addTodo(todo) {
	let todoText = input.value;

	// Add todo from local storage
	if (todo) {
		todoText = todo.text;
	}

	if (todoText) {
		const todoEl = document.createElement('li');
		if (todo && todo.completed) {
			todoEl.classList.add('completed');
		}

		todoEl.innerText = todoText;

		// Handle completed
		todoEl.addEventListener('click', () => {
			todoEl.classList.toggle('completed');
            // Update LS
			updateLS();
		});

		// Handle deletion (right-click)
		todoEl.addEventListener('contextmenu', (e) => {
			// Prevent rightclick menu to appear
			e.preventDefault();
			todoEl.remove();
            // Update LS
			updateLS();
		});

		console.log(todoEl);
		todosUL.appendChild(todoEl);

		console.log(todosUL);

		input.value = '';

		// Update local storage
		updateLS();
	}
}

function updateLS() {
	todosEl = document.querySelectorAll('li');

	const todos = [];

	todosEl.forEach((todoEl) => {
		todos.push({
			text: todoEl.innerText,
			completed: todoEl.classList.contains('completed'),
		});
	});

	console.log(todos);

	localStorage.setItem('todos', JSON.stringify(todos));
}
