const resultEl = document.getElementById('result');
const lengthEl = document.getElementById('length');
const uppercaseEl = document.getElementById('uppercase');
const lowercaseEl = document.getElementById('lowercase');
const numbersEl = document.getElementById('numbers');
const symbolsEl = document.getElementById('symbols');
const generateEl = document.getElementById('generate');
const clipboardEl = document.getElementById('clipboard');

const randomFunc = {
	lower: getRandomLower,
	upper: getRandomUpper,
	number: getRandomNumber,
	symbol: getRandomSymbol,
};

clipboardEl.addEventListener('click', () => {
	const textarea = document.createElement('textarea');
	const password = resultEl.innerText;

	// If no password in clipboard -> return
	if (!password) {
		return;
	}

    // Create a text area
	textarea.value = password;
	document.body.appendChild(textarea);
    // ?
	textarea.select();
    // copy to clip board
	document.execCommand('copy');
    // remove text area
	textarea.remove();
    
	alert('Password copied to clipboard!');
});

generateEl.addEventListener('click', () => {
	// + is used for parsing to number
	const length = +lengthEl.value;

	const hasUpper = uppercaseEl.checked;
	const hasLower = lowercaseEl.checked;
	const hasNumber = numbersEl.checked;
	const hasSymbol = symbolsEl.checked;

	resultEl.innerText = generatePassword(
		hasUpper,
		hasLower,
		hasNumber,
		hasSymbol,
		length
	);
});

function generatePassword(upper, lower, number, symbol, length) {
	let generatedPassword = '';
	const typesCount = upper + lower + number + symbol;
	// Filter out those who are false
	const typesArr = [{ upper }, { lower }, { number }, { symbol }].filter(
		(item) => Object.values(item)[0]
	);

	if (typesCount === 0) {
		return '';
	}

	for (let i = 0; i < length; i += typesCount) {
		typesArr.forEach((type) => {
			const funcName = Object.keys(type)[0];
			generatedPassword += randomFunc[funcName]();
		});
	}

	const finalPassword = generatedPassword.slice(0, length);

	return finalPassword;
}

function getRandomLower() {
	// lower 97 - 122 === 26 letters
	return String.fromCharCode(Math.floor(Math.random() * 26) + 97);
}

function getRandomUpper() {
	// upper 65 - 96 === 26 letters
	return String.fromCharCode(Math.floor(Math.random() * 26) + 65);
}

function getRandomNumber() {
	// number 48 - 96 === 26 letters
	return String.fromCharCode(Math.floor(Math.random() * 10) + 48);
}

function getRandomSymbol() {
	const symbols = '!@#$^&*(){}[]/,.';
	return symbols[Math.floor(Math.random() * symbols.length)];
}
