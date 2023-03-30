function getComputerChoice() {
    let choice = ['Rock', 'Paper', 'Scissors']
    return Math.floor(Math.random() * choice.length)
}

console.log(getComputerChoice())