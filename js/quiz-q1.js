// Quiz Question 1
document.addEventListener("DOMContentLoaded", () => {
  const options = document.querySelectorAll(".quiz-option");
  const feedbacks = document.querySelectorAll(".feedback-text");
  const continueWrapper = document.querySelector(".continue-wrapper");
  const continueButton = document.querySelector(".continue-button");
  const progressFill = document.querySelector(".progress-fill");
  const progressIndicator = document.querySelector(".progress-indicator");
  const quizImage = document.getElementById("quiz-image");

  let answeredCorrectly = false;

  options.forEach((option, index) => {
    option.addEventListener("click", () => {
      feedbacks.forEach((fb) => (fb.style.display = "none"));
      options.forEach((opt) => opt.classList.remove("selected"));

      option.classList.add("selected");
      feedbacks[index].style.display = "block";

      const isCorrect = option.getAttribute("data-correct") === "true";

      if (isCorrect && !answeredCorrectly) {
        progressFill.style.width = "25%";
        progressIndicator.textContent = "25%";
        progressIndicator.style.left = "25%";
        progressIndicator.classList.add("active");

        quizImage.src = "/assets/images/quiz-image-happy.png";
        continueWrapper.style.display = "block";
        answeredCorrectly = true;
      } else if (!isCorrect) {
        quizImage.src = "/assets/images/quiz-image.png";
        continueWrapper.style.display = "none";
        answeredCorrectly = false;
      }
    });
  });

  continueButton.addEventListener("click", () => {
    window.location.href = "quiz-q2-autonomy.html";
  });
});