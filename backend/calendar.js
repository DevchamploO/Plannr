'use strict';

module.exports.checkForNumber = function(num) {
	if (Number.isNaN(num) || num < 0 || typeof num == 'undefined' || typeof num !== 'number') {
		return false;
	}
	
	return true;
}

module.exports.getFullMonth = function(blanks, total) {
	let dayCounter = 1;
	let daysArray = [];
	if (!module.exports.checkForNumber(blanks) || !module.exports.checkForNumber(total)) {
		return [null];
	}
	for (let i=0; i<(total+blanks); i++) {
		if (i < blanks) {
			daysArray[i] = 0;
		} else {
		daysArray[i] = dayCounter;
		dayCounter++;
		}
	}
	return daysArray;
}

const weekdays = ['Sunday','Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];

module.exports.getWeekdayPos = function(day) {
	return weekdays.indexOf(day)
}

let currentMonth = parseInt(moment.format("MM"));

module.exports.getTotalDaysPerMonth = function() {
	return moment("2020-" + currentMonth, "YYYY-MM").daysInMonth())
}

module.exports.getNextMonth() {
	if(currentMonth > 12) {
		currentMonth = currentMonth + 1;
	}
}

module.exports.getPrevMonth() {
	if(currentMonth < 1) {
		currentMonth = currentMonth - 1;
	}
}
