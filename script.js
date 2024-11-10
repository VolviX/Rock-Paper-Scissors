// Asks user input 
function getHumanChoice() {
    let input;
    let inputChecker = true;

    while (inputChecker === true) {
        input = prompt("Type 0 for rock, 1 for paper, 2 for scisscors: ");  
    
        // Check if input is empty or invalid
        if (input === "" || input === null) {
            console.log("Invalid choice, try again.");
        } else if (input == 0 || input == 1 || input == 2) {
            inputChecker = false;
            if (input == 0) {
                console.log("USER: ROCK");
            } else if (input == 1) {
                console.log("USER: PAPER");
            } else {
                console.log("USER: SCISSORS");
            }
        } else {
            console.log("Invalid choice, try again.");
        }
    } 

    input = +input; // Converts to number because prompt() returns a string
    return input;
}

// Generates random integer: 0 to max - 1
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
  }

// Generates computer choice
function getComputerChoice() {
    let computer = getRandomInt(3);

    if (computer == 0) {
        console.log("COMPUTER: ROCK");

    } else if (computer == 1) {
        console.log("COMPUTER: PAPER");

    } else {
        console.log("COMPUTER: SCISSORS");
    }

    return computer;
}

let humanScore = 0;
let computerScore = 0;

function playRound(getHumanChoice, getComputerChoice) {
    console.log("Initializing the game...");

    let user = getHumanChoice();
    let ai = getComputerChoice();

    if (user === ai) {
        console.log("It's a tie!");
    } else if (user === 0 && ai === 1) {
        console.log("Computer wins this round!");
    } else if (user === 0 && ai === 2) {
        console.log("User wins this round!");
    } else if (user === 1 && ai === 0) {
        console.log("User wins this round!");
    } else if (user === 1 && ai === 2) {
        console.log("Computer wins this round!");
    } else if (user === 2 && ai == 0) {
        console.log("Computer wins this round!");
    } else {
        console.log("User wins this round!");
    }
}

playRound(getHumanChoice, getComputerChoice);