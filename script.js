/* =========================================
   AMARTYA SHARMA - WEBSITE JAVASCRIPT
   ========================================= */


/* ---------- TYPING ANIMATION ---------- */

const typingElement =
    document.getElementById("typing-text");


if (typingElement) {

    const words = [
        "CSE-DS Student",
        "Developer in Progress",
        "Tech Enthusiast",
        "Creative Learner"
    ];

    let wordIndex = 0;
    let characterIndex = 0;
    let deleting = false;


    function typeEffect() {

        const currentWord =
            words[wordIndex];


        if (!deleting) {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex + 1
                );

            characterIndex++;


            if (
                characterIndex ===
                currentWord.length
            ) {

                deleting = true;

                setTimeout(
                    typeEffect,
                    1400
                );

                return;
            }

        } else {

            typingElement.textContent =
                currentWord.substring(
                    0,
                    characterIndex - 1
                );

            characterIndex--;


            if (characterIndex === 0) {

                deleting = false;

                wordIndex =
                    (wordIndex + 1)
                    % words.length;

            }

        }


        setTimeout(
            typeEffect,
            deleting ? 45 : 80
        );

    }


    typeEffect();

}


/* ---------- SCROLL / PAGE ANIMATION ---------- */

const revealElements =
    document.querySelectorAll(".reveal");


function revealOnLoad() {

    revealElements.forEach(
        (element, index) => {

            setTimeout(() => {

                element.classList.add("show");

            }, index * 100);

        }
    );

}


window.addEventListener(
    "load",
    revealOnLoad
);


/* ---------- MOBILE MENU ---------- */

const menuButton =
    document.getElementById("menuButton");

const navLinks =
    document.getElementById("navLinks");


if (menuButton && navLinks) {

    menuButton.addEventListener(
        "click",
        () => {

            navLinks.classList.toggle(
                "open"
            );

        }
    );


    const links =
        navLinks.querySelectorAll("a");


    links.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                navLinks.classList.remove(
                    "open"
                );

            }
        );

    });

}
