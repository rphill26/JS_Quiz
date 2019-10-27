var startBtn = document.getElementById("start-button");
var questionHeading = document.getElementById("question");
var answersList = document.getElementById("answers");



startBtn.addEventListener("click", function(event){
    document.getElementById("start-screen").classList.add("d-none");
    document.getElementById("qa-screen").classList.remove("d-none");
    
    
    questionHeading.textContent = questions[0].title;
    answersList.innerHTML = "";
    
    
    var seconds = document.getElementById("timer").textContent;
    var timer = setInterval(function() {
        seconds--;
        document.getElementById("timer").textContent = seconds;
        if (seconds <= 0) clearInterval(timer);
    }, 1000);
    
    
    
    var choices = questions[0].choices;
    var answer = questions[0].answer;
    for (var i = 0; i < choices.length; i++){
        var newChoice = document.createElement("button");
        newChoice.textContent = choices[i];
        answersList.appendChild(newChoice);

        if(newChoice.textContent === answer){
            newChoice.setAttribute("class", "true");
            console.log(newChoice.textContent);
            console.log(newChoice.className);
            console.log(typeof newChoice);
        } else {
            newChoice.setAttribute("class", "false");
            console.log(newChoice.textContent);
            console.log(newChoice.className);
            console.log(typeof newChoice);
        }

        

        newChoice.addEventListener("click", function(event){
            if (newChoice.textContent === answer){
                alert("correct");
            } else {
                alert("wrong");
            }
        });
    }    
});








