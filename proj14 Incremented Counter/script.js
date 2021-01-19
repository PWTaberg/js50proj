const counters = document.querySelectorAll('.counter');

counters.forEach((counter) => {
	counter.innerText = '0';
	//data-target
	//const dataTarget = +counter.getAttribute('data-target');
	// displayed number
	//const dispNumber = +counter.innerText;

	const updateCounter = () => {
		//data-target
		const dataTarget = Number(counter.getAttribute('data-target'));
		//	const dataTarget = Number(counter.getAttribute('data-target'));

		// displayed number
		const dispNumber = Number(counter.innerText);
		//const dispNumber = +counter.innerText;

		const increment = dataTarget / 500;

		if (dispNumber < dataTarget) {
			// update innerText with an increment
			counter.innerText = `${Math.ceil(dispNumber + increment)}`;
			setTimeout(updateCounter, 1);
		} else {
			counter.innerText = dataTarget;
		}
	};

	updateCounter();
	console.log('bye');
});

// Step 3 add transition on opacity
