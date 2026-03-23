const menuBtn = document.getElementById("menu-btn");
const mobileMenu = document.getElementById("mobile-menu");

menuBtn.addEventListener("click", function () {
  mobileMenu.classList.toggle("hidden");
});

document.getElementById("downloadBtn").addEventListener("click", function () {
  const link = document.createElement("a");
  link.href = "assets/resume.pdf";
  link.download = "assets/resume.pdf";
  link.click();
});

const words = ["Frontend Developer", "AI Enthusiast", "Tech Explorer","Tutor","UG Student"];
const typingText = document.getElementById("typing-text");
let wordIndex = 0;
let charIndex = 0; 
let isDeleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];
    const currentText = currentWord.substring(0, charIndex);
    typingText.textContent = currentText;

if (!isDeleting) {
    charIndex++;
} else {
    charIndex--;
}

if (charIndex === currentWord.length) {
    isDeleting = true;
}

if (charIndex === 0 && isDeleting) {
    isDeleting = false;
    wordIndex++;
if (wordIndex === words.length) {
    wordIndex = 0;
    }
}

if (isDeleting) {
    setTimeout(typeEffect, 60); //eta deleting fast and slow run korar jonno.
} else {
    setTimeout(typeEffect, 120); //eta tyiping fast and slow run korar jonno.
}
}
typeEffect();
