// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform
// Perform the operation on the two numbers.
// Print the results to the terminal.

const readline = require('readline-sync');

//init
console.log('Welcome to Calculator!');

//ask user for first number and store input
console.log("Please input your first number");
let number1 = readline.question();

//ask user for second number and store input
console.log("Please input your second number");
let number2 = readline.question();

//ask user for operation to perform and store input
console.log("What operation would you like to perform?\n1 => Addition\n2 => Subtraction\n3 => Multiplication\n4 => Division");
let operation = readline.question();

let output;
if (operation === '1'){ // '1' is addition
  output = Number(number1) + Number(number2);
} else if (operation === '2') { // '2' is subtraction
  output = Number(number1) - Number(number2);
} else if (operation === '3') { // '3' is multiplication
  output = Number(number1) * Number(number2);
} else { // '4' is division
  output = Number(number1) / Number(number2);
}

console.log(`The result is: ${output}`);
