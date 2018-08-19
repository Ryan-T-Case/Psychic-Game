//There are wins, losses, guesses left, and guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];
var computerLetter = 0;
// There is a list of all possible letters to choose from
var randomLetters = "abcdefghijklmnopqrstuvwxyz".split("");
//Computer thinks of a random lowercase letter
var computerLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
console.log("Guess this letter: " + computerLetter);
//Player inputs a letter to guess what computer is thinking
document.onkeyup = function (event) {
    var userGuess = event.key.toLowerCase();
    console.log(userGuess);
    //Game checks if that letter matches the computer's letter
    if (userGuess === computerLetter) {
        //If the letter matches, add a win to the Wins total, reset computer letter and guesses.
        wins++;
        document.getElementById("winCount").innerHTML = wins;
        guessesLeft = 9;
        guessesMade.length = 0;
        computerLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
        console.log("Guess new letter: " + computerLetter);
    }
    //If the letter does not match, deduct from the guesses left total and add the letter to gueses so far
    else {
        guessesLeft--;
        document.getElementById("attemptsCount").innerHTML = guessesLeft;
        // Guesses so far should not allow repeat of the same letter, also does not allow non-letter keys
        if ((guessesMade.indexOf(userGuess) === -1) && (userGuess !== "Enter" && userGuess !== "Shift" && userGuess !=="Backspace" && userGuess !=="Control")) {
            guessesMade.push(userGuess);
            document.getElementById("guessLog").innerHTML = guessesMade;
        }
    }
    //If guesses left reaches 0, add a loss to the losses total, reset computer letter and guesses.
    if (guessesLeft <= 0) {
        losses++;
        document.getElementById("lossCount").innerHTML = losses;
        guessesLeft = 9;
        guessesMade.length = 0;
        computerLetter = randomLetters[Math.floor(Math.random() * randomLetters.length)];
        console.log("Guess new letter: " + computerLetter);
    }
}

