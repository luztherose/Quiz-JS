

let currentPosition = 1;
let score = 0;

function nextQuestion() {
    // Are we on the last question?
    if (currentPosition == 12) {
        // We are in the last question
        // Hide last question
        const lastQuestion = document.getElementById("Q12");
        lastQuestion.classList.add("hide");
        // Hide next button
        const nextButton = document.getElementById("next");
        nextButton.classList.add("hide");
        // Hide Previous QuestionButton
        const buttonPreviousQuestion = document.getElementById("previousButton");
        buttonPreviousQuestion.classList.add("hide");
        // Hide the rules and questions indicator
        const headerLabel = document.getElementById("headerLabel");
        headerLabel.classList.add("hide");

        calculateScore();

        // Show the score
        const userScore = document.getElementById("score");
        userScore.classList.remove("hide");
        // Give the total score
        userScore.innerHTML = "Your Score is " + score + " of 12";
        // Calculate user level
        if  (score == 12) {
            const winner = document.getElementById("img-winner");
            winner.classList.remove("hide");
        }else if (score == 10 || score == 11) {
            const secondWinner = document.getElementById("secondWinner");
            secondWinner.classList.remove("hide");
        } else if (score == 8 || score == 9)   {
            const thirdWinner = document.getElementById("thirdWinner");
            thirdWinner.classList.remove("hide");
        }else {
            const noWinner = document.getElementById("noPlace");
            noWinner.classList.remove("hide");
        }
        // Show Try Again Button
        const button = document.getElementById("tryAgainButton");
        button.classList.remove("hide");
        // See All Answers
        const buttonSeeAnswer = document.getElementById("seeAnswersButton");
        buttonSeeAnswer.classList.remove("hide");
    } else {     
        //Enableling previous buttom
        document.getElementById("previousButton").disabled = false;
        // Hide the current question
        const currentQuestion = document.getElementById("Q" + currentPosition);
        currentQuestion.classList.add("hide");
        // Chage the current question 
        currentPosition = currentPosition + 1
        
        const currentQuestionCount = document.getElementById("currentQuestionCount");
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
        const currentQuestion = document.getElementById("Q" + i);
        // User answer #Q1 :checked
        let userSelection = currentQuestion.querySelector(":checked"); 
        // Correct Answer #Q2 .rightAnswer
        let correctAnswer = currentQuestion.querySelector(".rightAnswer");
    
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
    const currentQuestion = document.getElementById("Q" + currentPosition);
    currentQuestion.classList.add("hide");
    // Chage the current question 
    currentPosition = currentPosition - 1
    const currentQuestionCount = document.getElementById("currentQuestionCount");
    currentQuestionCount.innerHTML = currentPosition;
    // Show Previous Question
    const preQuestion = document.getElementById("Q" + currentPosition);
    preQuestion.classList.remove("hide");  
    // If the current question is the first one hide the previousButton
    if (currentPosition  == 1) {
        document.getElementById("previousButton").classList.add("hide"); 
    }
}
    // See all the questions with correct Answers
function allQuestionsAnswers() {
    // Hide images 
    const winner = document.getElementById("img-winner");
        winner.classList.add("hide");
    const noWinner = document.getElementById("noPlace");
        noWinner.classList.add("hide");
    const thirdWinner = document.getElementById("thirdWinner");
        thirdWinner.classList.add("hide");
    const secondWinner = document.getElementById("secondWinner");
        secondWinner.classList.add("hide");
     // Show all the correct questions
    for(let i = 1; i <= 12; i++) {
        document.getElementById("Q" + i).style.display="block";
        
    }
    // Show the correct answer with a green background
    const correctAnswers = document.getElementsByClassName("labelRightAns");

    for(let i = 0; i < correctAnswers.length; i++) {
        correctAnswers[i].classList.add("lightgreenColor");
    }
}
// Set timer

function countDown() {
        let inputTimer = document.getElementById("timeSpent");
        let second = 11
        let id = setInterval(function() {
            second -= 1
            if(second === -1){
                clearInterval(id)
                return
            }
            inputTimer.value = second +"s";
        }, 1000);
}
countDown();

    // Customize Page's Background color
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