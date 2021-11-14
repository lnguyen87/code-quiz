var startButton = document.querySelector("#start");
var scoreButton = document.querySelector("#highscore");

// Timer runs when start quiz button clicked
function startQuiz() {
    console.log("click");
    var counter = 60;
    startButton.remove();
    scoreButton.remove();
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = "Time remaining: " + counter;
        }
        if (counter === 0) {
            alert("Sorry, time's up!");
            clearInterval(counter);
        }
    }, 1000);
}

// Add event listener to start button
startButton.addEventListener("click", startQuiz);

// Add event lisener to high score button
scoreButton.addEventListener("click", highScore);
