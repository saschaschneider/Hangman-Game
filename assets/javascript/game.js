var word = "Flower"; // The word we will use to play, will be randomized later
var gameWord = word.toUpperCase(); //Since we need the world lowercase, we will change it to lowercase here
var gamewordLength = gameWord.length; // In order to show the right character amout  to be guessed, we need to know the word length
var blanks ="";
var userInput = "";
var lives = 6; // According to Wikipedia, the user has 6 lives

var j = blanks.length;  // Creates the blanks
while (j < gamewordLength) {
    blanks += " _";
    j++;
   }

var paragraph = document.getElementById("demo").innerHTML = "The word you are looking for has " + gamewordLength + " characters, can you guess it?";
var paragraph1 = document.getElementById("blanks").innerHTML =  "Word:"+blanks;
var pLives = document.getElementById("pLives").innerHTML = " Lives: " + lives;


 document.onkeyup = function(event){
      userInput = event.key;
      userInput = userInput.toUpperCase();

      console.log("the userInput is " + userInput) // 
      var index = gameWord.indexOf(userInput);
      console.log(index);



      	if (index >= 0) {
		console.log("that works, the right position is " +index);
		blanks = blanks.split('');
		blanks[index*2+1] = userInput;
		blanks = blanks.join('');
		var paragraph1 = document.getElementById("blanks").innerHTML =  "Word:"+blanks;
	} else {
		lives = lives -1;
		console.log("lives = " +lives)
		var pLives = document.getElementById("pLives").innerHTML = " Lives: " + lives;

}}

	


console.log(paragraph);
console.log(gamewordLength);
console.log(gameWord);

