const counters = document.querySelectorAll('.counter');

const updateCounter = (counter) => {
	//data-target
	const dataTarget = Number(counter.getAttribute('data-target'));
	//	const dataTarget = Number(counter.getAttribute('data-target'));
	//console.log('dataTarget', dataTarget);

	// displayed number
	const dispNumber = Number(counter.innerText);
	//const dispNumber = +counter.innerText;
	//console.log('dispNumber', dispNumber);

	const increment = dataTarget / 500;

	if (dispNumber < dataTarget) {
		// update innerText with an increment
		console.log('Again');
		counter.innerText = `${Math.ceil(dispNumber + increment)}`;
		setTimeout(updateCounter(counter), 1);
	} else {
		console.log('ready');
		counter.innerText = dataTarget;
	}
};

counters.forEach((counter) => {
	console.log('loop');
	counter.innerText = '0';

	updateCounter(counter);
});
