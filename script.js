// Register answer as correct/incorrect
// When submit clicked 
// If answer is correct, correct result screen shows
// If incorrect, fail screen shows 

// grab quiz for to manipulate answer values
const quizForm = document.querySelector(".answerOptions");
// hardcode answer to be paris
const correctAnswer = "paris";
// grab question screen
const correctScreen = document.querySelector(".screen-correct");
// grab correct screen
// grab fail screen
console.log(quizForm);

function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
}
// add event listener
quizForm.addEventListener("submit", handleSubmit);