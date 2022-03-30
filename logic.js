//
//        I have no idea what I'm doing. I'm sincerely sorry for the hot garbage.
//                  I'm going to submit this and use my time to study.
//
//


// Variables to keep track 
var currentQuestionIndex = 0;
var time = 100;
var timeCounter;

// Questions to Reference
var questions = [
    {
        question: "What does HTML stand for?"
        options:["Hyper Text Markup Language", "Happy Tomato Mega Land", "Hot Tamale Mmm Laser"]
        answer: "Hyper Text Markup Language"
    },
    {
        question: "What is an object?"
        options: ["Everything's an object","Nothing is an object", "A standalone entity, with properties and type" ]
        answer: "A standalone entity, with properties and type"
    },
    {
        question: "Which tag has the largest heading size?"
        options: ["h1","h2","h3","h4"]
        answer: "h1"
    },
    {
        question: "Which character is used to end a tag?"
        options: ["*","&","/","}"]
        answer: "/"
    },
    {
        question: "HTML comments begin with ~/"
        options: ["true","false"]
        answer: "false"
    }

];

// Variables to reference the DOM elements 
var questionsId = $("#questions");
var timeLeftId = $("#timeLeft");
var optionsId = $("#options");
var submitBtnId = $("#submit");
var startBtnId = $("#start");
var initialsId = $("#initials");



// Start the game when startBtn is clicked
startBtn.addEventListener("click", startGame() {
    //pull "beginning" element 
    var beginningId = $("#beginning");
    // and set it to hidden
    beginning.setAttribute("class","hidden");

    //pull the "quiz" element
    var quizStart = $("#questions");
    //removes the hidden class so it displays
    quizStart.removeAttribute("class");

    //start the countdown timer starting at Time
    countdown 

});



//Counter
function countdown(){
    //
    time--;
    countDown.textContent = time;

    // if you run out of time, game over. 
    if (time <= 0) {
        gameOver()
    }

};


//Display Question
questionsId.setAttribute("class", "display")

//Get Question

