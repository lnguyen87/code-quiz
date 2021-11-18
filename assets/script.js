var startButton = document.querySelector("#start");
var scoreButton = document.querySelector("#highscore");
var introText = document.querySelector(".quiz-text");
var questionContent = document.querySelector("#question-content");
var timer = document.querySelector("#timer");

var currentIndex = 0;
var question = document.querySelector("#question");
var answers = document.querySelector(".answers");

var scoreContent = document.querySelector("#highscore-content");
var scoreTitle = document.querySelector("#highscore-title");
var playerScore = 0;



//  question and answers array
var possibleQuestion = [{
    questions: "How many inches are in a foot?",
    answer: ["2", "6", "5", "12"],
    correct: "12",
},
{
    questions: "What color is the sky?",
    answer: ["Red", "Green", "Purple", "Blue"],
    correct: "Blue",
},
{
    questions: "What is the sum of 2 + 2?",
    answer: ["22", "4", "0", "2"],
    correct: "4",
},
{
    questions: "How many feet are in a yard?",
    answer: ["3", "6", "9", "12"],
    correct: "3",
},
{
    questions: "What color is grass?",
    answer: ["Green", "Orange", "Yellow", "Brown"],
    correct: "Green",
}
];


// Timer runs when start quiz button clicked
function startQuiz() {
    // remove buttons and intro text
    startButton.remove();
    scoreButton.remove();
    introText.remove();
    questionContent.classList.remove("hide");

    
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

// link questions to question id and answers div
function showQuestion() {
    answers.innerHTML = "";
    if(counter === 0 || currentIndex === possibleQuestion.length) {
        console.log("The quiz has ended.");
        questionContent.style.display = "none";
        clearInterval(counter);
        timer.remove();
        scoreContent.classList.remove("hide");
        endQuiz();
        return
    }
    var currentQuestion = possibleQuestion[currentIndex];
    question.textContent = currentQuestion.questions;
    for (var i = 0; i < currentQuestion.answer.length; i++) {
        var answerEl = currentQuestion.answer[i];
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answerEl;
        answerBtn.style.backgroundColor = "#005780";
        answerBtn.style.color = "#FFFFFF";
        answerBtn.style.margin = "10px";
        answerBtn.style.boxShadow = "1px 1px 2px #000000;"
        answerBtn.setAttribute("value", answerEl);
        answerBtn.onclick = checkAnswer;
        answers.appendChild(answerBtn);
    }
}

// check if answer is correct or incorrect
function checkAnswer() {
    if (this.value === possibleQuestion[currentIndex].correct) {
        console.log(this.value);
        console.log("Correct");
        playerScore = playerScore + 10;
        currentIndex++;
        showQuestion();
    } else {
        console.log(this.value);
        console.log("Incorrect");
        counter = counter - 5;
        currentIndex++;
        showQuestion();
    }
}
showQuestion();
};

var endQuiz = function() {
    alert("You have completed the quiz. Let's see how you did!");

    var highScore = localStorage.getItem("highscore");
    if (highScore === null) {
        highScore = 0;
    }    

    if (playerScore >= highScore) {
        localStorage.setItem("highscore", playerScore);
        localStorage.setItem("name", playerName);

        alert("You have the high score of " + playerScore + "!");
    } else {
        alert("You did not beat the high score of " + highScore + ". Better luck next time!");
    }

    if (playerScore > 0) {
        alert("Your score is " + playerScore + " out of 50.");
    } else {
        alert("You did not answer any questions correctly.");
    }

};

var playerName = function() {
    var name = "";

    while (name === "" || name === null) {
        name = prompt("Please enter your name.")
    }
    console.log("Player name is " + name);
    return name;
};


// Add event listener to start button
startButton.addEventListener("click", startQuiz);

// Add event lisener to high score button
// scoreButton.addEventListener("click", highScore);
