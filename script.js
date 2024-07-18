// Register answer as correct/incorrect
// When submit clicked 
// If answer is correct, correct result screen shows
// If incorrect, fail screen shows 

// grab quiz for to manipulate answer values
const quizForm = document.querySelector(".answerOptions");
// hardcode answer to be paris
const correctAnswer = "paris";
// grab question screen
const questionScreen = document.querySelector(".screen-question")
// grab correct screen
const correctScreen = document.querySelector(".screen-correct");
// grab fail screen
const failScreen = document.querySelector(".screen-fail");

const selectedInput = document.querySelector("input:checked");

// Has answer been selected before pressing submit?

function handleSubmit(e) {
    e.preventDefault();
    if (!selectedInput) {
    alert("You have not selected an answer")
    return;
}

    if selectedInput

}
// add event listener
quizForm.addEventListener("submit", handleSubmit);