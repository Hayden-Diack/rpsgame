let tempCompChoice = {Value: ""}; 
let getComputerChoice = 0; 
let compChoice;
let playerSelection; 
const buttons = document.querySelectorAll('.btn');

let playerScore = 0;
let computerScore = 0;

const output = document.querySelector("#output");
output.textContent = "May the best player win!";

const player = document.querySelector("#player-score");
player.textContent = `Player Score: ${playerScore}`;

const computer = document.querySelector("#computer-score");
computer.textContent = `Computer Score: ${computerScore}`;

function computerPlay() {
        // generate computer entries
    const choiceNum = Math.floor(Math.random()*3) + 1;
    if (choiceNum == "1") {
        tempCompChoice.Value = "rock";
        return choiceNum;
    }
    else if (choiceNum == "2") {
        tempCompChoice.Value = "paper";
        return choiceNum;
    }
    else if (choiceNum == "3") { 
        tempCompChoice.Value = "scissors";
        return choiceNum;
    }
    return choiceNum;
}

// buttons
buttons.forEach((button)=>{button.addEventListener('click',()=>{
    playerSelection = button.id;
    console.log(playerSelection);
    if (playerSelection == "rock"){
        // rock
    }
    else if (playerSelection == "paper") {
        // paper
    }
    else if (playerSelection == "scissors") {
        // scissors
    }
    computerSelection = computerPlay(tempCompChoice);
    playGame();
    })
});

// playRound
function playRound() {
    let playerSelectionString = String(playerSelection);
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    
    // If player chooses rock
    if (playerSelectionLowercase === "rock") {
        if (tempCompChoice.Value === "rock") {
            //console.log("DRAW!");
            output.textContent = `Its a tie! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            return
        }
        else if (tempCompChoice.Value === "paper") {
            //console.log("LOSE!");
            output.textContent = `You lost! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            computerScore++;
            return
        }
        else {
            //console.log("WIN!");
            output.textContent = `You won! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            playerScore++;
            return
        }
    }
    // if player chooses paper
    else if (playerSelectionLowercase === "paper") {
        if (tempCompChoice.Value === "rock") {
            //console.log("WIN!");
            output.textContent = `You won! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            playerScore++;
            return
        }
        else if (tempCompChoice.Value === "paper") {
            //console.log("DRAW!");
            output.textContent = `Its a tie! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            return
        }
        else {
            //console.log("LOSE!");
            output.textContent = `You lost! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            computerScore++;
            return
        }
    }
    // if player chooses scissors
    else if (playerSelectionLowercase === "scissors") {
        if (tempCompChoice.Value === "rock") {
            //console.log("LOSE!");
            output.textContent = `You lost! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            computerScore++;
            return
        }
        else if (tempCompChoice.Value === "paper") {
            //console.log("WIN!");
            output.textContent = `You won! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            playerScore++;
            return
        }
        else {
            //console.log("DRAW!");
            output.textContent = `Its a tie! You chose ${playerSelectionLowercase} and The computer chose ${tempCompChoice.Value}`;
            return
        }
    }
    // if player inputs something silly
    else {
        console.log("Invalid Entry, Please try again.");
        return
    }
}

// score tracker
function playGame() {
    output.textContent = "Choose Rock, Paper or Scissors";
    playRound();
    player.textContent = `Player Score: ${playerScore}`;
    computer.textContent = `Computer Score: ${computerScore}`;
    if (playerScore == 5) {
        output.textContent = "You won the game!";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
    else if (computerScore == 5) {
        output.textContent = "You lost the game!";
        playerScore = 0;
        computerScore = 0;
        player.textContent = `Player Score: ${playerScore}`;
        computer.textContent = `Computer Score: ${computerScore}`;
    }
}