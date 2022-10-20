let playerScore = 0;
let computerScore = 0;
let game = 0;

let playerSelection;

function getComputerChoice() {
        // generate computer entries
    const choiceNum = Math.floor(Math.random()*3) + 1;
    if (choiceNum == "1") {
        console.log("computer has chosen");
        return "rock";
    }
    else if (choiceNum == "2") {
        console.log("computer has chosen");
        return "paper";
    }
    else { 
        console.log("computer has chosen");
        return "scissors";
    }
}

// buttons
const paperbtn = document.querySelector('#paperbtn');
paperbtn.addEventListener('click', () => {
    playRound(playerSelection = 'paper');

    return
});

const scissorsbtn = document.querySelector('#scissorsbtn');
scissorsbtn.addEventListener('click', () => {
    playRound(playerSelection = 'scissors');

    return
});

const rockbtn = document.querySelector('#rockbtn');
rockbtn.addEventListener('click', () => {
    playRound(playerSelection = 'rock');

    return
});

// playRound
function playRound(playerSelection) {
    console.log(playerSelection);
       
    let playerSelectionString = String(playerSelection);
    let playerSelectionLowercase = playerSelectionString.toLowerCase();
    // If player chooses rock
    if (playerSelectionLowercase === "rock") {
        if (computerSelection === "rock") {
            console.log("DRAW!");
            return "DRAW!" && console.log(playerScore, computerScore);
        }
        else if (computerSelection === "paper") {
            console.log("LOSE!");
            computerScore++;
            return "LOSE!" && console.log(playerScore, computerScore);
        }
        else {
            console.log("WIN!");
            playerScore++;
            return "WIN!" && console.log(playerScore, computerScore);
        }
    }
    // if player chooses paper
    else if (playerSelectionLowercase === "paper") {
        if (computerSelection === "rock") {
            console.log("WIN!");
            playerScore++;
            return "WIN!" && console.log(playerScore, computerScore);
        }
        else if (computerSelection === "paper") {
            console.log("DRAW!");
            return "DRAW!" && console.log(playerScore, computerScore);
        }
        else {
            console.log("LOSE!");
            computerScore++;
            return "LOSE!" && console.log(playerScore, computerScore);
        }
    }
    // if player chooses scissors
    else if (playerSelectionLowercase === "scissors") {
        if (computerSelection === "rock") {
            console.log("LOSE!");
            computerScore++;
            return "LOSE!" && console.log(playerScore, computerScore);
        }
        else if (computerSelection === "paper") {
            console.log("WIN!");
            playerScore++;
            return "WIN!" && console.log(playerScore, computerScore);
        }
        else {
            console.log("DRAW!");
            return "DRAW!" && console.log(playerScore, computerScore);
        }
    }
    // if player inputs something silly
    else {
        console.log("Invalid Entry, Please try again.");
        return;
    }
}

const computerSelection = getComputerChoice();
console.log(playerScore, computerScore);