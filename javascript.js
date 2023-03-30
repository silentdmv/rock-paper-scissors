const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

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

const computerSelection = getComputerChoice();
console.log(playerSelection);
console.log(computerSelection);
console.log(playRound(playerSelection, computerSelection));