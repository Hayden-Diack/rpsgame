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
    }
    else if (computerSelection == "paper") {
        console.log("You lose! Paper beats Rock");
    }
    else if (computerSelection == "scissors") {
        console.log("You Win! Rock beats Scissors");
    }
}

const playerSelection = "rock";
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));
