var startButton = document.querySelector("#start");
var scoreButton = document.querySelector("#highscore");
var introText = document.querySelector(".quiz-text");
var question1 = document.querySelector("#question1");
var quizbtn1 = document.querySelector(".quiz-btn1");
var quizbtn2 = document.querySelector(".quiz-btn2");
var quizbtn3 = document.querySelector(".quiz-btn3");
var quizbtn4 = document.querySelector(".quiz-btn4");

// Create answer buttons
var btn1 = document.createElement("button");
var btn2 = document.createElement("button");
var btn3 = document.createElement("button");
var btn4 = document.createElement("button");


// Timer runs when start quiz button clicked
function startQuiz() {
    console.log("click");
    // remove buttons and intro text
    startButton.remove();
    scoreButton.remove();
    introText.remove();
    question1.classList.remove("hide");
    quizbtn1.classList.remove("hide");
    quizbtn2.classList.remove("hide");
    quizbtn3.classList.remove("hide");
    quizbtn4.classList.remove("hide");
    
    // display and start countdown timer
    var counter = 60;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = "Time remaining: " + counter;
        }
    // alert user once timer reaches 0
        if (counter === 0) {
            alert("Sorry, time's up!");
            clearInterval(counter);
        }
    }, 1000);

    // start questions once start button clicked
    var possibleQuestion = [{
        questions: "How many inches are in a foot?",
        answer: ["2", "6", "5", "12"],
        correct: 4,
    },
    {
        questions: "What color is the sky?",
        answer: ["Red", "Green", "Purple", "Blue"],
        correct: 1,
    }
    ];
}

// Add event listener to start button
startButton.addEventListener("click", startQuiz);

// Add event lisener to high score button
scoreButton.addEventListener("click", highScore);
