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
            return "You lose! Paper beats Rock!"
        }

        else {
            return "You win! Rock beats Scissors!";
        }

    }

    else if (playerSelection == 'paper') {
        if (computerSelection == 'paper') {
            return "It's a draw!";
        }

        else if (computerSelection == 'scissors') {
            return "You lose! Scissors beat Paper!";
        }

        else {
            return "You win! Paper beats Rock!";
        }
    }

    else if (playerSelection == 'scissors') {
        if (computerSelection == 'scissors') {
            return "It's a draw!";
        }

        else if (computerSelection == 'rock') {
            return "You lose! Rock beats Scissors!";
        }

        else {
            return "You win! Scissors beat Paper!";
        }
    }
}

function game() {
    const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();
    const computerSelection = getComputerChoice();
    return playRound(playerSelection, computerSelection);
}

let gameRound = 0;
while (gameRound < 5) {
    console.log(game());
    gameRound++
}