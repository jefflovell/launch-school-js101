/*
REQUIREMENTS

+loan amount
+Annual Percentage Rate
+loan duration

=

+monthly interest rate
+loan duration in months

FORMULA

m = monthly payment
p = loan amount
j = monthly interest rate
n = loan duration in months

let m = p * (j / (1 - Math.pow((1 + j), (-n))));

*/

const readline = require('readline-sync');
const WELCOME = '==============================\n+                            +\n+       Welcome to the       +\n+  Loan Killing Calculator!  +\n+                            +\n+    Death to All Loans!     +\n+                            +\n==============================\n';

function prompt(message) {
  if (message === WELCOME) {
    console.log(message);
  } else {
    console.log('>> ' + message);
  }
}

function clearScreen() {
  console.clear();
  prompt(WELCOME);
}

function decimalRound(value) {
  let decimalPlaces = 2;
  return Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces);
}

function repay(amount, rate, duration) {
  let payment = amount * (rate / (1 - Math.pow((1 + rate), (-duration))));
  return decimalRound(payment);
}

clearScreen();
prompt('Press Enter to Continue...');
readline.question();

clearScreen();

prompt('How much money do you owe or want to finance?');
prompt('Please enter without currency or punctuation like: 25000');

let loanAmount = decimalRound(readline.question());
clearScreen();
prompt(`Loan Amount: $${loanAmount}`);
console.log('==============================');

prompt('What is your Annual Percentage Rate?');
prompt('Please enter it as a whole number to two places like 3.49');
let rate = decimalRound(readline.question());
let monthlyRate = (rate / 100) / 12;
clearScreen();
prompt(`Loan Amount: $${loanAmount}`);
prompt(`APR: ${rate}%`);
console.log('==============================');

prompt('What is the duration / remainder of your loan in months?');
let months = Number(readline.question());
clearScreen();
prompt(`Loan Amount: $${loanAmount}`);
prompt(`APR: ${rate}%`);
prompt(`Duration: ${months} months`);
console.log('==============================');

let result = repay(loanAmount, monthlyRate, months);

clearScreen();
prompt(`Loan Amount: $${loanAmount}`);
prompt(`APR: ${rate}%`);
prompt(`Duration: ${months} months`);
console.log('==============================');
prompt(`${months} monthly payments of: $${result}`);
console.log('==============================');
