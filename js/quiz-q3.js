// Quiz Question 3

// Handles the logic for Question 3 of the Autonomy Quiz

document.addEventListener("DOMContentLoaded", () => {

  // Selects all the Quiz Elements
  const options = document.querySelectorAll(".quiz-option");
  const feedbacks = document.querySelectorAll(".feedback-text");
  const continueWrapper = document.querySelector(".continue-wrapper");
  const continueButton = document.querySelector(".continue-button");
  const progressFill = document.querySelector(".progress-fill");
  const progressIndicator = document.querySelector(".progress-indicator");
  const quizImage = document.getElementById("quiz-image");

  // Makes sure the user can only answer correctly once, instead of multiple triggers
  let answeredCorrectly = false;

  // Loops through each quiz answer option (A, B, or C)
  options.forEach((option, index) => {
    option.addEventListener("click", () => {

      // Hides all previous input and removes answer selections
      feedbacks.forEach((fb) => (fb.style.display = "none"));
      options.forEach((opt) => opt.classList.remove("selected"));

      // Highlights the answer that was selected
      option.classList.add("selected");

      // Shows feedback text under the selected answer
      feedbacks[index].style.display = "block";

      // Checks whether the selected answer is the correct answer
      const isCorrect = option.getAttribute("data-correct") === "true";

      // If it's the correct answer, and it's the first time answered correctly...
      if (isCorrect && !answeredCorrectly) {

        // ..fills the progress bar to 75%
        progressFill.style.width = "75%";

        // Updates the percentage text and moves it to match the progress bar
        progressIndicator.textContent = "75%";
        progressIndicator.style.left = "75%";
        progressIndicator.classList.add("active");

        // Shows the happy version of the quiz avatar
        quizImage.src = "/assets/images/quiz-image-happy.png";

        // Shows the "Continue" button to procede to the next question
        continueWrapper.style.display = "block";

        // Checks that the correct answer was already given, so the progress doesn't reset once another answer is selected
        answeredCorrectly = true;

        // If it's the incorrect answer...
      } else if (!isCorrect) {

        // Shows the original avatar
        quizImage.src = "/assets/images/quiz-image.png";

        // Keeps the "Continue" button hidden
        continueWrapper.style.display = "none";

        // Let's the user try again if the answer was incorrect
        answeredCorrectly = false;
      }
    });
  });

  // When the "Continue" button is pressed, the user can procede to the next question
  continueButton.addEventListener("click", () => {
    window.location.href = "quiz-q4-autonomy.html";
  });
});