// Generates random integer: 0 to max - 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Generates computer choice
function getComputerChoice() {
    let computer = getRandomInt(3);

    if (computer == 0) {
        return 'ROCK';
    } else if (computer == 1) {
        return 'PAPER';
    } else {
        return 'SCISSORS';
    }
}

// Initializes a round
function playRound(playerSelection) {

    let user = playerSelection;
    let ai = getComputerChoice();
    let currentScore = humanScore + '-' + computerScore;

    ui.textContent = `USER: ${user}`;
    content.textContent = `AI: ${ai}`;

    if (user == ai) {
        score.textContent = `Its a tie! ${currentScore}`;
    } else if (
        (user === 'ROCK' && ai === 'PAPER') ||
        (user === 'PAPER' && ai === 'SCISSORS') ||
        (user === 'SCISSORS' && ai === 'ROCK')
    ) {
        computerScore += 1;
        score.textContent = `AI wins this round! ${currentScore}`;
    } else {
        humanScore += 1;
        score.textContent = `User wins this round! ${currentScore}`;
    }

    return user;
}

let humanScore = 0;
let computerScore = 0;

const ui = document.querySelector('.description');
const content = document.querySelector('.content');
const score = document.querySelector('.score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

rock.addEventListener('click', () => {
    playRound('ROCK');
});

paper.addEventListener('click', () => {
    playRound('PAPER');
});

scissors.addEventListener('click', () => {
    playRound('SCISSORS');
});