var startBtn = document.getElementById("start-button");
var questionHeading = document.getElementById("question");
var answersList = document.getElementById("answers");
var currentQuestion = 0
var score = document.getElementById("timer").value;

// Event listener for Start Button

startBtn.addEventListener("click", function (event) {
    document.getElementById("start-screen").classList.add("d-none");
    document.getElementById("qa-screen").classList.remove("d-none");

    // Start timer once quiz begins

    var seconds = document.getElementById("timer").textContent;
    var timer = setInterval(function () {
        seconds--;
        document.getElementById("timer").textContent = "Time: " + seconds;
        if (seconds <= 0) clearInterval(timer);
    }, 1000);
    printQuestion()
});

// Function to make question appear

function printQuestion() {
    var choices = questions[currentQuestion].choices;
    var answer = questions[currentQuestion].answer;
    questionHeading.textContent = questions[currentQuestion].title;
    answersList.innerHTML = "";
    for (var i = 0; i < choices.length; i++) {
        var newChoice = document.createElement("button");
        newChoice.textContent = choices[i];
        newChoice.value = choices[i]
        newChoice.onclick= checkQuestion 
        answersList.appendChild(newChoice);
    }
}

// Checking if correct answer was selected

function checkQuestion(event){
    console.log(event.target.value)
    if(questions[currentQuestion].answer === event.target.value){
        printQuestion();
    }
    else{
        deductTime();
    }
    currentQuestion++
    printQuestion()
}

// Deducting time left for incorrect selection

function deductTime(){
    
}

// Adding score to High Scores list

function addHighScore(){

}







