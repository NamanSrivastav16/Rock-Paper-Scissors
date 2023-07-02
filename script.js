// const score = {
//     wins: 0,
//     losses: 0,
//     draws: 0
// };

// To keep the data after refreshing the page
let score = JSON.parse(localStorage.getItem('score'));

if (score === null) {
    score = {
        wins: 0,
        losses: 0,
        draws: 0
    };
}

updateScore();

function pickComputerMove() {
    const randomNumber = Math.random();

    let computerMove = '';

    if (randomNumber >= 0 && randomNumber < 1 / 3) {
        computerMove = 'rock';
    }
    else if (randomNumber >= 1 / 3 && randomNumber < 2 / 3) {
        computerMove = 'paper';
    }
    else if (randomNumber >= 2 / 3 && randomNumber < 1) {
        computerMove = 'scissors';
    }
    return computerMove;
}

function playGame(playerMove) {
    const computerMove = pickComputerMove();

    let res = '';
    if (playerMove === 'rock') {
        if (computerMove === 'rock') {
            res = 'Tied';
        }
        else if (computerMove === 'paper') {
            res = 'You Lose';
        }
        else if (computerMove === 'scissors') {
            res = 'You Win';
        }
    }
    else if (playerMove === 'paper') {
        if (computerMove === 'rock') {
            res = 'You Win';
        }
        else if (computerMove === 'paper') {
            res = 'Tied';
        }
        else if (computerMove === 'scissors') {
            res = 'You Lose';
        }
    }
    else if (playerMove === 'scissors') {
        if (computerMove === 'rock') {
            res = 'You Lose';
        }
        else if (computerMove === 'paper') {
            res = 'You Win';
        }
        else if (computerMove === 'scissors') {
            res = 'Tied';
        }
    }
    if (res === 'You Win') {
        score.wins += 1;
    }
    else if (res === 'You Lose') {
        score.losses += 1;
    }
    else if (res === 'Tied') {
        score.draws += 1;
    }

    localStorage.setItem('score', JSON.stringify(score));

    updateScore();

//     alert(`You picked ${playerMove}. Computer picked ${computerMove}. ${res}
// Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws} `);
}

function updateScore() {
    document.querySelector('.js-score').innerHTML = `Wins: ${score.wins}, Losses: ${score.losses}, Draws: ${score.draws}`;
}