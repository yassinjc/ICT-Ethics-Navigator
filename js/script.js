// Confirms the script is successfully running
console.log("script.js is geladen");


// Intro Fade-In effect when the page loads
window.addEventListener('DOMContentLoaded', () => {
  const subText = document.querySelector('.sub-intro-text');
  const introSection = document.querySelector('.intro-section');

  // Waits 1.5 seconds before showing the subtext and pushing the intro upwards
  setTimeout(() => {
    subText.classList.add('visible');
    introSection.classList.add('shift-down');
  }, 1500);
});


// Extended intro animation with dropdown reveal
window.addEventListener('DOMContentLoaded', () => {
  const subText = document.querySelector('.sub-intro-text');
  const introSection = document.querySelector('.intro-section');
  const dropdownSection = document.querySelector('.dropdown-section');

  // Reveals subtext and moves intro block upwards
  setTimeout(() => {
    subText.classList.add('visible');
    introSection.classList.add('shift-down');
  }, 1500);

  // Hides the subtext after 5 seconds
  setTimeout(() => {
    subText.classList.remove('visible');
  }, 5000);

  // Reveals the dropdown section after 6 seconds
  setTimeout(() => {
    dropdownSection.classList.add('visible');
  }, 6000);
});


// Dropdown Menu
const dropdown = document.querySelector('.custom-dropdown');
const selected = dropdown.querySelector('.dropdown-selected');
const selectedText = dropdown.querySelector('.selected-text');
const options = dropdown.querySelectorAll('.dropdown-options li');

const introText = document.querySelector('.dropdown-intro');
const followupText = document.querySelector('.dropdown-followup');
const exploreButton = document.querySelector('.explore-button');

// Toggles dropdown open/close when opening/closing the dropdown
selected.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

// Handles selection of a Principle
options.forEach(option => {
  option.addEventListener('click', () => {
    const value = option.textContent;

    // Updates the text inside the dropdown with the selected principle
    selectedText.textContent = value;

    // Closes the dropdown menu
    dropdown.classList.remove('open');

    // Changes the intro message above the dropdown, once principle is selected
    introText.innerHTML = `You've selected the principle:`;

    // Hides the explanation text, once principle is selected
    followupText.classList.add('hidden');

    // Reveals the "Start Exploring" option, once principle is selected
    exploreButton.classList.remove('hidden');
  });
});


// Function to open the Document Pop-up window, and add a background overlay
function openPopup(id) {

  // Makes the Pop-up with the specific ID visible
  document.getElementById(id).style.display = "block";

  // Adds a dark overlay behind the Pop-up
  document.getElementById("popupOverlay").style.display = "block";
}

// Function to close the Pop-up window, and remove the background overlay
function closePopup(id) {

  // Hides the Pop-up window with specific ID
  document.getElementById(id).style.display = "none";

  // Hides the dark overlay behind the Pop-up
  document.getElementById("popupOverlay").style.display = "none";
}