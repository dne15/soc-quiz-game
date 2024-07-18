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



// grab list of questions from the api
fetch("https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple")
    .then(function (response) {
        console.log(typeof response);
        return response.json();
    }).then(function (response) {

//Get question from Array into h3
const quizQuestion = document.querySelector("h3")  

//Isolate each question of API    
        quizQuestion.innerText = response.results[0].question
    })

    //Select first question in array
    //Populate quesion screen with data from array 
        
        // Get possible answers from array into form (id, value, name, text)
    //Update correct answer varaible with correct answer from API
