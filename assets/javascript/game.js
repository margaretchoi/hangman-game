var letters = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "z", "y", "z", " "];

var words = ["husky", "labrador", "maltese", "poodle", "doberman"];

var allGuesses = [];
var storeGuesses = [];
var wrongGuesses = []; 

var userScore = 0;
var userLives = 7;
var missedWords = [];

var gameStart = function() {

	// Assigns gameWord to a random word
	var gameWord = words[Math.floor(Math.random() * words.length)];

	// Split letters from the word into an array
	var gameLetters = gameWord.split("");

	console.log(gameWord);
	console.log(gameLetters);

	var blankLetters = [];

	// Assigns each new blank letter to an array
	for (i = 0; i < gameLetters.length; i++) {
		// Replace gameLetter with _ in each index position
		var gameBlanks = gameLetters[i].replace(gameLetters[i], "_");
		blankLetters.push(gameBlanks);
	};
	
	console.log(blankLetters);

	document.getElementById("word").innerHTML = blankLetters.join(" ");

	var resetGuesses = function() {
		document.getElementById("guesses").innerHTML = " ";
		allGuesses.length = 0;
		wrongGuesses.length = 0;
		storeGuesses.length = 0;
	}
	
	resetGuesses();

	// Stores the users guess on keyup and compares it to the letters in the gameLetters
	document.onkeyup = function(event) {
		
		// Stores the users key press
		var userGuess = event.key;
	
		// Stores all user guesses
		allGuesses.push(userGuess);
		

		if (gameLetters.includes(userGuess) === true) {
			for (i = 0; i < gameLetters.length; i++) {
				if (userGuess === gameLetters[i]) {
					console.log(gameLetters[i]);
					blankLetters.splice(i, 1, gameLetters[i]);
					document.getElementById("word").innerHTML = blankLetters.join(" ");
				}
			}
		}

		else if (gameLetters.includes(userGuess) === false) {
			wrongGuesses.push(userGuess);
			storeGuesses.push(wrongGuesses[1]);
			console.log(storeGuesses);
		}

		var blankWord = blankLetters.join("");


		console.log(blankLetters);
		console.log(blankWord);
		console.log(gameWord);
		console.log(wrongGuesses);

		// storeGuesses.push(wrongGuesses[1]);
		// console.log(storeGuesses);
		// wrongGuesses.length = 0;


		if (blankWord === gameWord) {
			alert("You win! Press play to guess again.");
			userScore++;
		}

		// checkWord();

		document.getElementById("guesses").innerHTML = wrongGuesses + " ";

		
		if (storeGuesses.length > 0){
			document.getElementById("dog-image").src = 
			"assets/images/dog-2.jpg";
		}
		if (storeGuesses.length > 1){
			document.getElementById("dog-image").src = 
			"assets/images/dog-3.jpg";
		}
		if (storeGuesses.length > 2){
			document.getElementById("dog-image").src = 
			"assets/images/dog-4.jpg";
		}
		if (storeGuesses.length > 3){
			document.getElementById("dog-image").src = 
			"assets/images/dog-5.jpg";
		}
		if (storeGuesses.length > 4){
			document.getElementById("dog-image").src = 
			"assets/images/dog-6.jpg";
		}
		if (storeGuesses.length > 5){
			document.getElementById("dog-image").src = 
			"assets/images/dog-7.jpg";
		}
		if (storeGuesses.length > 6){
			document.getElementById("dog-image").src = 
			"assets/images/dog-8.jpg";
		}
		if (storeGuesses.length > 7){
			document.getElementById("dog-image").src = 
			"assets/images/dog-9.jpg";
			alert("Oh no, you're caught! Try again.");
			userLives--;
		}


		var newScore = function() { 
			console.log(userScore);
			console.log(userLives);
			// document.getElementById("guesses").innerHTML = userScore + "<br>" + userLives;
			document.getElementById("scores").innerHTML = "Score: " + userScore + "<br>" + "Lives: " + userLives;
		}

		newScore();
		}


	}






