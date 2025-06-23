// JavaScript voor fade-in effect
window.addEventListener('DOMContentLoaded', () => {
    const subText = document.querySelector('.sub-intro-text');
    const introSection = document.querySelector('.intro-section');

    // Wacht 1.5 seconden en voeg class 'visible' toe om fade-in te activeren
    setTimeout(() => {
        subText.classList.add('visible');
        introSection.classList.add('shift-down'); // schuift intro iets omhoog
    }, 1500);
});


window.addEventListener('DOMContentLoaded', () => {
  const subText = document.querySelector('.sub-intro-text');
  const introSection = document.querySelector('.intro-section');
  const dropdownSection = document.querySelector('.dropdown-section');

  // Fade-in subtekst
  setTimeout(() => {
    subText.classList.add('visible');
    introSection.classList.add('shift-down');
  }, 1500);

  // Fade-out subtekst
  setTimeout(() => {
    subText.classList.remove('visible');
  }, 5000);

  // Toon dropdown
  setTimeout(() => {
    dropdownSection.classList.add('visible');
  }, 6000);
});


const dropdown = document.querySelector('.custom-dropdown');
const selected = dropdown.querySelector('.dropdown-selected');
const selectedText = dropdown.querySelector('.selected-text');
const options = dropdown.querySelectorAll('.dropdown-options li');

const introText = document.querySelector('.dropdown-intro');
const followupText = document.querySelector('.dropdown-followup');
const exploreButton = document.querySelector('.explore-button');

// Toggle open/close van Dropdown
selected.addEventListener('click', () => {
  dropdown.classList.toggle('open');
});

// Select Principle
options.forEach(option => {
  option.addEventListener('click', () => {
    const value = option.textContent;
    selectedText.textContent = value;
    dropdown.classList.remove('open');

    introText.innerHTML = `You've selected the principle:`;

    followupText.classList.add('hidden');
    exploreButton.classList.remove('hidden');
  });
});


// Open Document Pop-up
function openPopup(id) {
    document.getElementById(id).style.display = "block";
    document.getElementById("popupOverlay").style.display = "block";
}

function closePopup(id) {
    document.getElementById(id).style.display = "none";
    document.getElementById("popupOverlay").style.display = "none";
}
