function getComputerChoice() {
    let compChoiceVal = Math.floor(Math.random() * 9 + 1 );
    if (compChoiceVal === 1 || compChoiceVal === 4 || compChoiceVal === 7) {
        return 'rock';
    } else if (compChoiceVal === 2 || compChoiceVal === 5 || compChoiceVal === 8) {
        return 'paper';
    } else {
        return 'scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return 0;
    } else if (
        playerSelection === 'rock' && computerSelection === 'paper' ||
        playerSelection === 'paper' && computerSelection === 'scissors' ||
        playerSelection === 'scissors' && computerSelection === 'rock'
    ) {
        return -1;
    } else {
        return 1;
    }
}

const choice = document.querySelector('.choice');
const result = document.querySelector('.result');
const round = document.querySelector('.round');
const score = document.querySelector('.player-score');
const compScore = document.querySelector('.computer-score');
const finalResult = document.querySelector('.final-result');

let gameRound = 0;
let playerScore = 0;
let computerScore = 0;

round.textContent = 'Round: ' + gameRound;
score.textContent = 'Player Score: ' + playerScore;
compScore.textContent = 'Computer Score: ' + computerScore;

choice.addEventListener('click', (event) => {
    finalResult.textContent = '';
    let playerSelection = event.target.id;
    let computerSelection = getComputerChoice();

    let gameResult = playRound(playerSelection, computerSelection);
    
    if (gameResult == 1) {
        result.textContent = 'You Win! ' + playerSelection + ' beats ' + computerSelection;
        playerScore++;
    } else if (gameResult == -1) {
        result.textContent = 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
        computerScore++;
    } else {
        result.textContent = 'Draw! ' + playerSelection + ' equals ' + computerSelection;
    }

    score.textContent = 'Player Score: ' + playerScore;
    compScore.textContent = 'Computer Score: ' + computerScore;

    gameRound++;
    round.textContent = 'Round: ' + gameRound;

    if (gameRound === 5) {
        if (playerScore > computerScore) finalResult.textContent = 'Player Wins!'
        else if (computerScore > playerScore) finalResult.textContent = 'Computer Wins!'
        else if (computerScore === playerScore) finalResult.textContent = 'Tie!'

        gameRound = 0;
        playerScore = 0;
        computerScore = 0;
    }
});