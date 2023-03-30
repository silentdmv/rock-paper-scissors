let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const choice = choices[Math.floor(Math.random() * choices.length)];
    return choice;
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection == 'rock') {
        if (computerSelection == 'rock') {
            return "It's a draw!";
        }

        else if (computerSelection == 'paper') {
            ++computerScore;
            return "You lose! Paper beats Rock!"
        }

        else {
            ++playerScore;
            return "You win! Rock beats Scissors!";
        }

    }

    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return "It's a draw!";
        }

        else if (computerSelection == 'scissors') {
            ++computerScore;
            return "You lose! Scissors beat Paper!";
        }

        else {
            ++playerScore;
            return "You win! Paper beats Rock!";
        }
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return "It's a draw!";
        }

        else if (computerSelection == 'rock') {
            ++computerScore;
            return "You lose! Rock beats Scissors!";
        }

        else {
            ++playerScore;
            return "You win! Scissors beat Paper!";
        }
    }
}

function game() {
    const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
}

function score(playerScore, computerScore) {
    if (playerScore > computerScore) {
        return "Player wins!";
    }

    else if (playerScore < computerScore) {
        return "Computer wins!";
    }

    else {
        return "It's a draw.";
    }


}

let gameRound = 0;
while (gameRound < 5) {
    console.log(game());
    gameRound++
}

console.log(`${score(playerScore, computerScore)} The final score is ${playerScore}:${computerScore}.`);