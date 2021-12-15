// Function takes a number as param returns a string following these:
/**
 * when the input is divisible by 3 should return "Fizz"
 * when is divisible by 5 should return "Buzz"
 * return "FizzBuzz" when both conditions are met
 * any other case return the input
 */
const fizzBuzz = (number) => {
	if (typeof number !== 'number') return 'Invalid input';
	if (number % 3 === 0 && number % 5 === 0) return 'FizzBuzz';
	if (number % 3 === 0) return 'Fizz';
	if (number % 5 === 0) return 'Buzz';
	return number;
};

module.exports = fizzBuzz;
