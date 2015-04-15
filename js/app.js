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
  rndNumber = Math.floor(Math.random()*100+1);
 }

 /*--- User Input Function ---*/
 $('#guessButton').click(function() {
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
   
  }
 });

 /*---  ---*/
 function feedback() {
  
 }

 /*--- Start a new game on click of New Game button ---*/
 function newGame() {
  /*--- Call random number generator function ---*/
  randomNumber();

  /*--- Clear content for new game start ---*/

 }

});