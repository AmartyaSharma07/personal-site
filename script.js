const typingText = document.getElementById("typing-text");

const words = [
    "CSE-DS Student",
    "Technology Enthusiast",
    "Developer in Progress",
    "Curious Learner"
];

let wordIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingText.textContent = currentWord.substring(0, letterIndex + 1);
        letterIndex++;

        if (letterIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1400);
            return;
        }

    } else {
        typingText.textContent = currentWord.substring(0, letterIndex - 1);
        letterIndex--;

        if (letterIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 50 : 90);
}

typeEffect();


const revealElements = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
    function(entries) {

        entries.forEach(function(entry) {

            if (entry.isIntersecting) {
                entry.target.classList.add("visible");
            }

        });

    },
    {
        threshold: 0.15
    }
);

revealElements.forEach(function(element) {
    observer.observe(element);
});


const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", function() {

    let currentSection = "";

    sections.forEach(function(section) {

        const sectionTop = section.offsetTop - 150;
        const sectionHeight = section.offsetHeight;

        if (
            window.scrollY >= sectionTop &&
            window.scrollY < sectionTop + sectionHeight
        ) {
            currentSection = section.getAttribute("id");
        }

    });

    navLinks.forEach(function(link) {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + currentSection) {
            link.classList.add("active");
        }

    });

});
