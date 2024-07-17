// Register answer as correct/incorrect
// When submit clicked 
// If answer is correct, correct result screen shows
// If incorrect, fail screen shows 

const quizForm = document.querySelector("form");
console.log(quizForm);

function handleSubmit(e) {
    e.preventDefault();
    console.log(e);
}

quizForm.addEventListener("submit", handleSubmit);