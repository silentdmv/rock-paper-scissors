const playerSelection = prompt("Rock, paper, or scissors?").toLowerCase();

function getComputerChoice() {
    const choices = ['rock', 'paper', 'scissors'];
    const computerSelection = choices[Math.floor(Math.random() * choices.length)];
    return computerSelection;
}

console.log(getComputerChoice());
console.log(playerSelection);