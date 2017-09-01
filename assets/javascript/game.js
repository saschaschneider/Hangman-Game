 
var word = "Flower";
var gameOptions = ["Flower", "Fruit", "Table", "Chair", "Love", "Family", "Water", "Picture", "Refrigerator", "Giraffe"]
 // The word we will use to play, will be randomized later
var gameOptionsLength; // The comptuer needs to know the length of the array, so we can set the upper limit for the random function
var computerChoice; // Computer will pick random word from gameOptions array
var gameWord; // This variable will transform the computer choosen string into an upper case string
var gamewordLength; // In order to show the right character amout to be guessed, we need to know the word length
var blanks= "";
var winword="";
var userInput;
var lives = 6; // According to Wikipedia, the user has 6 lives
var alphabet;
var outputElement;
var guessedLetters = []; // stores the letters the user guessed

gameOptionsLength = gameOptions.length;

computerChoice=gameOptions[Math.floor(Math.random() * gameOptionsLength)];
        console.log("computer choice " + computerChoice);

gameWord = computerChoice.toUpperCase();
gamewordLength = gameWord.length;

var j = 0;  // Creates the blanks i.e. Flower has 6 characters and needs 6 blanks _ _ _ _ _ _
while (j < gamewordLength) {
    blanks += " _";
    j++;
   }

var j = 0;  // Creates the blanks i.e. Flower has 6 characters and needs 6 blanks _ _ _ _ _ _
while (j < gamewordLength) {

    winword += " "+ gameWord.charAt(j);
    j++;



alphabet = 'abcdefghijklmnopqrstuvwxyz'.split('');
outputElement = $('#guessed-letters');


$(document).on('keyup', function (event) {
  var key = event.key.toLowerCase();
  if (alphabet.indexOf(key) !== -1) {
    // the key is a letter in the alphabet
    if (guessedLetters.indexOf(key) === -1) {
      // the key has not been guessed
      guessedLetters.push(key);
      var string = guessedLetters.join(''); // join the letters together to one single string
      outputElement.text(string);
    }
  }
});


var paragraph = document.getElementById("demo").innerHTML = "The word you are looking for has " + gamewordLength + " characters, can you guess it?";
var paragraph1 = document.getElementById("blanks").innerHTML =  "Word:"+blanks;
var pLives = document.getElementById("pLives").innerHTML = " Lives: " + lives;

document.onkeyup = function(event){
      userInput = event.key;
      userInput = userInput.toUpperCase();

      console.log("the userInput is " + userInput) // 
      
  

    var index = gameWord.indexOf(userInput);

        if (index >= 0) { 
        for (var i = 0; i < gamewordLength; i++){
        console.log("Here is the gamword from within the loop:" + " "+ blanks); 
        var index = gameWord.indexOf(userInput,i); // indexOf checks whether a character is within a string, if the character exists the return value is >=0
        console.log(index);
      	console.log("that works, the right position is " +index);
		blanks = blanks.split('');
		blanks[index*2+1] = userInput; 
		blanks = blanks.join('');
		console.log("here are the new blanks:" + " "+ blanks);
		var paragraph1 = document.getElementById("blanks").innerHTML =  "Word:"+blanks;
				
	}}


	 else {  
	// deducting lives if indexOf === -1, as the user selected character does not exist in the string
		lives = lives -1;
		console.log("lives = " +lives)
		var pLives = document.getElementById("pLives").innerHTML = " Lives: " + lives;
	}


	if (lives === 0){
		var gameOver = document.getElementById("gameOver").innerHTML = " GameOver - refresh the site to play again!";
		}
	
				
	else if (blanks === winword) {
		var winner = document.getElementById("winner").innerHTML = "Well done, you guessed the right word!!";
	}

}}



// console.log("How many lives do I have " +lives)
// console.log(paragraph);
// console.log(gamewordLength);
// console.log(gameWord)

// Below is the start to create some input keys

/*document.getElementById("AllKeys").addEventListener("click", myFunction);

function myFunction() {

userInput = $("#AllKeys").text();

	

// userInput = $("#allButtons2").text();

console.log("What is the UserInput " + userInput);
userInput = userInput.toUpperCase();


    var index = gameWord.indexOf(userInput);

        if (index >= 0) { 
        for (var i = 0; i < gamewordLength; i++){
        console.log("Here is the gamword from within the loop:" + " "+ blanks); 
        var index = gameWord.indexOf(userInput,i); // indexOf checks whether a character is within a string, if the character exists the return value is >=0
        console.log(index);
      	console.log("that works, the right position is " +index);
		blanks = blanks.split('');
		blanks[index*2+1] = userInput; 
		blanks = blanks.join('');
		console.log("here are the new blanks:" + " "+ blanks);
		var paragraph1 = document.getElementById("blanks").innerHTML =  "Word:"+blanks;
		
	}}

	 else {  
	// deducting lives if indexOf === -1, as the user selected character does not exist in the string
		lives = lives -1;
		console.log("lives = " +lives)
		var pLives = document.getElementById("pLives").innerHTML = " Lives: " + lives;

	}

	if (lives === 0){
		var gameOver = document.getElementById("gameOver").innerHTML = " GameOver - refresh the site to lose again, Loser!"
	}
	
				
	else if (blanks === winword) {
		var winner = document.getElementById("winner").innerHTML = "Amazing Job, you guessed the right word!!";

	}}}
*/
