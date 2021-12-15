const express = require('express');
const app = express();
const port = 3000;
//----------------------------------------------------------------
const fizzBuzz = require('./fizzBuzz');

app.get('/', (req, res) => {
	const { number } = req.query;
	const userInput = parseInt(number);
	if (isNaN(userInput)) {
		res.status(400).json({
			message: 'Invalid input',
		});
		return;
	}
	const fizzBuzzReturn = fizzBuzz(userInput);
	res.json({
		message: 'success',
		payload: fizzBuzzReturn,
	});
});

app.listen(port, () => {
	console.log('Listening on port ' + port);
});
