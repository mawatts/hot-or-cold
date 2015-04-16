$(document).ready(function(){
    
 /*--- Display information modal box ---*/
 $(".what").click(function(){
  $(".overlay").fadeIn(500);
 });

 /*--- Hide information modal box ---*/
 $("a.close").click(function(){
  $(".overlay").fadeOut(500);
 });

 /*--- Declare Global Variables ---*/
 var guess;
 var totalGuesses = 0;
 var rndNumber = 0;

 /*--- Generate a random number between 1 and 100 ---*/
 function randomNumber() {
  rndNumber = Math.floor((Math.random()*100)+1);
 }

 randomNumber();

 /*--- User Input Function ---*/
 $('#guessButton').click(function(e) {
  event.preventDefault();
  alert(rndNumber);
  guess = +$('#userGuess').val();
  
  if(guess=="" || guess > 100) {
   alert("Please enter a number between 1 and 100!");
  }
  else if(isNaN(guess)) {
   alert("Please enter a numeric value!");
  }
  else if(guess % 1 != 0){
   alert("Please enter a whole number and not a decimal!");
  }
  else {
   feedback();
   addCount();
  }
 });

 /*--- Feedback function based on User's Guess ---*/
 function feedback() {
  var difference = Math.abs(guess - rndNumber);
  var prevGuess;
  var prevDifference = Math.abs(prevGuess - rndNumber);

  if(guess > rndNumber || guess < rndNumber) {
   if (totalGuesses == 0) {
    if (difference >= 50) {
     alert("Freezing");
    }
    else if (difference >= 40) {
     alert("Ice Cold");
    }
    else if (difference >= 30) {
     alert("Cold");
    }
    else if (difference >= 20) {
     alert("Warm");
    }
    else if (difference >= 10) {
     alert("Burning up");
    }
    else {
     alert("On Fire");
    }
    prevGuess = guess;
   }
   else {
    if (difference > prevDifference) {
     if (guess > rndNumber) {
      alert("You're Colder, guess lower");
     }
     else {
      alert("You're Colder, guess higher");
     }
    }
    else if (difference < prevDifference) {
     if (guess > rndNumber) {
      alert("You're Warmer, guess lower");
     }
     else {
      alert("You're Warmer, guess higher");
     }
    }
    else {
     if (guess > rndNumber) {
      alert("You're on fire, guess a little lower");
     }
     else {
      alert("You're on fire, guess a little higher");
     }
    }
   }
  }
  else {
   alert("You guessed the right number!");
  }
 }

 /*--- Increment Guess count and append guess count ---*/
 function addCount() {
  totalGuesses++;
  $("#count").text(totalGuesses);
 }

 /*--- Start a new game on click of New Game button ---*/
 function newGame() {
  /*--- Call random number generator function ---*/
  randomNumber();

  /*--- Clear content for new game start ---*/

 }

});