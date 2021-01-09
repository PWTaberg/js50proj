const maxTime = document.getElementById('maxTime');
const maxTimeSec = document.getElementById('maxTimeSec');
const minTime = document.getElementById('minTime');
const minTimeSec = document.getElementById('minTimeSec');
const readMaxTimeStr = document.getElementById('readMaxTimeStr');
const readMinTimeStr = document.getElementById('readMinTimeStr');
const timeToSec = document.getElementById('timeToSec');

const resultNumber = document.getElementById('resultNumber');
const readNumber = document.getElementById('readNumber');
const readNumberStr = document.getElementById('readNumberStr');
const readNumberStrDec = document.getElementById('readNumberStrDec');
const resulTimeInput = document.getElementById('resultTimeInput');
const secToTime = document.getElementById('secToTime');

// Time String to Number
timeToSec.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(maxTime);
	console.log(maxTime.value);

	// validation
	let timeFormatIsOK = true;
	let minMaxIsOK = true;
	let minValueToLow = false;
	let minValueToHigh = false;
	let maxValueToLow = false;
	let maxValueToHigh = false;

	// Check that timestring format is OK

	if (validTimeStr(maxTime.value) === true) {
		readMaxTimeStr.innerText = maxTime.value;
	} else {
		timeFormatIsOk = false;
		readMaxTimeStr.innerText = 'Invalid time format, use hh:mm:ss ';
	}

	if (validTimeStr(minTime.value) === true) {
		readMinTimeStr.innerText = minTime.value;
	} else {
		timeFormatIsOk = false;
		minTimeSec.innerText = 'Invalid time format, use hh:mm:ss ';
	}

	if (timeFormatIsOK) {
		// Convert Time Strings to numbers
		let minTimeInSec = timeInSec(minTime.value);
		let maxTimeInSec = timeInSec(maxTime.value);

		if (toHigh(minTimeInSec) === true) {
			console.log('to High');
			minValueToHigh = true;
		}

		if (toLow(minTimeInSec) === true) {
			console.log('to Low');
			minValueToLow = true;
		}

		if (toHigh(maxTimeInSec) === true) {
			console.log('to High');

			maxValueToHigh = true;
		}

		if (toLow(maxTimeInSec) === true) {
			console.log('to low');

			maxValueToLow = true;
		}
		// check if min < max
		if (validMinMax(minTimeInSec, maxTimeInSec) === true) {
			maxTimeSec.innerText = maxTimeInSec;
			minTimeSec.innerText = minTimeInSec;
		} else {
			minMaxIsOK = false;
			maxTimeSec.innerText = 0;
			minTimeSec.innerText = 0;
			maxTimeSec.innerText = 'Min Time should be less than Max Time';
			minTimeSec.innerText = 'Min Time should be less than Max Time';
		}

		// check if any value is to low
		if (minValueToLow === true) {
			minTimeSec.innerText = 'The race is about running, not flying';
		}
		if (maxValueToLow === true) {
			maxTimeSec.innerText = 'The race is about running, not flying';
		}
		// check if any value is to high
		if (minValueToHigh === true) {
			minTimeSec.innerText = 'The race is about running, not crawling';
		}
		if (maxValueToHigh === true) {
			maxTimeSec.innerText = 'The race is about running, not crawling';
		}
	}
});

// Used for validating that a complete Time String is entered -  modern JS
const validTimeStr = (timeStr) => {
	return timeStr.length === 8 ? true : false;
};

// Used for validating that a complete Time String is entered - old fashioned JS
function validTimeStr2(timeStr) {
	if (timeStr.length === 8) {
		return true;
	} else {
		return false;
	}
}

// Used for validating that a number is entered
const validNumberStr = (numberStr) => {
	return numberStr.length > 0 ? true : false;
};

// Used for validating that min value less than max value
const validMinMax = (minVal, maxVal) => {
	return minVal < maxVal ? true : false;
};

// Used for validating that value not lower than 165 ~ 2.45 min
const toLow = (numVal) => {
	console.log('toLow ', numVal);
	return numVal < 165 ? true : false;
};

// Used for validating that value is not greater than 420 ~ 7 min
const toHigh = (numVal) => {
	console.log('toHigh ', numVal);
	return numVal > 420 ? true : false;
};

// Used for converting a time string to a number with seconds
const timeInSec = (timeStr) => {
	// split hh.MM.ss into an array
	const timeArray = timeStr.split(':');

	let seconds = 0;
	if (validTimeStr(timeStr)) {
		// conver 'hh'/'mm'/'ss' strings to numbers

		hhNumber = parseInt(timeArray[0], 10);
		mmNumber = parseInt(timeArray[1], 10);
		ssNumber = parseInt(timeArray[2], 10);

		seconds = hhNumber * 60 * 60 + mmNumber * 60 + ssNumber;
	}
	return seconds;
};

//Number to Time String
secToTime.addEventListener('click', (e) => {
	e.preventDefault();
	console.log(resultNumber);
	console.log(resultNumber.value);

	readNumber.innerText = 'Missing input';

	// validation
	let numberIsEntered = true;

	// Check that timestring format is OK

	if (validNumberStr(resultNumber.value) === true) {
		readNumber.innerText = resultNumber.value;
	} else {
		numberIsEntered = false;
		readNumber.innerText = 'Missing input';
	}

	if (numberIsEntered) {
		// Convert number to time string
		let resultTimeStr = secToTimeStr(resultNumber.value);

		resulTimeInput.value = resultTimeStr;
		readNumberStr.innerText = resultTimeStr;

		let useDecimals = true;
		resultTimeStr = secToTimeStr(resultNumber.value, useDecimals);

		readNumberStrDec.innerText = resultTimeStr;
	}
});

// Used for converting a number with seconds to a time string
const secToTimeStr = (numberVal, useDecimals = false) => {
	let timeLeft = numberVal;
	let hours = Math.floor(timeLeft / (60 * 60));
	timeLeft = timeLeft - hours * 60 * 60;

	let minutes = Math.floor(timeLeft / 60);
	timeLeft = timeLeft - minutes * 60;

	let seconds = Math.floor(timeLeft);
	timeLeft = timeLeft - seconds;

	let tenths = Math.floor(timeLeft * 10);
	timeLeft = timeLeft - tenths / 10;

	let hundreds = Math.floor(timeLeft * 100);
	timeLeft = timeLeft - hundreds / 100;

	let hhStr = hours < 10 ? '0' + hours.toString() : hours.toString();
	let mmStr = minutes < 10 ? '0' + minutes.toString() : minutes.toString();
	let ssStr = seconds < 10 ? '0' + seconds.toString() : seconds.toString();
	let tenthsStr = tenths.toString();
	let hundredsStr = hundreds.toString();

	let timeString = '00:00:00';
	if (useDecimals === true) {
		timeString = `${hhStr}:${mmStr}:${ssStr}.${tenthsStr}${hundredsStr}`;
	} else {
		timeString = `${hhStr}:${mmStr}:${ssStr}`;
	}
	return timeString;
};
