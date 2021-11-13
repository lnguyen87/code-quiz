var startButton = document.querySelector("#start");


// 
function startQuiz() {
    console.log("click");
    var counter = 60;
    setInterval(function() {
        counter--;
        if (counter >= 0) {
            span = document.getElementById("timer");
            span.innerHTML = counter;
        }
        if (counter === 0) {
            alert("Sorry, time's up!");
            clearInterval(counter);
        }
    }, 1000);
}


// Add event listener to start button
startButton.addEventListener("click", startQuiz)