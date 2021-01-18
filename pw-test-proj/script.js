const maxTime = document.getElementById('maxTime');
const maxTimeSec = document.getElementById('maxTimeSec');
const minTime = document.getElementById('minTime');
const minTimeSec = document.getElementById('minTimeSec');
const readMaxTimeStr = document.getElementById('readMaxTimeStr');
const readMinTimeStr = document.getElementById('readMinTimeStr');
const timeToSec = document.getElementById('timeToSec');
const limitBtn = document.getElementById('limitBtn');
const limitTxt = document.getElementById('limitTxt');

const resultNumber = document.getElementById('resultNumber');
const readNumber = document.getElementById('readNumber');
const readNumberStr = document.getElementById('readNumberStr');
const readNumberStrDec = document.getElementById('readNumberStrDec');
const resulTimeInput = document.getElementById('resultTimeInput');
const secToTime = document.getElementById('secToTime');

let useLimit = false;
limitTxt.innerText = 'NO  LIMIT';

// Time String to Number
timeToSec.addEventListener('click', (e) => {
	e.preventDefault();
	// validation
	let timeFormatIsOK = true;
	let minValueToLow = false;
	let minValueToHigh = false;
	let maxValueToLow = false;
	let maxValueToHigh = false;

	console.log(maxTime);
	console.log(maxTime.value);

	// Check that timestring format is OK

	if (validTimeStr(maxTime.value) === true) {
		readMaxTimeStr.innerText = maxTime.value;
	} else {
		timeFormatIsOK = false;
		readMaxTimeStr.innerText = 'Invalid time format, use hh:mm:ss ';
	}

	if (validTimeStr(minTime.value) === true) {
		readMinTimeStr.innerText = minTime.value;
	} else {
		timeFormatIsOK = false;
		minTimeSec.innerText = 'Invalid time format, use hh:mm:ss ';
	}

	if (timeFormatIsOK) {
		// Convert Time Strings to numbers
		let minTimeInSec = timeInSec(minTime.value);
		let maxTimeInSec = timeInSec(maxTime.value);

		if (toHigh(minTimeInSec) === true) {
			minValueToHigh = true;
		}

		if (toLow(minTimeInSec) === true) {
			minValueToLow = true;
		}

		if (toHigh(maxTimeInSec) === true) {
			maxValueToHigh = true;
		}

		if (toLow(maxTimeInSec) === true) {
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
			readMaxTimeStr.innerText = 'Min Time should be less than Max Time';
			readMinTimeStr.innerText = 'Min Time should be less than Max Time';
		}
		if (useLimit) {
			// check if any value is to low
			if (minValueToLow === true) {
				readMinTimeStr.innerText =
					'The race is about running, not flying';
			}
			if (maxValueToLow === true) {
				readMaxTimeStr.innerText =
					'The race is about running, not flying';
			}
			// check if any value is to high
			if (minValueToHigh === true) {
				readMinTimeStr.innerText =
					'The race is about running, not crawling';
			}
			if (maxValueToHigh === true) {
				readMaxTimeStr.innerText =
					'The race is about running, not crawling';
			}
		}
	}
});

// Toggle Limit Button

limitBtn.addEventListener('click', (e) => {
	e.preventDefault();
	// toggle useLimit
	useLimit === true ? (useLimit = false) : (useLimit = true);

	// toggle limitTxt
	let text = '';
	useLimit === true ? (text = 'USE LIMIT') : (text = 'NO LIMIT');
	limitTxt.innerText = text;
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
	return numVal < 165 ? true : false;
};

// Used for validating that value is not greater than 420 ~ 7 min
const toHigh = (numVal) => {
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

const resultList = [
	{
		name: 'Bettan',
		time: 12,
	},
	{
		name: 'Anna',
		time: 7,
	},
	{
		name: 'Stina',
		time: 1,
	},
	{
		name: 'Gullan',
		time: 4,
	},
	{
		name: 'Jenny',
		time: 6,
	},
];

const resultSort = (unordered) => {
	console.log(unordered);
	const sorted = unordered.sort((a, b) => {
		console.log(a, b);
		return a.time - b.time;
	});
	return sorted;
};

const sortedList = resultSort(resultList);
console.log(sortedList);

// Input anmälningstid, parameters, id ?
const getLegTimes = (distance) => {
	// Create an empty array with en entry for each splitTime
	const legs = [...Array(distance).keys()];

	let splitTime = 0;
	let prevSplitTime = 0;
	let subTotal = 0;

	// For each split calculate the time
	// Keep the new split and the sub total (accumulated time)
	const legTimes = legs.map((leg, index) => {
		console.log('leg: ', leg);

		if (index === 0) {
			// First split
			splitTime = 10 + index;
			prevSplitTime = splitTime;
			subTotal = splitTime;
		} else {
			// Following split
			splitTime = prevSplitTime += 1;
			prevSplitTime = splitTime;
			subTotal = subTotal + splitTime;
		}
		console.log(splitTime);
		return { splitTime, subTotal };
	});

	console.log(legTimes);

	return legTimes;
};

// Beövs Inte
const getResultTime = (splitTimes) => {
	console.log(splitTimes);

	const splits = splitTimes.map((entry) => {
		return entry.splitTime;
	});
	const resultTime = splits.reduce((acc, value) => acc + value);
	console.log('Result ', resultTime);

	return resultTime;
};

const myLegTimes = getLegTimes(6);
console.log('my legTimes ', myLegTimes);

const myResult = getResultTime(myLegTimes);
console.log(myResult);
