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
  e.preventDefault();
  
  guess = +$('#userGuess').val();
  
  if(guess=="" || guess > 100) {
   alert("Please enter a number between 1 and 100!");
   clearInput();
  }
  else if(isNaN(guess)) {
   alert("Please enter a numeric value!");
   clearInput();
  }
  else if(guess % 1 != 0){
   alert("Please enter a whole number and not a decimal!");
   clearInput();
  }
  else {
   feedback();
   addCount();
   clearInput();
   addGuess();
  }
 });

 /*--- Feedback function based on User's Guess ---*/
 function feedback() {
  var difference = Math.abs(guess - rndNumber);
  var prevGuess = +$("#guessList li").last().text();
  var prevDifference = Math.abs(prevGuess - rndNumber);

  if(guess > rndNumber || guess < rndNumber) {
   if (totalGuesses == 0) {
    if (difference >= 50) {
     addFeedback("Freezing", "#B9D5FF");
    }
    else if (difference >= 40) {
     addFeedback("Ice Cold", "#33AEFF");
    }
    else if (difference >= 30) {
     addFeedback("Cold", "#333DFF");
    }
    else if (difference >= 20) {
     addFeedback("Warm", "#FFDD2C");
    }
    else if (difference >= 10) {
     addFeedback("Burning Up", "#FF4705");
    }
    else {
     addFeedback("On Fire", "#FF0700");
    }
   }
   else {
    if (difference > prevDifference) {
     if (guess > rndNumber) {
      addFeedback("You're Colder, guess lower", "#333DFF");
     }
     else {
      addFeedback("You're Colder, guess higher", "#333DFF");
     }
    }
    else if (difference < prevDifference) {
     if (guess > rndNumber) {
      addFeedback("You're Warmer, guess lower", "#FF4705");
     }
     else {
      addFeedback("You're Warmer, guess higher", "#FF4705");
     }
    }
    else {
     if (guess > rndNumber) {
      addFeedback("You're on fire, guess lower", "#FF0700");
     }
     else {
      addFeedback("You're on fire, guess higher", "#FF0700");
     }
    }
   }
  }
  else {
   addFeedback("You guessed the right number!", "#07CC34");
  }
 }

 /*--- Clear input field value so placeholder text displays again ---*/
 function clearInput() {
  $(".text").val('').focusout();
 }

 /*--- Increment Guess count and append guess count ---*/
 function addCount() {
  totalGuesses++;
  $("#count").text(totalGuesses);
 }

 /*--- Append guess to the Guess List ---*/
 function addGuess() {
  $("#guessList").append("<li>" + guess + "</li>")
 }

 /*--- Change Feedback text ---*/
 function addFeedback(txt, hexColor) {
  $("#feedback").text(txt);
  $("h2").css("background", hexColor);
 }

 /*--- Start a new game on click of New Game button ---*/
 $('.new').click(function() {
  totalGuesses = 0;

  $("#count").text("0");
  $(".guessBox").empty();

  addFeedback("Make your Guess!", "#89B25D");
  clearInput();
  randomNumber();
 });
});