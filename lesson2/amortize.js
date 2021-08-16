let readline = require('readline-sync');
let messages = [];
let welcome = '==============================\n+                            +\n+       Welcome to the       +\n+  Loan Killing Calculator!  +\n+                            +\n+    Death to All Loans!     +\n+                            +\n==============================\n';

function clearScreen() {
  console.clear();
  messages.forEach(message => console.log(message));
}

function invalidInput() {
  messages.pop();
  console.log('Hmm...That doesn\'t look like a valid number...');
  console.log('Please read the formatting instructions and try again...');
}

function perPayment(principal, perRate, perTerm) {
  let pay = principal * (perRate / (1 - Math.pow((1 + perRate), (-perTerm))));
  return decimalRound(pay, 2);
}

// addresses parseFloat rounding issue due to floating point storage
function decimalRound(value, places) {
  return Number(Math.round(parseFloat(value + 'e' + places)) + 'e-' + places);
}

function loanFormat(loanAnswer) {
  let loanMessage = loanAnswer.trim();
  if (!loanMessage.includes(',')) {
    loanMessage = Number(loanMessage).toLocaleString();
  }
  let loanAmount = loanMessage.replace(/,/g,"");
  if (loanMessage[0] !== '$') {
    loanMessage = '$' + loanMessage;
  }
  messages.push(loanMessage);
  loanAmount = loanAmount.replace('$',"");
  return decimalRound(loanAmount, 2);
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
  return decimalRound(rateAmount, 9);
}

function termFormat(termAnswer) {
  let termMessage = termAnswer.trim();
  let termAmount = termMessage.slice(0, -1);
  if (termMessage[termMessage.length - 1] === ('y' || 'Y')) {
    termMessage = termMessage.slice(0, -1) + ' years';
    termAmount *= 12;
  } else {
    termMessage = termMessage.slice(0,-1) + ' months';
  }
  messages.push(termMessage);
  return decimalRound(termAmount, 0);
}

function resultFormat(result) {
  let commas = Number(result).toLocaleString();
  if (commas[commas.length - 2] === '.') {
    commas += '0';
  }
  commas = '$' + commas;
  return commas;
}

function loanInput() {
  console.log('\nLOAN AMOUNT');
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
  console.log('\nANNUAL PERCENTAGE RATE');
  console.log('+++++++++Instructions+++++++++');
  console.log('Valid format | 5.7% and 5% (with %)');
  console.log('Valid format | 5.7  and 5  (no %)');
  console.log('WARNING | .05 will be calculated as 0.05% not as 5% !');
  console.log('WARNING | Using commas instead of decimals, or non-numerical values will throw errors!');
  console.log('++++++++++++++++++++++++++++++');
  console.log('\n>> What is your loan\'s Annual Percentage Rate (APR)?');

  let rateAnswer = rateFormat(readline.question());

  while (isNaN(rateAnswer)) {
    invalidInput();
    rateAnswer = rateFormat(readline.question());
  }
  return rateAnswer;
}

function termInput() {
  console.log('\nLOAN DURATION (TERM)');
  console.log('+++++++++Instructions+++++++++');
  console.log('This calculator supports loan durations in months or years.');
  console.log('You will be prompted to choose which format you would like to use.');
  console.log('WARNING | Decimals will be rounded to the nearest whole number and can cause an inaccurate calculation!');
  console.log('If you need to enter years plus a fractional year, it is recommended to multiple years by 12 and add the remaining months instead of using decimals.');
  console.log('WARNING | non-numerical values will throw errors!');
  console.log('++++++++++++++++++++++++++++++');
  console.log('\n>> What is the duration of your loan?  Please enter a whole number followed by the letter \'y\' for years, or \'m\' for months. E.g. 30y or 60m');

  let termAnswer = termFormat(readline.question());

  while (isNaN(termAnswer)) {
    invalidInput();
    termAnswer = termFormat(readline.question());
  }
  return termAnswer;
}

let repeat;
do {
  messages.push(welcome);

  clearScreen();

  console.log('Press Enter to Continue...');
  readline.question();
  clearScreen();

  let loanAmount = loanInput();
  clearScreen();

  let rateAmount = rateInput();
  clearScreen();

  let termAmount = termInput();
  let result = perPayment(loanAmount, rateAmount, termAmount);
  let monthlyPayment = decimalRound(result, 2);
  let interest = decimalRound((monthlyPayment * termAmount) - loanAmount, 2);
  let totalCost = decimalRound(interest + loanAmount, 2);
  let monthlyPaymentFormatted = resultFormat(monthlyPayment);
  let interestFormatted = resultFormat(interest);
  let totalCostFormatted = resultFormat(totalCost);
  clearScreen();

  console.log(`\nMonthly Payment: ${monthlyPaymentFormatted} for ${termAmount} months.\nTotal Interest Cost: ${interestFormatted}\nTotal Repayment Amount ${totalCostFormatted}`);

  console.log(`\nEnter 'y' to run another calculation, any other key to exit...`);
  repeat = readline.question();
  messages = [];

} while (repeat === 'y');

console.log('Goodbye!');