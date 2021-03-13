gamePattern = [];

userClickedPattern = [];

buttonColours = ["red", "blue", "green", "yellow"];


function nextSequence() {

    // Random number between 0-3
    var randomNumber = Math.floor(Math.random() * 4);

    // Matches number to a color based on indexing
    var randomChosenColour = buttonColours[randomNumber];

    // Adds the random color selected to the empty game pattern
    gamePattern.push(randomChosenColour);
  
    // Animates a flash to the button selected
    $("#" + randomChosenColour).fadeIn(100).fadeOut(100).fadeIn(100);
  

};

// Event listener on the buttons to detect a click
$(".btn").click(function() {
    
    // Selects the chosen color's ID attribute
    userChosenColour = $(this).attr("id");

    // Pushes it onto user clicked array
    userClickedPattern.push(userChosenColour);


    // Plays sound corresponding to button color
    playSound(userChosenColour);

    animatePress(userChosenColour);
});


function playSound(name) {
        // Sound for the button colour selected 
        var audio = new Audio("sounds/" + name + ".mp3");
        audio.play();
};

// Flashes the button that was clicked
function animatePress(currentColour) {
    
    // Adds class pressed to selected button
    $("#" + currentColour).addClass("pressed");

    // Removes the class after 100ms to create the "flash" effect
    setTimeout(function() {
        $("#" + currentColour).removeClass("pressed");
    }, 100);
};