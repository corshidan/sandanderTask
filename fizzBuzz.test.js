const fizzBuzz = require('./fizzBuzz');

describe('Testing fizzBuzz functionality', () => {
	test('fizzBuzz returns the input', () => {
		const result = fizzBuzz(1);
		expect(result).toBe(1);
	});
	test('fizzBuzz returns "Fizz" if the input is divisible by 3', () => {
		const result = fizzBuzz(3);
		expect(result).toBe('Fizz');
	});
	test('fizzBuzz returns "Buzz" if the input is divisible by 5', () => {
		const result = fizzBuzz(5);
		expect(result).toBe('Buzz');
	});
	test('fizzBuzz returns "FizzBuzz" if the input is divisible by 5 and 3 ', () => {
		const result = fizzBuzz(15);
		expect(result).toBe('FizzBuzz');
	});
	test('fizzBuzz returns "Invalid input" if the input is not a number ', () => {
		const result = fizzBuzz('Daniel');
		expect(result).toBe('Invalid input');
	});
});
