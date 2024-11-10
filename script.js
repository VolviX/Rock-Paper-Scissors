// Asks user input 
function getHumanChoice() {
    let input;
    let inputChecker = true;

    while (inputChecker === true) {
        input = prompt("Type 0 for Rock, 1 for Paper, 2 for Scisscors: ");  
    
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

    return +input; // Converts to number because prompt() returns a string
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

// Initializes a round
function playRound(getHumanChoice, getComputerChoice) {
    console.log("\nNew round started.");

    let user = getHumanChoice();
    let ai = getComputerChoice();

    if (user === ai) {
        console.log("It's a tie! " + humanScore + "-" + computerScore);
    } else if (
        (user === 0 && ai === 1) ||
        (user === 1 && ai === 2) ||
        (user === 2 && ai == 0)
    ) {
        computerScore += 1;
        console.log("Computer wins this round! " + humanScore + "-" + computerScore);
    } else {
        humanScore += 1;
        console.log("User wins this round! " + humanScore + "-" + computerScore);

    }
}

// Starts the game
function playGame() {
    console.log("Core system activated!");
    console.log("All systems go!");
    console.log("Initializing 5 rounds of Rock Paper Scissors game...");

    while (humanScore + computerScore < 5) {
        playRound(getHumanChoice, getComputerChoice);
    } 

    if (humanScore >= 3) {
        console.log("\nUSER WON!");
    } else {
        console.log("\nCOMPUTER WON!");
    }
}

let humanScore = 0;
let computerScore = 0;

playGame();