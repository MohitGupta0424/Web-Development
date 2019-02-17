// Global variables
var buttonColours = ["red","blue","green","yellow"];
var gamePattern = [];
var userClickedPattern = [];
var level = 0;
var started = false;

$("h1").text("Press A key to Start");
$(document).keypress(function(){
  if(started == false){
    nextSequence();
  }
  started = true;
});

// Creates a random sequence for the user
function nextSequence(){
  level++;
  $("h1").text("Level "+level );

  var randomNumber = Math.floor(Math.random() * 4);
  var randomChosenColor = buttonColours[randomNumber];
  gamePattern.push(randomChosenColor);
  $("#"+randomChosenColor).fadeIn(100).fadeOut(100).fadeIn(100);
  playSound(randomChosenColor);
}

// Detects the user click and perform appropriate functions
$(".btn").click(function(){
  var userChosenColor = $(this).attr('id');
  userClickedPattern.push(userChosenColor);
  playSound(userChosenColor);
  animatePress(userChosenColor);
  var index = userClickedPattern.length -1;
  checkAnswer(index);
});

// Plays the audio file
function playSound(name){
  var audio = new Audio("sounds/"+ name +".mp3");
  audio.play();
}

// Animation effect when the user clicks the button
function animatePress(currentColour){
  $("#"+currentColour).addClass("pressed");
  setTimeout(function () { $("#"+currentColour).removeClass("pressed");}, 100);
}

// This function checks the user clicked pattern with the game pattern
// For success th egame move forwards and with fail it calls the start over fuction
function checkAnswer(currentLevel){
  if(userClickedPattern[currentLevel] == gamePattern[currentLevel]){
    console.log("Success");
  }
  else{
    playSound("wrong");
    $("body").addClass("game-over");
    setTimeout(function () { $("body").removeClass("game-over");}, 100);
    $("h1").text("Game Over, Press Any Key to Restart");
    startOver();
  }
  if(userClickedPattern.length == gamePattern.length){
    setTimeout(function () {
      nextSequence();
    }, 1000);
    userClickedPattern = [];
  }
}

// To start the game once its over.
// It resets the global variables
function startOver(){
  level = 0;
  started = false;
  gamePattern =[];
}
