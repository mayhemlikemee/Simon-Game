gamePattern = [];

buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {
    var randomNumber = Math.floor(Math.random() * 4);
    var randomChosenColour = buttonColours[randomNumber];
    gamePattern.push(randomChosenColour);
  
    // Animate a flash to the button selected
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  
    // Sound for the button colour selected 
    var audio = new Audio("sounds/" + randomChosenColour + ".mp3");
    audio.play();
};