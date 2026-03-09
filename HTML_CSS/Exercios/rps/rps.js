function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return "It's a tie!";
    }
    if (
        (playerSelection === "rock" && computerSelection === "scissors") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissors" && computerSelection === "paper")
    ) {
        return "You win!";
    }
    return "You lose!";
}

function getComputerChoice() {
    const choices = ["rock", "paper", "scissors"];
    const randomIndex = Math.floor(Math.random() * choices.length);
    return choices[randomIndex];
}

function game() {
    let playerScore = 0;
    let computerScore = 0;
    const rounds = 5;
    for (let i = 0; i < rounds; i++) {
        const playerSelection = prompt("Enter rock, paper, or scissors:").toLowerCase();
        const computerSelection = getComputerChoice();
        const result = playRound(playerSelection, computerSelection);
        console.log(`Round ${i + 1}: You chose ${playerSelection}, computer chose ${computerSelection}. ${result}`);
        if (result === "You win!") {
            playerScore++;
        } else if (result === "You lose!") {
            computerScore++;
        }
    }
    console.log(`Final Score - You: ${playerScore}, Computer: ${computerScore}`);
    if (playerScore > computerScore) {
        console.log("Congratulations! You are the overall winner!");
    }
    else if (computerScore > playerScore) {
        console.log("Sorry! The computer wins overall.");
    }
    else {
        console.log("It's an overall tie!");
    }  
}

game();