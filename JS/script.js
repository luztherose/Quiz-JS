

var currentPosition = 1;
var score = 0;

function nextQuestion() {
    // Are we on the last question?
    if (currentPosition == 12) {
        // We are in the last question
        // Hide last question
        var lastQuestion = document.getElementById("Q12");
        lastQuestion.classList.add("hide");
        // Hide next button
        var nextButton = document.getElementById("next");
        nextButton.classList.add("hide");
        // Hide Previous QuestionButton
        var buttonPreviousQuestion = document.getElementById("previousButton");
        buttonPreviousQuestion.classList.add("hide");
        // Hide the rules and questions indicator
        var headerLabel = document.getElementById("headerLabel");
        headerLabel.classList.add("hide");

        calculateScore();

        // Show the score
        var userScore = document.getElementById("score");
        userScore.classList.remove("hide");
        // Give the total score
        userScore.innerHTML = "Your Score is " + score + " of 12";
        // Calculate user level
        if  (score == 12) {
            var winner = document.getElementById("img-winner");
            winner.classList.remove("hide");
        }else if (score == 10 || score == 11) {
            var secondWinner = document.getElementById("secondWinner");
            secondWinner.classList.remove("hide");
        } else if (score == 8 || score == 9)   {
            var thirdWinner = document.getElementById("thirdWinner");
            thirdWinner.classList.remove("hide");
        }else {
            var noWinner = document.getElementById("noPlace");
            noWinner.classList.remove("hide");
        }
        // Show Try Again Button
        var button = document.getElementById("tryAgainButton");
        button.classList.remove("hide");
        // See All Answers
        var buttonSeeAnswer = document.getElementById("seeAnswersButton");
        buttonSeeAnswer.classList.remove("hide");
    } else {     
        //Enableling previous buttom
        document.getElementById("previousButton").disabled = false;
        // Hide the current question
        var currentQuestion = document.getElementById("Q" + currentPosition);
        currentQuestion.classList.add("hide");
        // Chage the current question 
        currentPosition = currentPosition + 1
        
        var currentQuestionCount = document.getElementById("currentQuestionCount");
        currentQuestionCount.innerHTML = currentPosition;
        
        // Show next question
        var nextQuestion = document.getElementById("Q" + currentPosition);
        nextQuestion.classList.remove("hide");    
                
        // Show the previousButton if we are not in the first question
        if (currentPosition  != 1) {
            document.getElementById("previousButton").classList.remove("hide"); 
        }
    }

}
    // Try Again Button Function
function tryAgainButton(){
    location.reload()
}
    // Score
function calculateScore() {
    // Calculating the score for each question
    for(var i = 1; i <= 12; i = i + 1) {
        var currentQuestion = document.getElementById("Q" + i);
        // User answer #Q1 :checked
        var userSelection = currentQuestion.querySelector(":checked"); 
        // Correct Answer #Q2 .rightAnswer
        var correctAnswer = currentQuestion.querySelector(".rightAnswer");
    
        // Is the user answer correct?
        if (userSelection == correctAnswer) {
        // Count the number of correct answers from user
            score = score + 1;
        } 
    }
}


    // Create a function to go to the Previous Question
function previousQuestion() { 
    // Hide Current Question 
    var currentQuestion = document.getElementById("Q" + currentPosition);
    currentQuestion.classList.add("hide");
    // Chage the current question 
    currentPosition = currentPosition - 1
    var currentQuestionCount = document.getElementById("currentQuestionCount");
    currentQuestionCount.innerHTML = currentPosition;
    // Show Previous Question
    var preQuestion = document.getElementById("Q" + currentPosition);
    preQuestion.classList.remove("hide");  
    // If the current question is the first one hide the previousButton
    if (currentPosition  == 1) {
        document.getElementById("previousButton").classList.add("hide"); 
    }
}
    // See all the questions with correct Answers
function allQuestionsAnswers() {
    // Hide images 
    var winner = document.getElementById("img-winner");
        winner.classList.add("hide");
    var noWinner = document.getElementById("noPlace");
        noWinner.classList.add("hide");
    var thirdWinner = document.getElementById("thirdWinner");
        thirdWinner.classList.add("hide");
    var secondWinner = document.getElementById("secondWinner");
        secondWinner.classList.add("hide");
     // Show all the correct questions
    document.getElementById("Q1").style.display="block";
    document.getElementById("Q2").style.display="block";
    document.getElementById("Q3").style.display="block";
    document.getElementById("Q4").style.display="block";
    document.getElementById("Q5").style.display="block";
    document.getElementById("Q6").style.display="block";
    document.getElementById("Q7").style.display="block";
    document.getElementById("Q8").style.display="block";
    document.getElementById("Q9").style.display="block";
    document.getElementById("Q10").style.display="block";
    document.getElementById("Q11").style.display="block";
    document.getElementById("Q12").style.display="block";
    // Show the correct answer with a green background

    const correctAnswers = document.getElementsByClassName("labelRightAns");

    for(let i = 0; i < correctAnswers.length; i++) {
        correctAnswers[i].classList.add("lightgreenColor");
    }
    
}
    
let bodyBackground = document.getElementsByTagName("body")[0];
let toggleButton = document.getElementById("changeGroundColor");
let inputText = document.getElementById("textField");
let h2Customize = document.getElementById("customizeHeading");
let cleanFieldButton = document.getElementById("cleanField");
let customizeDiv = document.getElementsByClassName("customize")[0];
let displayCustomizeButton = document.getElementById("displayCustomizeForm");

function changeBackgroundColor() {
    h2Customize.style.color ="navy";
    toggleButton.innerHTML = "Change to default";
    bodyBackground.style.backgroundColor = inputText.value;
}
function changeBackgroundToDefault() {
    toggleButton.innerHTML = "Change Background Color";
    bodyBackground.style.backgroundColor = "rgb(255, 222, 219) ";
    //location.reload();
}
toggleButton.addEventListener("click", () => {
    if (h2Customize.style.color != "navy") {
        changeBackgroundColor();
    } else {
        changeBackgroundToDefault();
    }
});
cleanFieldButton.addEventListener("click", () => {
    document.getElementById("textField").value = " ";
})
displayCustomizeButton.addEventListener("click", () => {
        if (h2Customize.style.color != "navy") {
            customizeDiv.classList.remove("hide"); 
            displayCustomizeButton.innerHTML = "Hide Form";
        }else {
            customizeDiv.classList.add("hide"); 
            displayCustomizeButton.innerHTML = "Change Color";
            location.reload();
        }
});