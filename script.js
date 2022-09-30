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
    console.log(playerSelection);
    console.log(computerSelection);
    // main computer function
    if (computerSelection == "rock") {
        return;
    }
    else if (computerSelection == "paper") {
        return;
    }
    else if (computerSelection == "scissors") {
        return;
    }

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


const playerSelection = "paper";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));

