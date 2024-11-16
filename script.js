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

    ui.textContent = `USER: ${user}`;
    content.textContent = `AI: ${ai}`;

    if (user == ai) {
        tie.play();
        score.textContent = `Its a tie! ${humanScore} - ${computerScore}`;
    } else if (
        (user === 'ROCK' && ai === 'PAPER') ||
        (user === 'PAPER' && ai === 'SCISSORS') ||
        (user === 'SCISSORS' && ai === 'ROCK')
    ) {
        lose.play();
        computerScore += 1;
        score.textContent = `AI wins this round! ${humanScore} - ${computerScore}`;
    } else {
        win.play();
        humanScore += 1;
        score.textContent = `User wins this round! ${humanScore} - ${computerScore}`;
    }

    if (humanScore === 5 || computerScore === 5) {
        rock.remove();
        paper.remove();
        scissors.remove();

        const gameOver = document.createElement('p');
        document.body.appendChild(gameOver);
        
        if (humanScore === 5) {
            won.play();
            gameOver.textContent = 'YOU WON!';
        } else {
            lost.play();
            gameOver.textContent = 'GAME OVER!';
        }

        const replay = document.createElement('button');
        document.body.appendChild(replay);
        replay.textContent = 'PLAY AGAIN';
        replay.addEventListener('click', () => location.reload());
    }
}

let humanScore = 0;
let computerScore = 0;

const ui = document.querySelector('.description');
const content = document.querySelector('.content');
const score = document.querySelector('.score');
const rock = document.querySelector('#rock');
const paper = document.querySelector('#paper');
const scissors = document.querySelector('#scissors');

const won = document.querySelector('#won');
const lost = document.querySelector('#lost');
const win = document.querySelector('#win');
const lose = document.querySelector('#lose');
const tie = document.querySelector('#tie');

rock.addEventListener('click', () => {
    playRound('ROCK');
});

paper.addEventListener('click', () => {
    playRound('PAPER');
});

scissors.addEventListener('click', () => {
    playRound('SCISSORS');
});