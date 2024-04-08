function capitalizeString(str) {
    return str.charAt(0).toUpperCase() + str.slice(1)
}

function getComputerChoice() {
    let compChoiceVal = Math.floor(Math.random() * 9 + 1 );
    if (compChoiceVal === 1 || compChoiceVal === 4 || compChoiceVal === 7) {
        return 'Rock';
    } else if (compChoiceVal === 2 || compChoiceVal === 5 || compChoiceVal === 8) {
        return 'Paper';
    } else {
        return 'Scissors';
    }
}

function playRound(playerSelection, computerSelection) {
    if (playerSelection !== 'Rock' && playerSelection !== 'Paper' && playerSelection !== 'Scissors') {
        return 'INVALID INPUT';
    }

    if (playerSelection === computerSelection) {
        return 'Draw! ' + playerSelection + ' equals ' + computerSelection;
    } else if (
        playerSelection === 'Rock' && computerSelection === 'Paper' ||
        playerSelection === 'Paper' && computerSelection === 'Scissors' ||
        playerSelection === 'Scissors' && computerSelection === 'Rock'
    ) {
        return 'You Lose! ' + computerSelection + ' beats ' + playerSelection;
    } else {
        return 'You Win! ' + playerSelection + ' beats ' + computerSelection;
    }
}

function playGame() {
    let round = 5;
    while (round) {
        let playerSelection = prompt('Select: Rock, Paper, Scissors');
        playerSelection = capitalizeString(playerSelection);

        const computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection); 

        round--;
        
        if (result === 'INVALID INPUT') {
            console.log('INVALID RESULT');
            round++;
            continue;
        }

        console.log(result);
    }
}

playGame();