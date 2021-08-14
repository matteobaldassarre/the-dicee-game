// Function that contains all the functionalities of the game
function startGame() {
    // Storing a random number from 1 to 6 for the Player One
    let randomNumber1 = getRandomNumber();

    // Storing a random number from 1 to 6 for the Player Two
    let randomNumber2 = getRandomNumber();


    // Selecting the Player One dice-image and changing its src attribute based on the random number
    let playerOneDice = document.querySelector('.player-one img');
    let playerOneDiceValue = 'img/dice' + randomNumber1 + '.png';
    playerOneDice.setAttribute('src', playerOneDiceValue);


    // Selecting the Player Two dice-image and changing its src attribute based on the random number
    let playerTwoDice = document.querySelector('.player-two img');
    let playerTwoDiceValue = 'img/dice' + randomNumber2 + '.png';
    playerTwoDice.setAttribute('src', playerTwoDiceValue);


    // Selecting the result heading element from the DOM by its id
    let resultMessage = document.getElementById('result');

    // Conditional statement to determine the winner
    if (randomNumber1 === randomNumber2) {
        fadeResult();
        resultMessage.innerHTML = 'Draw!';
    } else if (randomNumber1 > randomNumber2) {
        fadeResult();
        resultMessage.innerHTML = 'Player One Wins!';
    } else {
        fadeResult();
        resultMessage.innerHTML = 'Player Two Wins!';
    }

    document.getElementById('throw-dicee').innerHTML = 'Roll Again';
}

// Making the title fade after the result
function fadeResult() {
    var tl = gsap.timeline();

    tl.set("h1", {
        opacity: 0,
    }).to("h1", {
        duration: 1.2,
        opacity: 1
    });
}


// Function that generates a random number
function getRandomNumber() {
    let randomNumber = Math.floor(Math.random() * 6) + 1;
    return randomNumber;
}