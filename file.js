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

const buttons = document.querySelectorAll('button')
buttons.forEach(button => button.addEventListener('click', function () {
    console.log(playRound(button.className, computerPlay()))}))

function game() {
    let playerScore = 0;
    let computerScore = 0;

    let a = playRound(prompt("choose"), computerPlay())
    console.log(a)

    if (a.includes("win")) {
        console.log(`${playerScore += 1}-${computerScore}`);
    } else if (a.includes("lose")) {
        console.log(`${playerScore}-${computerScore += 1}`);
    } else {
        console.log(`${playerScore}-${computerScore}`);
    }
    
    // if (playerScore < computerScore) {
    //     console.log("You lose");
    // } else if (playerScore > computerScore) {
    //     console.log("You win");
    // } else {
    //     console.log("It's a tie");
    // } 
}