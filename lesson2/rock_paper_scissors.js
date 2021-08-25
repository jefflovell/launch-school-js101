const readline = require('readline-sync');
const DISPLAY_CHOICES = [
  '[r]ock',
  '[p]aper',
  '[s]cissors',
  '[l]izard',
  'sp[o]ck'
];
const VALID_CHOICES_LONG = [
  'rock',
  'paper',
  'scissors',
  'lizard',
  'spock'
];
const VALID_CHOICES_SHORT = [
  'r',
  'p',
  's',
  'l',
  'o'
];
const CHOICES = {
  r: { fullName: 'rock', beats: ['s', 'l'] },
  p: { fullName: 'paper', beats: ['r', 's'] },
  s: { fullName: 'scissors', beats: ['p', 'l'] },
  l: { fullName: 'lizard', beats: ['o', 'p' ] },
  o: { fullName: 'spock', beats: ['r', 's'] }
};
const scoreBoard = {
  player: 0,
  computer: 0,
  round: 0
};
const MAX_ROUNDS = 5;
const WIN_SCORE = 3;
const RULES = `Best of ${MAX_ROUNDS} rounds or first to ${WIN_SCORE} wins.\n\nROCK breaks SCISSORS and crushes LIZARD.\nPAPER covers ROCK and disproves SPOCK.\nSCISSORS cuts PAPER and decapitates LIZARD.\nLIZARD eats PAPER and poisons SPOCK.\nSPOCK vaporizes ROCK and dismantles SCISSORS.\n\nGood luck!\n`;

function prompt(message) {
  console.log(`=> ${message}`);
}

function inputPlayerChoice() {
  prompt(`Choose one by typing the word or the letter in [brackets]:\n=>${DISPLAY_CHOICES.join(', ')}`);
  let choice = readline.question().toLowerCase();
  while (!VALID_CHOICES_SHORT.includes(choice)) {
    if (VALID_CHOICES_LONG.includes(choice)) {
      choice = formatChoice(choice);
    } else {
      prompt("That's not a valid choice");
      choice = readline.question().toLowerCase();
    }
  }
  return choice;
}

function formatChoice(choice) {
  switch (choice) {
    case 'rock':
      choice = 'r';
      break;
    case 'paper':
      choice = 'p';
      break;
    case 'scissors':
      choice = 's';
      break;
    case 'lizard':
      choice = 'l';
      break;
    case 'spock':
      choice = 'o';
      break;
  }
  return choice;
}

function randomChoice() {
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES_SHORT.length);
  return VALID_CHOICES_SHORT[randomIndex];
}

function playerWins(choice, computerChoice) {
  if (CHOICES[choice].beats.includes(computerChoice)) {
    return true;
  }
  return false;
}

function displayWinner(choice, computerChoice) {
  let winner = 0;
  prompt(`You chose ${CHOICES[choice].fullName.toUpperCase()}, computer chose ${CHOICES[computerChoice].fullName.toUpperCase()}`);

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
    let choice = inputPlayerChoice();

    let computerChoice = randomChoice();

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