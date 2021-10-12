const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});



reader.question("What would you like to calculate?", function(input){
	tokens = input.split(' ');
	
	mathSymbol = tokens[1];
	num1 = Number(tokens[0]);
	num2 = Number(tokens[2]);

	if (mathSymbol == '+') {
		console.log(num1 + num2);
	}

	console.log('mathSymbol ', mathSymbol);


	// This line closes the connection to the command line interface.
	reader.close()

});
