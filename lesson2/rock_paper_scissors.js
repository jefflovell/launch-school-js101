const readline = require('readline-sync');
const DISPLAY_CHOICES = ['[r]ock', '[p]aper', '[s]cissors', '[l]izard', 'sp[o]ck'];
const VALID_CHOICES_LONG = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
const VALID_CHOICES_SHORT = ['r', 'p', 's', 'l', 'o'];
const MAX_ROUNDS = 5;
const WIN_SCORE = 3;
const RULES = `Best of ${MAX_ROUNDS} rounds or first to ${WIN_SCORE} wins.\n\nROCK breaks SCISSORS and crushes LIZARD.\nPAPER covers ROCK and disproves SPOCK.\nSCISSORS cuts PAPER and decapitates LIZARD.\nLIZARD eats PAPER and poisons SPOCK.\nSPOCK vaporizes ROCK and dismantles SCISSORS.\n\nGood luck!\n`;

let scoreBoard = {
  player: 0,
  computer: 0,
  round: 0
};

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

function displayWinner(choice, computerChoice) {
  let winner = 0;
  prompt(`You chose ${choice.toUpperCase()}, computer chose ${computerChoice.toUpperCase()}`);

  if (playerWins(choice, computerChoice)) {
    prompt("You Win!");
    winner = 1;
  } else if (choice === computerChoice) {
    prompt("It's a Tie!");
  } else {
    prompt("Computer Wins!");
    winner = 2;
  }
  return winner;
}

function updateScore(winner) {
  if (winner === 1) scoreBoard.player += 1;
  if (winner === 2) scoreBoard.computer += 1;
  scoreBoard.round += 1;
}

function displayScore() {
  prompt(`Current Score: Player |${scoreBoard.player}| :::ROUND ${scoreBoard.round}::: Computer |${scoreBoard.computer}|`);
}

function resetScore() {
  scoreBoard.player = 0;
  scoreBoard.computer = 0;
  scoreBoard.round = 0;
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

function askToPlayAgain() {
  prompt('Do you want to play again (y/n)?');
  let answer = readline.question().toLowerCase();

  while (answer !== 'n' && answer !== 'y') {
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

    if ((scoreBoard.player === WIN_SCORE) ||
        (scoreBoard.computer === WIN_SCORE) ||
        (scoreBoard.round === MAX_ROUNDS)) break;
  }

  prompt(`Final Score: Player |${scoreBoard.player}| :::VS::: Computer |${scoreBoard.computer}|\n`);
  prompt(finalWinner(scoreBoard.player, scoreBoard.computer));

  let answer = askToPlayAgain();

  if (answer !== 'y') {
    prompt('Goodbye!');
    break;
  } else {
    resetScore();
  }
}