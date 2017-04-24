var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z", "y", "z"];

var words = ["husky", "labrador", "maltese", "poodle", "doberman"];

var choices = [];

var printLetters = function() {
	for (i = 0; i < letters.length; i++) {
		document.getElementById("alphabet").innerHTML += "<button>" 
		+ letters[i] + "</button>";
	} // end for loop
}; // end function

var storeLetters = function() {
	var userChoice = document.getElementById("choice").innerHTML;
	console.log(userChoice);
	choices.push(userChoice);
}

var gameStart = function() {
	var gameWord = words[Math.floor(Math.random() * words.length)];
	console.log(gameWord);
	document.getElementById("word").innerHTML = gameWord;

	var blanks = gameWord.replace("d", "_");
	console.log(blanks);
	document.getElementById("word").innerHTML = blanks;

} 

