// global variables
let playerScore = 0;

let computerScore = 0;

let gamesPlayed = 0;



function getComputerChoice(compChoice) {
    // generate computer entries
    let choiceNum = Math.floor(Math.random()*3) + 1;
    if (choiceNum == "1") {
        console.log(choiceNum, " rock");
        return "rock";
    }
    else if (choiceNum == "2") {
        console.log(choiceNum, " paper");
        return "paper";
    }
    else { 
        console.log(choiceNum, " scissors");
        return "scissors";
    }
}

function playRound(playerSelection) {
    console.log(playerSelection);
    let playerSelectionString = String(playerSelection);
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // If player chooses rock
    if (playerSelectionLowercase === "rock") {
        if (computerSelection === "rock") {
            console.log("DRAW!");
            playerScore++;
            computerScore++;
            game(playerScore, computerScore);
            return;
        }
        else if (computerSelection === "paper") {
            console.log("LOSE!");
            computerScore++;
            game(playerScore, computerScore);
            return;
        }
        else {
            console.log("WIN!");
            playerScore++;
            game(playerScore, computerScore);
            return "WIN!";
        }
    }
    // if player chooses paper
    else if (playerSelectionLowercase === "paper") {
        if (computerSelection === "rock") {
            console.log("WIN!");
            playerScore++;
            game(playerScore, computerScore);
            return;
        }
        else if (computerSelection === "paper") {
            console.log("DRAW!");
            playerScore++;
            computerScore++;
            game(playerScore, computerScore);
            return;
        }
        else {
            console.log("LOSE!");
            computerScore++;
            game(playerScore, computerScore);
            return "LOSE!";
        }
    }
    // if player chooses scissors
    else if (playerSelectionLowercase === "scissors") {
        if (computerSelection === "rock") {
            console.log("LOSE!");
            computerScore++;
            game(playerScore, computerScore);
            return;
        }
        else if (computerSelection === "paper") {
            console.log("WIN!");
            playerScore++;
            game(playerScore, computerScore);
            return;
        }
        else {
            console.log("DRAW!");
            playerScore++;
            computerScore++;
            game(playerScore, computerScore);
            return "DRAW!";
        }
    }
    // if player inputs something silly
    else {
        console.log("Invalid Entry, Please try again.");
        game(playerScore, computerScore);
        return;
    }
}

function game(playerScore, computerScore) {
    if (playerScore == 5 || computerScore == 5) {
        if (playerScore > computerScore) {
            console.log("YOU WIN!");
            return;
        }
        else if (playerScore < computerScore) {
            console.log("YOU LOSE!");
            return;
        }
        else { 
            console.log("DRAW!");
            return;
        }
    }
}

let playerSelection = prompt("Rock, Paper, or Scissors?");
const computerSelection = getComputerChoice();
const playerSelectionLowercase = playerSelection;
console.log(playRound(playerSelection, computerSelection));
