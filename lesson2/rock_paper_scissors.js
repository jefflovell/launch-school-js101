const readline = require('readline-sync');
const DISPLAY_CHOICES = ['[r]ock', '[p]aper', '[s]cissors', '[l]izard', 'sp[o]ck'];
const VALID_CHOICES_LONG = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES_SHORT = ['r', 'p', 's', 'l', 'o'];

function prompt(message) {
  console.log(`=> ${message}`);
}

// eslint-disable-next-line complexity
function displayWinner(choice, computerChoice) {
  prompt(`You chose ${choice}, computer chose ${computerChoice}`);

  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    prompt('You win!');
  } else if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
            (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
            (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
            (choice === 'lizard' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
            (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    prompt('Computer wins!');
  } else {
    prompt("It's a tie!");
  }
}

function playAgain(answer) {
  while (answer[0] !== 'n' && answer[0] !== 'y') {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  return answer;
}

while (true) {
  prompt(`Choose one by typing the word or the letter in [brackets]:\n=>${DISPLAY_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();

  while (!(VALID_CHOICES_LONG.includes(choice) || VALID_CHOICES_SHORT.includes(choice))) {
    prompt("That's not a valid choice");
    choice = readline.question();
  }

  switch (choice) {
    case 'r':
      choice = 'rock';
      break;
    case 'p':
      choice = 'paper';
      break;
    case 's':
      choice = 'scissors';
      break;
    case 'l':
      choice = 'lizard';
      break;
    case 'o':
      choice = 'spock';
      break;
  }

  let randomIndex = Math.floor(Math.random() * VALID_CHOICES_LONG.length);
  let computerChoice = VALID_CHOICES_LONG[randomIndex];

  displayWinner(choice, computerChoice);

  prompt('Do you want to play again (y/n)?');
  let answer = playAgain(readline.question());

  if (answer[0] !== 'y') break;
}