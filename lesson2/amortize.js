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

function formatPrincipal(principal) {
  let principalMessage = principal.trim();
  if (!principalMessage.includes(',')) {
    principalMessage = Number(principalMessage).toLocaleString();
  }
  let principalAmount = principalMessage.replace(/,/g,"");
  if (principalMessage[0] !== '$') {
    principalMessage = '$' + principalMessage;
  }
  messages.push(`Principal: ${principalMessage}`);
  principalAmount = principalAmount.replace('$',"");
  return decimalRound(principalAmount, 2);
}

function formatRate(rate) {
  let rateMessage = rate.trim();
  let rateAmount = rateMessage;
  if (rateMessage[rateMessage.length - 1] !== '%') {
    rateMessage += '%';
  }
  if (rateMessage.startsWith('.')) {
    rateMessage = '0' + rateMessage;
  }
  messages.push(`APR: ${rateMessage}`);
  rateAmount = rateAmount.replace('%',"");
  rateAmount = (rateAmount / 100) / 12;  //hardcoded monthly periodicRate
  return decimalRound(rateAmount, 9);
}

function formatTerm(term) {
  let termMessage = term.trim();
  let termAmount = termMessage.slice(0, -1);
  if (termMessage[termMessage.length - 1] === ('y' || 'Y')) {
    termMessage = termMessage.slice(0, -1) + ' years';
    termAmount *= 12;
  } else {
    termMessage = termMessage.slice(0,-1) + ' months';
  }
  messages.push(`Term: ${termMessage}`);
  return decimalRound(termAmount, 0);
}

function formatResult(result) {
  let resultWithCommas = Number(result).toLocaleString();
  if (resultWithCommas[resultWithCommas.length - 2] === '.') {
    resultWithCommas += '0';
  }
  let resultWithDollarAndCommas = '$' + resultWithCommas;
  return resultWithDollarAndCommas;
}

function inputPrincipal() {
  console.log('\nLOAN AMOUNT (PRINCIPAL)');
  console.log('+++++++++Instructions+++++++++');
  console.log('\nValid format | $100,000.00 and $100,000 (with $)');
  console.log('\nValid format |  100,000.00 and  100,000 (with ,)');
  console.log('\nValid format |   100000.00 and   100000 (no $ or ,)');
  console.log('\nWARNING: Using decimals instead of commas, other currencies, or non-numerical values will throw errors!');
  console.log('\n++++++++++++++++++++++++++++++');
  console.log('\n>> How much money do you plan to borrow?');

  let principal = formatPrincipal(readline.question());

  while (isNaN(principal)) {
    invalidInput();
    principal = formatPrincipal(readline.question());
  }
  return principal;
}

function inputRate() {
  console.log('\nANNUAL PERCENTAGE RATE');
  console.log('+++++++++Instructions+++++++++');
  console.log('\nValid format | 5.7% and 5% (with %)');
  console.log('\nValid format | 5.7  and 5  (no %)');
  console.log('\nWARNING | .05 will be calculated as 0.05% not as 5% !');
  console.log('\nWARNING | Using commas instead of decimals, or non-numerical values will throw errors!');
  console.log('\n++++++++++++++++++++++++++++++');
  console.log('\n>> What is your loan\'s Annual Percentage Rate (APR)?');

  let rate = formatRate(readline.question());

  while (isNaN(rate)) {
    invalidInput();
    rate = formatRate(readline.question());
  }
  return rate;
}

function inputTerm() {
  console.log('\nLOAN DURATION (TERM)');
  console.log('+++++++++Instructions+++++++++');
  console.log('\nThis calculator supports loan durations in months or years.');
  console.log('\nYou will be prompted to choose which format you would like to use.');
  console.log('\nWARNING | Decimals will be rounded to the nearest whole number and can cause an inaccurate calculation!');
  console.log('  -If you need to enter years plus a fractional year, it is recommended to instead multiply years by 12 and add the remaining months.');
  console.log('\nWARNING | non-numerical values will throw errors!');
  console.log('\n++++++++++++++++++++++++++++++');
  console.log('\n>> What is the duration of your loan?  Please enter a whole number followed by the letter \'y\' for years, or \'m\' for months. E.g. 30y or 60m');

  let term = formatTerm(readline.question());

  while (isNaN(term)) {
    invalidInput();
    term = formatTerm(readline.question());
  }
  return term;
}

let repeat;
do {
  messages.push(welcome);

  clearScreen();

  console.log('Press Enter to Continue...');
  readline.question();
  clearScreen();

  let principal = inputPrincipal();
  clearScreen();

  let rate = inputRate();
  clearScreen();

  let term = inputTerm();
  let result = perPayment(principal, rate, term);
  let monthlyPayment = decimalRound(result, 2);
  let interest = decimalRound((monthlyPayment * term) - principal, 2);
  let totalCost = decimalRound(interest + principal, 2);
  let monthlyPaymentFormatted = formatResult(monthlyPayment);
  let interestFormatted = formatResult(interest);
  let totalCostFormatted = formatResult(totalCost);
  clearScreen();

  console.log('\n============RESULT============');
  console.log(`\nMonthly Payment: ${monthlyPaymentFormatted} for ${term} months.\nTotal Interest Cost: ${interestFormatted}\nTotal Repayment Amount ${totalCostFormatted}`);
  console.log('\n==============================');

  console.log(`\nEnter 'y' to run another calculation, 'n' to exit...`);
  repeat = readline.question().toLowerCase();
  while (repeat !== 'n' && repeat !== 'y') {
    console.log("please enter 'y' or 'n'");
    repeat = readline.question().toLowerCase();
  }
  messages = [];

} while (repeat === 'y');

console.log('Goodbye!');