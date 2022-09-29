function getComputerChoice(compChoice) {
    let choiceNum = Math.floor(Math.random()*3) + 1;
    if (choiceNum == 1) {
        compChoice = "rock";
    } else if (choiceNum == 2) {
        compChoice == "paper";
    } else if (choiceNum == 3) {
        compChoice == "scissors";
    }
    console.log(choiceNum);
    return choiceNum;
}

