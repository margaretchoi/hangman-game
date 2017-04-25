var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z", "y", "z"];

var words = ["husky", "labrador", "maltese", "poodle", "doberman"];

var guesses = [];

// Displays each letter as a button
var printLetters = function() {
	for (i = 0; i < letters.length; i++) {
		document.getElementById("alphabet").innerHTML += "<button onclick='storeLetters()' id='guess'>" 
		+ letters[i] + "</button>";
	} // end for loop
}; // end function

var storeLetters = function() {
	var userGuess = document.getElementById("guess").innerHTML;
	console.log(userGuess);
	guesses.push(userGuess);
}

// Selects a random word and replaces letters as blanks
var gameStart = function() {

	// Assigns gameWord to a random word
	var gameWord = words[Math.floor(Math.random() * words.length)];

	// Split letters from the word into an array
	var gameLetters = gameWord.split("");

	console.log(gameWord);
	console.log(gameLetters);

	var blankWord = [];

	// Assigns each new blank letter to an array
	for (i = 0; i < gameLetters.length; i++) {
		// Replace gameLetter with _ in each index position
		var gameBlanks = gameLetters[i].replace(gameLetters[i], "_");
		blankWord.push(gameBlanks);
	};
	console.log(blankWord);

	document.getElementById("word").innerHTML = blankWord.join(" ");

} 