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
score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;

const buttons = document.querySelectorAll('button');
buttons.forEach(button => button.addEventListener('click', function () {
    results.textContent = playRound(button.className, computerPlay());
    winOrLose(); // prevent more rounds after score of 5
    keepScore();
}));

function winOrLose() {
    if (playerScore == 5) {
        results.textContent = ("you won! :D");
        if (score.classList.contains('playAgain')) { // check if function called
            return;
        } else {
            playAgain();
        }
    } else if (computerScore == 5) {
        results.textContent = ("you louse + garbage + balding + L + ratio");
        if (score.classList.contains('playAgain')) { // check if function called
            return;
        } else {
            playAgain();
        }
    }
}

function keepScore() {
    if (results.textContent.includes("win")) {
        score.textContent = 
        (`You: ${playerScore += 1} | Computer: ${computerScore}`);
        winOrLose(); // display msg
    } else if (results.textContent.includes("lose")) {
        score.textContent = 
        (`You: ${playerScore} | Computer: ${computerScore += 1}`);
        winOrLose(); // display msg
    } else {
        score.textContent = 
        (`You: ${playerScore} | Computer: ${computerScore}`);
    }
}

function playAgain() {
    let btn = document.createElement('button');
    score.classList.add('playAgain'); // check if function called
    btn.textContent = 'Play again?';
    document.body.appendChild(btn);

    btn.addEventListener('click', function () {
        score.classList.remove('playAgain');
        playerScore = 0;
        computerScore = 0;
        score.textContent = `You: ${playerScore} | Computer: ${computerScore}`;
        results.textContent = 'Make a choice. It is first to 5 points.';
        btn.remove();
    });
}
