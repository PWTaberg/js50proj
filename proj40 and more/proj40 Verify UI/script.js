const codes = document.querySelectorAll('.code');

codes[0].focus();

codes.forEach((code, idx) => {
	code.addEventListener('keydown', (e) => {
		if (e.key >= 0 && e.key <= 9) {
			codes[idx].value = '';

			// Code is faster than display
			// timeout will let update take place first before moving to next
			if (idx < codes.length - 1) {
				setTimeout(() => codes[idx + 1].focus(), 10);
				//codes[idx + 1].focus();
			}
		} else if (e.key === 'Backspace') {
			if (idx > 0) {
				setTimeout(() => codes[idx - 1].focus(), 10);
			}
		}
	});
});
