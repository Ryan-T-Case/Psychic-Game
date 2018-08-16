//There are wins, losses, guesses left, and guesses so far
var wins = 0;
var losses = 0;
var guessesLeft = 9;
var guessesMade = [];

// There is a list of all possible letters to choose from
var randomLetters = "abcdefghijklmnopqrstuvwxyz".split("");
console.log(randomLetters);
//Computer thinks of a random lowercase letter
var computerLetter = randomLetters[Math.floor(Math.random()*randomLetters.length)];
console.log(computerLetter);
//Player inputs a letter to guess what computer is thinking
document.onkeyup = function(event) {
    var userGuess = event.key;
    alert("User Guess: " + userGuess);
//Game checks if that letter matches the computer's letter
if (userGuess === computerLetter) {
//If the letter matches, add a win to the Wins total
    wins++;
    alert("Total wins: " + wins);
}
//If the letter does not match, deduct from the guesses left total and add the letter to gueses so far
else {
    guessesLeft--;
    guessesMade.push(userGuess);
    console.log(guessesMade);
    alert("Guesses Left: " + guessesLeft);
}
//If guesses left reaches 0, add a loss to the losses total
if (guessesLeft <= 0) {
    losses++;
    alert("You lose! Total Losses: " + losses);
}
}
// Guesses so far should not allow repeat of the same letter

//If a win or loss occurs, reset the game.