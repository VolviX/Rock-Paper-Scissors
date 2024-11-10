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
}

// Asks user input 
function getHumanChoice() {
    let input;
    let inputChecker = true;

    while (inputChecker === true) {
        input = prompt("Type 0 for rock, 1 for paper, 2 for scisscors: ");  
    
        if (input == 0 || input == 1 || input == 2) {
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
}

getHumanChoice();
getComputerChoice();