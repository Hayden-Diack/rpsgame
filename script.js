function getComputerChoice(compChoice) {
    // generate computer entries
    let choiceNum = Math.floor(Math.random()*3) + 1;
    if (choiceNum == "1") {
        console.log(choiceNum);
        return "rock";
    }
    else if (choiceNum == "2") {
        console.log(choiceNum);
        return "paper";
    }
    else { 
        console.log(choiceNum);
        return "scissors";
    }
}

function playRound(playerSelection, computerSelection) {
    // main computer function
    if (computerSelection == "rock") {
        console.log("Draw!")
        return "Draw!";
    }
    else if (computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
        return "You lose!";
    }
    else if (computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
        return "You Win!";
    }
}

function game(playerScore, computerScore) {
    let computerSelection = {value: ""};
    let playerSelection;
    let playerSelectionNum;
    let computerSelectionNum;

    for (let i = 0; i < 5; i++){
        playerSelection = prompt("Rock, Paper, or Scissors?").toLowerCase();
        if (playerSelection == "rock") {
            playerSelectionNum = "1";
        }
        else if (playerSelection == "paper") {
            playerSelectionNum = "2";
        }
        else if (playerSelection == "scissors") {
            playerSelectionNum = "3";
        }
        choiceNum = getComputerChoice(compChoice);
        const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));


    }
}

const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

