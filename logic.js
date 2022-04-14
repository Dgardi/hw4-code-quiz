

// Variables to keep track 
var currentQuestionIndex = 0;
var time = 100;
var timeCounter;

// Questions to Reference
var questions = [
    {
        question: "What does HTML stand for?",
        options:["Hyper Text Markup Language", "Happy Tomato Mega Land", "Hot Tamale Mmm Laser"],
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is an object?",
        options: ["Everything's an object","Nothing is an object", "A standalone entity, with properties and type" ],
        answer: "A standalone entity, with properties and type"
    },
    {
        question: "Which tag has the largest heading size?",
        options: ["h1","h2","h3","h4"],
        answer: "h1"
    },
    {
        question: "Which character is used to end a tag?",
        options: ["*","&","/","}"],
        answer: "/"
    },
    {
        question: "HTML comments begin with ~/",
        options: ["true","false"],
        answer: "false"
    }

];

// Variables to reference the DOM elements 
var questionsId = document.getElementById("questions");
var timeLeftId = document.getElementById("timeLeft");
var optionsId = document.getElementById("options");
var submitBtnId = document.getElementById("submit");
var startBtnId = document.getElementById("start");
var initialsId = document.getElementById("initials");
var beginning = document.getElementById("beginning")
var endingEl = document.getElementById("ending")
var finalScoreEl = document.getElementById("final-score")
var scoresBtn = document.getElementById("viewScores")
var leaderBoard = document.getElementById("leaderboard")
// var currentQuestion = $("questions-title");





// Start Game
function startGame() {
  
    //pull "beginning" element and set it to hidden
    beginning.classList.add("hidden")

    //pull the "quiz" element and removes the hidden class so it displays
    questionsId.classList.remove("hidden");

    //start the countdown timer starting at Time
    timeCounter = setInterval(countdown, 1000)
    timeLeftId.textContent = time
    getQuestion()
    
};



//Counter
function countdown(){

    time--;
    timeLeftId.textContent = time;

    // if you run out of time, game over. 
    if (time <= 0) {
        gameOver()
    }

};

// Game Over
function endGame(){
      questionsId.classList.add("hidden")
      endingEl.classList.remove("hidden");
      finalScoreEl.textContent = time; 
      clearInterval(timeCounter);
      console.log(finalScoreEl);
}

// Submit Initials
function submitInitials(){
    var initials = initialsId.value
    var newScore = {initials , time}
    var savedScores = window.localStorage.getItem('scores') || []
    savedScores.push(newScore)
    window.localStorage.setItem('scores', JSON.stringify(savedScores)) 
    
}

 
// Get Question
function getQuestion() {
    var currentQuestion = questions[currentQuestionIndex];
    $("#questions-title").text(currentQuestion.question);

//Generate Buttons
    optionsId.innerHTML = '';
    currentQuestion.options.forEach(function(option, i){
      let answerChoice = document.createElement("button");
        answerChoice.setAttribute("class", "options");
        answerChoice.setAttribute("value", option);
        answerChoice.textContent = i + 1 + "." + option;
        answerChoice.onclick = questionClick;
        optionsId.appendChild(answerChoice);
    })

}

// Clicking on question
function questionClick(){
console.log(`You clicked: ${this.value}`)
if(this.value !== questions[currentQuestionIndex].answer){
    time -= 15
    timeLeftId.textContent = time;
}
currentQuestionIndex++
if(currentQuestionIndex === questions.length){
    endGame()
} else {
    getQuestion()
}
}

//LeaderBoard
function showLeader() {
    beginning.classList.add("hidden");
    leaderBoard.classList.remove("hidden");
    var savedScores = window.localStorage.getItem('scores') || []
    leaderBoard.textContent = savedScores;
}



// Start the game when startBtn is clicked. preventDefault to keep from bubbling. 
startBtnId.addEventListener("click", function(event){
event.preventDefault();
startGame();
console.log(event);
});

// Submit Button
submitBtnId.addEventListener("click", function(event){
    event.preventDefault();
    submitInitials();
});

// High Scores <a>
viewScores.addEventListener("click", function(event){
    event.preventDefault();
    showLeader();
});

