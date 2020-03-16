const calendar = require('./../../backend/calendar.js')

describe("checkForNumber function", () => {
	test('String should return false', () => {
		expect(calendar.checkForNumber('word')).toBe(false);
	});

	test('Number should return true', () => {
		expect(calendar.checkForNumber(5)).toBe(true);
	});

	test('NaN should return false', () => {
		expect(calendar.checkForNumber(NaN)).toBe(false);
	});

	test('Undefined should return false', () => {
		expect(calendar.checkForNumber(undefined)).toBe(false);
	});

	test('Boolean should return false', () => {
		expect(calendar.checkForNumber(true)).toBe(false);
	});

	test('Negative numbers should return false', () => {
		expect(calendar.checkForNumber(-167)).toBe(false);
	});

	test('String of number should return false', () => {
		expect(calendar.checkForNumber('0')).toBe(false);
	});
});

describe('getFullMonth function', () => {
	test('Return array of 30 with first 3 indexs 0', () => {
		expect(calendar.getFullMonth(3, 30)).toStrictEqual([0,0,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28,29,30]);
	});

	test('Return array of 28 with no leading 0s', () => {
		expect(calendar.getFullMonth(0, 28)).toStrictEqual([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,26,27,28]);
	});

	test('Return null for Null or other non numerical parameters', () => {
		expect(calendar.getFullMonth('0', null)).toStrictEqual([null]);
	});

	test('Return null for parameters of negative numbers', () => {
		expect(calendar.getFullMonth(3, -4)).toStrictEqual([null]);
	});
});
