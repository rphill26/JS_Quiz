var startBtn = document.getElementById("start-button");
var questionHeading = document.getElementById("question");
var answersList = document.getElementById("answers");


startBtn.addEventListener("click", function(event){
    document.getElementById("start-screen").classList.add("d-none");
    document.getElementById("qa-screen").classList.remove("d-none");

    questionHeading.textContent = questions[0].title;
    answersList.innerHTML = "";

    var choices = questions[0].choices;
    for (var i = 0; i < choices.length; i++){
        var newChoice = document.createElement("div");
        newChoice.textContent = choices[i];
        answersList.appendChild(newChoice);
    }
});


