/* TYPING ANIMATION */

const typing = document.getElementById("typing");

if (typing) {

    const words = [
        "CSE-DS Student",
        "Developer in Progress",
        "Tech Enthusiast",
        "Creative Learner"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let deleting = false;

    function typeEffect() {

        const word = words[wordIndex];

        if (!deleting) {

            typing.textContent =
                word.substring(0, charIndex + 1);

            charIndex++;

            if (charIndex === word.length) {

                deleting = true;

                setTimeout(typeEffect, 1400);

                return;
            }

        } else {

            typing.textContent =
                word.substring(0, charIndex - 1);

            charIndex--;

            if (charIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1) % words.length;
            }
        }

        setTimeout(
            typeEffect,
            deleting ? 45 : 80
        );
    }

    typeEffect();
}


/* SCROLL ANIMATION */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnScroll() {

    revealElements.forEach(element => {

        const position =
            element.getBoundingClientRect().top;

        const screenHeight =
            window.innerHeight;

        if (position < screenHeight - 80) {

            element.classList.add("show");

        }

    });
}


window.addEventListener(
    "scroll",
    revealOnScroll
);

window.addEventListener(
    "load",
    revealOnScroll
);


/* MOBILE MENU */

const menuBtn =
    document.getElementById("menuBtn");

const navLinks =
    document.getElementById("navLinks");


if (menuBtn && navLinks) {

    menuBtn.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle("open");

        }
    );


    const links =
        navLinks.querySelectorAll("a");


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove("open");

            }
        );

    });

}
