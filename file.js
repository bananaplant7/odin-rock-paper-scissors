let myArray = [
    'rock',
    'paper',
    'scissors'
];

// random selection between r,p,s
function computerPlay() {
    return myArray[Math.floor(Math.random() * myArray.length)];
}

function playRound(playerSelection, computerSelection) {
    if (
        playerSelection.toLowerCase() === 'rock'
        &&
        computerSelection.toLowerCase() === 'rock'
    ) {
        return "Rock vs Rock is a tie";
    } else if
        (
        playerSelection.toLowerCase() === 'rock'
        &&
        computerSelection.toLowerCase() === 'paper'
    ) {
        return "You lose! Paper beats Rock";
    } else if
        (
        playerSelection.toLowerCase() === 'rock'
        &&
        computerSelection.toLowerCase() === 'scissors'
    ) {
        return "You win! Rock beats Scissors";
    } else if
        (
        playerSelection.toLowerCase() === 'paper'
        &&
        computerSelection.toLowerCase() === 'rock'
    ) {
        return "You win! Paper beats Rock";
    } else if
        (
        playerSelection.toLowerCase() === 'paper'
        &&
        computerSelection.toLowerCase() === 'paper'
    ) {
        return "Paper vs Paper is a tie";
    } else if
        (
        playerSelection.toLowerCase() === 'paper'
        &&
        computerSelection.toLowerCase() === 'scissors'
    ) {
        return "You lose! Scissors beats Paper";
    } else if
        (
        playerSelection.toLowerCase() === 'scissors'
        &&
        computerSelection.toLowerCase() === 'rock'
    ) {
        return "You lose! Rock beats Scissors";
    } else if
        (
        playerSelection.toLowerCase() === 'scissors'
        &&
        computerSelection.toLowerCase() === 'paper'
    ) {
        return "You win! Scissors beats Paper";
    } else
        return "Scissors vs Scissors is a tie";
}

let playerScore = 0;
let computerScore = 0;

const results = document.querySelector('.results');

const score = document.querySelector('.score');
score.textContent = `${playerScore}-${computerScore}`;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function () {
    results.textContent = playRound(button.className, computerPlay());
    winOrLose(); // prevent more rounds after score of 5
    keepScore();
}));

function winOrLose() {
    if (playerScore == 5) {
        results.textContent = ("you won! :D");
    } else if (computerScore == 5) {
        results.textContent = ("you louse + garbage + balding + L + ratio");
    }
}

function keepScore() {
    if (results.textContent.includes("win")) {
        score.textContent = (`${playerScore += 1}-${computerScore}`);
        winOrLose(); // display msg
    } else if (results.textContent.includes("lose")) {
        score.textContent = (`${playerScore}-${computerScore += 1}`);
        winOrLose(); // display msg
    } else {
        score.textContent = (`${playerScore}-${computerScore}`);
    }
}
