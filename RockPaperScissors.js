const getUserChoice = userInput => {
    userInput = userInput.toLowerCase();
    if(userInput === 'rock' || userInput === 'scissors' || userInput === 'paper') {
        return userInput
    } else {
        console.log('Error,type: paper, rock or scissors');
    }
}

const getComputerChoice = () => {
    const randomNumber = (Math.floor(Math.random() * 3))
    switch (randomNumber) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }
};

const determineWinner = (userChoice, ComputerChoice) => {
    if(userChoice === ComputerChoice) {
        return 'Tie!';
    }
    if(userChoice === 'rock') {
        if(ComputerChoice === 'paper') {
            return 'Sorry, computer won';
        } else {
            return 'Congratulation, you won';

        }
    }
    if(userChoice === 'paper') {
        if (ComputerChoice === 'scissors') {
            return 'Sorry computer won';
        } else {
            return 'Congratulation user Won';
        }
    }
    if(userChoice === 'scissors') {
        if(computerChoice === 'rock') {
            return 'Sorry computer won';
        } else {
            return 'congratulations you won';
        }
    }
    if (userChoice === 'bomb') {
        return 'Congratulation, you won';
    }
};


const playGame = () => {
    const userChoice = getUserChoice('paper');
    const computerChoice = getComputerChoice();
    console.log('You threw: ' + userChoice);
    console.log('The computer threw' + computerChoice);

    console.log(determineWinner(userChoice,computerChoice));
};

playGame();
