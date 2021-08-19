const readline = require('readline-sync');
const DISPLAY_CHOICES = ['[r]ock', '[p]aper', '[s]cissors', '[l]izard', 'sp[o]ck'];
const VALID_CHOICES_LONG = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES_SHORT = ['r', 'p', 's', 'l', 'o'];
const RULES = 'Best of 5 rounds or first to 3 wins.\n\nROCK breaks SCISSORS and crushes LIZARD.\nPAPER covers ROCK and disproves SPOCK.\nSCISSORS cuts PAPER and decapitates LIZARD.\nLIZARD eats PAPER and poisons SPOCK.\nSPOCK vaporizes ROCK and dismantles SCISSORS.\n\nGood luck!\n';

function prompt(message) {
  console.log(`=> ${message}`);
}

function playerWins(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'paper' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (choice === 'scissors' && (computerChoice === 'paper' || computerChoice === 'lizard')) ||
    (choice === 'lizard' && (computerChoice === 'spock' || computerChoice === 'paper')) ||
    (choice === 'spock' && (computerChoice === 'rock' || computerChoice === 'scissors'))) {
    return true;
  }
  return false;
}

function computerWins(choice, computerChoice) {
  if ((choice === 'rock' && (computerChoice === 'paper' || computerChoice === 'spock')) ||
    (choice === 'paper' && (computerChoice === 'scissors' || computerChoice === 'lizard')) ||
    (choice === 'scissors' && (computerChoice === 'rock' || computerChoice === 'spock')) ||
    (choice === 'lizard' && (computerChoice === 'scissors' || computerChoice === 'rock')) ||
    (choice === 'spock' && (computerChoice === 'paper' || computerChoice === 'lizard'))) {
    return true;
  }
  return false;
}

function displayWinner(choice, computerChoice) {
  let winner = 0;
  prompt(`You chose ${choice.toUpperCase()}, computer chose ${computerChoice.toUpperCase()}`);

  if (playerWins(choice, computerChoice)) {
    prompt("You Win!");
    winner = 1;
  } else if (computerWins(choice, computerChoice)) {
    prompt("Computer Wins!");
    winner = 2;
  } else {
    prompt("It's a Tie!");
  }
  return winner;
}

let playerScore = 0;
let computerScore = 0;
let roundNumber = 0;

function updateScore(winner) {
  if (winner === 1) playerScore += 1;
  if (winner === 2) computerScore += 1;
  roundNumber += 1;
}

function displayScore() {
  prompt(`Current Score: Player |${playerScore}| :::ROUND ${roundNumber}::: Computer |${computerScore}|`);
}

function resetScore() {
  playerScore = 0;
  computerScore = 0;
  roundNumber = 0;
}

function finalWinner(playerScore, computerScore) {
  if (playerScore > computerScore) {
    return 'You Win!\n';
  } else if (computerScore > playerScore) {
    return 'Computer Wins!\n';
  } else {
    return "It's a Tie!\n";
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
  console.clear();
  prompt(RULES);

  while (true) {
    prompt(`Choose one by typing the word or the letter in [brackets]:\n=>${DISPLAY_CHOICES.join(', ')}`);
    let choice = readline.question().toLowerCase();

    while (!(VALID_CHOICES_LONG.includes(choice) ||
            VALID_CHOICES_SHORT.includes(choice))) {
      prompt("That's not a valid choice");
      choice = readline.question().toLowerCase();
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

    console.clear();

    let winner = displayWinner(choice, computerChoice);
    updateScore(winner);
    displayScore();

    if ((playerScore >= 3) || (computerScore >= 3) || (roundNumber >= 5)) break;
  }

  prompt(`Final Score: Player |${playerScore}| :::VS::: Computer |${computerScore}|\n`);
  prompt(finalWinner(playerScore, computerScore));

  prompt('Do you want to play again (y/n)?');
  let answer = playAgain(readline.question());

  if (answer[0] !== 'y') {
    prompt('Goodbye!');
    break;
  } else {
    resetScore();
  }
}