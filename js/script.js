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