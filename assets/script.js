var startButton = document.querySelector("#start");
var scoreButton = document.querySelector("#highscore");
var introText = document.querySelector(".quiz-text");
var questionContent = document.querySelector("#question-content");
var timer = document.querySelector("#timer");

var currentIndex = 0;
var question = document.querySelector("#question");
var answers = document.querySelector(".answers");



//  question and answers array
var possibleQuestion = [{
    questions: "How many inches are in a foot?",
    answer: ["2", "6", "5", "12"],
    correct: 4,
},
{
    questions: "What color is the sky?",
    answer: ["Red", "Green", "Purple", "Blue"],
    correct: 1,
},
{
    questions: "What is the sum of 2 + 2?",
    answer: ["22", "4", "0", "2"],
    correct: 2,
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
        console.log("Sorry, time's up!");
        questionContent.style.display = "none";
        clearInterval();
        timer.remove();
        return
    }
    var currentQuestion = possibleQuestion[currentIndex];
    question.textContent = currentQuestion.questions;
    for (var i = 0; i < currentQuestion.answer.length; i++) {
        var answerEl = currentQuestion.answer[i];
        console.log(answerEl);
        var answerBtn = document.createElement("button");
        answerBtn.textContent = answerEl;
        answerBtn.setAttribute = ("value", answerEl);
        answers.append(answerBtn);
    }
}

showQuestion();

};

// Add event listener to start button
startButton.addEventListener("click", startQuiz);

// Add event lisener to high score button
// scoreButton.addEventListener("click", highScore);
