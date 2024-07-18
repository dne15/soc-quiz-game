// Register answer as correct/incorrect
// When submit clicked 

// If incorrect, fail screen shows 

// grab quiz for to manipulate answer values
const quizForm = document.querySelector(".answerForm");
// hardcode answer to be paris
const correctAnswer = "berlin";
// grab question screen
const questionScreen = document.querySelector(".screen-question")
// grab correct screen
const correctScreen = document.querySelector(".screen-correct");
// grab fail screen
const failScreen = document.querySelector(".screen-fail");

// API URL

https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple


function handleSubmit(e) {
    e.preventDefault();

    const selectedInput = document.querySelector("input[name='answers']:checked");
    // Has answer been selected before pressing submit?
    if (!selectedInput) {
        alert("You have not selected an answer")
        return;
    }

    // storing selected options value as an answer to compare to the Correct answer
    const selectedAnswer = selectedInput.value;

    // If answer is correct, correct result screen shows
    if (selectedAnswer === correctAnswer) {
        questionScreen.classList.add("hide");
        correctScreen.classList.remove("hide");
    } else {
        questionScreen.classList.add("hide");
        failScreen.classList.remove("hide");
    // Display correct answer 
        failScreen.querySelector(".answerReveal").innerHTML = correctAnswer.toUpperCase(); 
    }

}
// add event listener
quizForm.addEventListener("submit", handleSubmit);