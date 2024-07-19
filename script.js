// Register answer as correct/incorrect
// When submit clicked

// If incorrect, fail screen shows

// grab quiz for to manipulate answer values
const quizForm = document.querySelector(".answerForm");
// hardcode answer to be paris
let correctAnswer;
// grab question screen
const questionScreen = document.querySelector(".screen-question");
// grab correct screen
const correctScreen = document.querySelector(".screen-correct");
// grab fail screen
const failScreen = document.querySelector(".screen-fail");

function handleSubmit(e) {
  e.preventDefault();

  const selectedInput = document.querySelector("input[name='answers']:checked");
  // Has answer been selected before pressing submit?
  if (!selectedInput) {
    alert("You have not selected an answer");
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
    failScreen.querySelector(".answerReveal").innerHTML =
      correctAnswer.toUpperCase();
  }
}
// add event listener
quizForm.addEventListener("submit", handleSubmit);

// select the h3
const quizQuestion = document.querySelector("h3");
const allQuestions = document.querySelectorAll("input");
const correctAnswerInput = allQuestions[0];
const questionOneLabel = correctAnswerInput.parentElement;
const questionOneText = document.querySelector("span");
console.log(questionOneLabel);

// select the inputs
// const

// grab list of questions from the api
fetch(
  "https://opentdb.com/api.php?amount=10&category=9&difficulty=medium&type=multiple"
)
  .then(function (response) {
    return response.json();
  })
  .then(function (response) {
    console.log(response);
    //Populate quesion screen with data from array
    //Get question from Array into h3
    quizQuestion.innerText = response.results[0].question;
    // Get possible answers from array into form (id, value, name, text)
    // Insert correct answer

    correctAnswer = response.results[0].correct_answer;
    const incorrectOne = response.results[0].incorrect_answers[0];
    console.log(incorrectOne);

    correctAnswerInput.setAttribute("id", correctAnswer); // Update input id to correct answer
    correctAnswerInput.setAttribute("value", correctAnswer); // Update input value to correct answer
    questionOneText.innerHTML = correctAnswer; // Update label text to correct answer
    questionOneLabel.setAttribute("for", correctAnswer); // Update label for value to correct answer
  });

const randomInput =
  allQuestions[Math.floor(Math.random() * allQuestions.length)];
console.log(randomInput);

//Update correct answer varaible with correct answer from API

// I want to assign classes to 4 labels ✅
// I want the correct answer to be in a random position
// I want to use the array of labels and use math.random to select a random element from that array

// Update that element with a unique class and remove the default class
// Insert the correct answer data into that element
// Populate the 3 remaining elements with the incorrect answer data by looping through an array
