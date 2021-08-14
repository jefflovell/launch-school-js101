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

let messages = [];
let welcome = '==============================\n+                            +\n+       Welcome to the       +\n+  Loan Killing Calculator!  +\n+                            +\n+    Death to All Loans!     +\n+                            +\n==============================\n';
messages.push(welcome);

function clearScreen() {
  console.clear();
  messages.forEach(message => console.log(message));
}

function invalidInput() {
  messages.pop();
  console.log('Hmm...That doesn\'t look like a valid number...');
  console.log('Please read the formatting instructions and try again...');
}

function perPayment(principal, perRate, perDur) {
  let pay = principal * (perRate / (1 - Math.pow((1 + perRate), (-perDur))));
  return decimalRound(pay);
}

// addresses parseFloat rounding issue due to floating point storage
function decimalRound(value) {
  let decimalPlaces = 2;
  return Number(Math.round(parseFloat(value + 'e' + decimalPlaces)) + 'e-' + decimalPlaces);
}

function loanFormat(loanAnswer) {
  let loanMessage = loanAnswer.trim();
  loanMessage = Number(loanMessage).toLocaleString();
  let loanAmount = loanMessage.replace(/,/g,"");
  if (loanMessage[0] !== '$') {
    loanMessage = '$' + loanMessage;
  }
  messages.push(loanMessage);
  loanAmount = loanAmount.replace('$',"");
  return decimalRound(loanAmount);
}

function rateFormat(rateAnswer) {
  let rateMessage = rateAnswer.trim();
  let rateAmount = rateMessage;
  if (rateMessage[rateMessage.length - 1] !== '%') {
    rateMessage += '%';
  }
  if (rateMessage.startsWith('.')) {
    rateMessage = '0' + rateMessage;
  }
  messages.push(rateMessage);
  rateAmount = rateAmount.replace('%',"");
  rateAmount = (rateAmount / 100) / 12;  //hardcoded monthly periodicRate

  return decimalRound(rateAmount);
}

function loanInput() {
  console.log('LOAN AMOUNT');
  console.log('+++++++++Instructions+++++++++');
  console.log('Valid format | $100,000.00 and $100,000 (with $)');
  console.log('Valid format |  100,000.00 and  100,000 (with ,)');
  console.log('Valid format |   100000.00 and   100000 (no $ or ,)');
  console.log('WARNING: Using decimals instead of commas, other currencies, or non-numerical values will throw errors');
  console.log('++++++++++++++++++++++++++++++');
  console.log('\n>> How much money do you plan to borrow?');

  let loanAnswer = loanFormat(readline.question());

  while (isNaN(loanAnswer)) {
    invalidInput();
    loanAnswer = loanFormat(readline.question());
  }
  return loanAnswer;
}

function rateInput() {
  console.log('ANNUAL PERCENTAGE RATE');
  console.log('+++++++++Instructions+++++++++');
  console.log('Valid format | 5.7% and 5% (with %)');
  console.log('Valid format | 5.7  and 5  (no %)');
  console.log('WARNING | .05 will be calculated as 0.05% not as 5% !');
  console.log('WARNING | Using commas instead of decimals, or non-numerical values will throw errors!');
  console.log('++++++++++++++++++++++++++++++');
  console.log('\n>> What is your loan Annual Percentage Rate (APR)?');

  let rateAnswer = rateFormat(readline.question());

  while (isNaN(rateAnswer)) {
    invalidInput();
    rateAnswer = rateFormat(readline.question());
  }
  return rateAnswer;
}

clearScreen();

console.log('Press Enter to Continue...');
readline.question();
clearScreen();

let loanAmount = loanInput();

clearScreen();

let rateAmount = rateInput();

clearScreen();

console.log(`Loan Amount: ${loanAmount}`);
console.log(`Rate Amount: ${rateAmount}`);
console.log(messages);