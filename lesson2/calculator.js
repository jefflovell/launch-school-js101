// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform
// Perform the operation on the two numbers.
// Print the results to the terminal.

const readline = require('readline-sync');

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

//init
prompt('Welcome to Calculator!');

//ask user for first number and store input
prompt("Please input your first number");

let number1 = readline.question();
while (invalidNumber(number1)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number1 = readline.question();
}

//ask user for second number and store input
prompt("Please input your second number");

let number2 = readline.question();
while (invalidNumber(number2)) {
  prompt("Hmm... that doesn't look like a valid number.");
  number2 = readline.question();
}

//ask user for operation to perform and store input
prompt("What operation would you like to perform?\n1 => Addition\n2 => Subtraction\n3 => Multiplication\n4 => Division");
let operation = readline.question();

while (!['1', '2', '3', '4'].includes(operation)) {
  prompt('Hmm... Please choose 1, 2, 3 or 4');
  operation = readline.question();
}

let output;
switch (operation) {
  case '1':
    output = Number(number1) + Number(number2);
    break;
  case '2':
    output = Number(number1) - Number(number2);
    break;
  case '3':
    output = Number(number1) * Number(number2);
    break;
  case '4':
    output = Number(number1) / Number(number2);
    break;
}

prompt(`The result is: ${output}`);
