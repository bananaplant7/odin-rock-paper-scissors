let myArray = [
    'rock',
    'paper',
    'scissors'
];

function computerPlay() { 
    return myArray[Math.floor(Math.random()*myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection.toLowerCase() === 'rock'
        &&
        computerSelection.toLowerCase() === 'rock'
        ) {
            return "Rock vs Rock is a tie"
        } else if
        (
        playerSelection.toLowerCase() === 'rock'
        &&
        computerSelection.toLowerCase() === 'paper'
        ) {
            return "You lose! Paper beats Rock"
        } else if
        (
        playerSelection.toLowerCase() === 'rock'
        &&
        computerSelection.toLowerCase() === 'scissors'
        ) {
            return "You win! Rock beats Scissors"
        } else if
        (
        playerSelection.toLowerCase() === 'paper'
        &&
        computerSelection.toLowerCase() === 'rock'
        ) {
            return "You win! Paper beats Rock"
        } else if
        (
        playerSelection.toLowerCase() === 'paper'
        &&
        computerSelection.toLowerCase() === 'paper'
        ) {
            return "Paper vs Paper is a tie"
        } else if
        (
        playerSelection.toLowerCase() === 'paper'
        &&
        computerSelection.toLowerCase() === 'scissors'
        ) {
            return "You lose! Scissors beats Paper"
        } else if
        (
        playerSelection.toLowerCase() === 'scissors'
        &&
        computerSelection.toLowerCase() === 'rock'
        ) {
            return "You lose! Rock beats Scissors"
        } else if
        (
        playerSelection.toLowerCase() === 'scissors'
        &&
        computerSelection.toLowerCase() === 'paper'
        ) {
            return "You win! Scissors beats Paper"
        } else 
            return "Scissors vs Scissors is a tie"  
}

//const playerSelection = prompt("Rock, Paper, or Scissors");
const computerSelection = computerPlay();
// console.log(playRound(playerSelection, computerSelection));


// playerScore - computerScore
// if "win", playerScore + 1
// if "lose", computerScore + 1
// if "tie", doNothing?

function game() {
    console.log (playRound)
}