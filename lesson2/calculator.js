// Ask the user for the first number.
// Ask the user for the second number.
// Ask the user for an operation to perform
// Perform the operation on the two numbers.
// Print the results to the terminal.

const readline = require('readline-sync');
const messages = require('./calculator_messages.json')

function prompt(message) {
  console.log(`=> ${message}`);
}

function invalidNumber(number) {
  return number.trimStart() === '' || Number.isNaN(Number(number));
}

//init
prompt(messages.lang);
let lang = readline.question();

while (!['1', '2', '3', '4', '5', '6', '7', '8', '9'].includes(lang)) {
  prompt('Please choose a valid language');
  lang = readline.question();
}

switch (lang) {
  case '1':
    lang = "en";
    break;
  case '2':
    lang = "es";
    break;
  case '3':
    lang = "fr";
    break;
  case '4':
    lang = "de";
    break;
  case '5':
    lang = "sr";
    break;
  case '6':
    lang = "ru";
    break;
  case '7':
    lang = "ca";
    break;
  case '8':
    lang = "jp";
    break;
  case '9':
    lang = "jp";
    break;
}

prompt(messages[lang].welcome);

//ask user for first number and store input
while (true) {

  prompt(messages[lang].num1);

  let number1 = readline.question();
  while (invalidNumber(number1)) {
    prompt(messages[lang].invalid);
    number1 = readline.question();
  }

  //ask user for second number and store input
  prompt(messages[lang].num2);

  let number2 = readline.question();
  while (invalidNumber(number2)) {
    prompt(messages[lang].invalid);
    number2 = readline.question();
  }

  //ask user for operation to perform and store input
  prompt(messages[lang].operation);
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

  prompt(messages[lang].result + output);

  prompt(messages[lang].repeat);
  let repeat = readline.question();
  if (repeat !== 1) break;
}