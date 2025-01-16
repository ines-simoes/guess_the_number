let generatedNumbers = [];
let higherNumber = 100;
let secretNumber = createRandomNumber();
let attempts = 1;

showInitialMessage();
cleanField();

function verifyGuess() {
    let guess = document.querySelector('input').value;

    if (guess > 0 & guess <= higherNumber) {
        if (guess > secretNumber) {
            showTextOnScreen('p', `Try again. The number is less than ${guess}.`);
            attempts ++;
            cleanField();
        }

        else if (guess < secretNumber) {
            showTextOnScreen('p', `Try again. The number is greater than ${guess}.`);
            attempts ++;
            cleanField();
        }

        else {
            showTextOnScreen('h1', 'Correct!');
            let wordAttempts = attempts > 1 ? 'attempts' : 'attempt';
            showTextOnScreen('p', `You guessed the number in ${attempts} ${wordAttempts}.`);
            document.getElementById('reload').removeAttribute('disabled');
            
        }

    }

    else {
        showTextOnScreen('p', `Attention. The chosen number has to be between 1 and ${higherNumber}.`);
    }
}

function reloadGame() {
    secretNumber = createRandomNumber();
    attempts = 1;
    cleanField();
    showInitialMessage();
    document.getElementById('reload').setAttribute('disabled', true);
}



function showTextOnScreen(tag, text) {
    let field = document.querySelector(tag);
    field.innerHTML = text;
}

function showInitialMessage() {
    showTextOnScreen('h1', 'Guess The Number');
    showTextOnScreen('p', `Choose a number between 1 and ${higherNumber}.`);
}

function createRandomNumber() {
    let randomNumber = Math.floor(Math.random() * (higherNumber - 1 + 1)) + 1;

    if (generatedNumbers.length == higherNumber) {
        generatedNumbers = [];
    }

    if (generatedNumbers.includes(randomNumber)) {
        createRandomNumber();
    }

    else {
        generatedNumbers.push(randomNumber);
        return randomNumber;
    }

}

function cleanField() {
    guess = document.querySelector('input');
    guess.value = '';
}