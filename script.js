// Register answer as correct/incorrect
// When submit clicked

// If incorrect, fail screen shows

const quizQuestion = document.querySelector("h3"); // select the h3
const allQuestions = document.querySelectorAll("input"); // select array of inputs
console.log(allQuestions);
const correctAnswerInput = allQuestions[0];
console.log(correctAnswerInput);
// Correct Answer Inputs
const questionOneLabel = correctAnswerInput.parentElement;
const questionOneText = document.querySelectorAll("span")[0];
// Incorrect Answer One Inputs
const incorrectAnswerInputOne = allQuestions[1];
const questionTwoLabel = incorrectAnswerInputOne.parentElement;
const questionTwoText = document.querySelectorAll("span")[1];
// Incorrect Answer Two Inputs
const incorrectAnswerInputTwo = allQuestions[2];
const questionThreeLabel = incorrectAnswerInputTwo.parentElement;
const questionThreeText = document.querySelectorAll("span")[2];
// Incorrect Answer Three Inputs
const incorrectAnswerInputThree = allQuestions[3];
const questionFourLabel = incorrectAnswerInputThree.parentElement;
const questionFourText = document.querySelectorAll("span")[3];

// fetch questions 
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
    console.log(correctAnswer);

    // Correct Answer
    correctAnswerInput.setAttribute("id", correctAnswer); // Update input id to correct answer
    correctAnswerInput.setAttribute("value", correctAnswer); // Update input value to correct answer
    questionOneText.innerHTML = correctAnswer; // Update label text to correct answer
    questionOneLabel.setAttribute("for", correctAnswer); // Update label for value to correct answer

    // Incorrect One
    incorrectAnswerInputOne.setAttribute("id", response.results[0].incorrect_answers[0]);
    incorrectAnswerInputOne.setAttribute("value", response.results[0].incorrect_answers[0]); // Update input value to correct answer
    questionTwoText.innerHTML = response.results[0].incorrect_answers[0]; // Update label text to correct answer
    questionTwoLabel.setAttribute("for", response.results[0].incorrect_answers[0]); // Update label for value to correct answer

    // Incorrect Two
    incorrectAnswerInputTwo.setAttribute("id", response.results[0].incorrect_answers[1]);
    incorrectAnswerInputTwo.setAttribute("value", response.results[0].incorrect_answers[1]); // Update input value to correct answer
    questionThreeText.innerHTML = response.results[0].incorrect_answers[1]; // Update label text to correct answer
    questionThreeLabel.setAttribute("for", response.results[0].incorrect_answers[1]); // Update label for value to correct answer

    // Incorrect Three
    incorrectAnswerInputThree.setAttribute("id", response.results[0].incorrect_answers[2]);
    incorrectAnswerInputThree.setAttribute("value", response.results[0].incorrect_answers[2]); // Update input value to correct answer
    questionFourText.innerHTML = response.results[0].incorrect_answers[2]; // Update label text to correct answer
    questionFourLabel.setAttribute("for", response.results[0].incorrect_answers[2]); // Update label for value to correct answer

  });

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



// grab list of questions from the api

// const randomInput = allQuestions[Math.floor(Math.random() * allQuestions.length)];
// console.log(randomInput);

//Update correct answer varaible with correct answer from API

// I want to assign classes to 4 labels ✅
// I want the correct answer to be in a random position
// I want to use the array of labels and use math.random to select a random element from that array

// Update that element with a unique class and remove the default class
// Insert the correct answer data into that element
// Populate the 3 remaining elements with the incorrect answer data by looping through an array
