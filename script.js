/* =========================
   NAVBAR
========================= */

const nav = document.getElementById("nav");

window.addEventListener("scroll", () => {

    if (window.scrollY > 30) {
        nav.classList.add("scrolled");
    } else {
        nav.classList.remove("scrolled");
    }

});


/* =========================
   TYPING EFFECT
========================= */

const typed = document.getElementById("typed");

const phrases = [
    "an AI/ML Engineer.",
    "a Python Developer.",
    "a Backend Developer.",
    "a Data & AI Builder.",
    "a Problem Solver."
];

let phraseIndex = 0;
let letterIndex = 0;
let deleting = false;

function typeEffect() {

    const current =
        phrases[phraseIndex];

    if (!deleting) {

        typed.textContent =
            current.substring(
                0,
                letterIndex + 1
            );

        letterIndex++;

        if (
            letterIndex === current.length
        ) {

            deleting = true;

            setTimeout(
                typeEffect,
                1300
            );

            return;
        }

    } else {

        typed.textContent =
            current.substring(
                0,
                letterIndex - 1
            );

        letterIndex--;

        if (letterIndex === 0) {

            deleting = false;

            phraseIndex =
                (phraseIndex + 1)
                % phrases.length;
        }

    }

    setTimeout(
        typeEffect,
        deleting ? 35 : 70
    );
}

typeEffect();


/* =========================
   SCROLL REVEAL
========================= */

const revealElements =
    document.querySelectorAll(".reveal");

const revealObserver =
    new IntersectionObserver(

        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target
                        .classList
                        .add("visible");

                }

            });

        },

        {
            threshold: 0.12
        }
    );

revealElements.forEach(element => {

    revealObserver.observe(element);

});


/* =========================
   CUSTOM CURSOR
========================= */

const cursor =
    document.querySelector(".cursor");

const cursorDot =
    document.querySelector(".cursor-dot");

document.addEventListener(
    "mousemove",
    event => {

        cursor.style.left =
            event.clientX + "px";

        cursor.style.top =
            event.clientY + "px";

        cursorDot.style.left =
            event.clientX + "px";

        cursorDot.style.top =
            event.clientY + "px";
    }
);


/* =========================
   CURSOR HOVER
========================= */

const interactiveElements =
    document.querySelectorAll(
        "a, .project-card, .skill-card"
    );

interactiveElements.forEach(element => {

    element.addEventListener(
        "mouseenter",
        () => {

            cursor.style.width =
                "32px";

            cursor.style.height =
                "32px";

            cursor.style.borderColor =
                "#8b5cf6";

        }
    );

    element.addEventListener(
        "mouseleave",
        () => {

            cursor.style.width =
                "18px";

            cursor.style.height =
                "18px";

            cursor.style.borderColor =
                "#66e3ff";

        }
    );

});


/* =========================
   TERMINAL PARALLAX
========================= */

const terminal =
    document.querySelector(".terminal");

document.addEventListener(
    "mousemove",
    event => {

        if (window.innerWidth < 900)
            return;

        const x =
            (event.clientX /
                window.innerWidth - .5)
            * 6;

        const y =
            (event.clientY /
                window.innerHeight - .5)
            * 6;

        terminal.style.transform =
            `rotateY(${x}deg)
             rotateX(${-y}deg)`;
    }
);


/* =========================
   PROJECT TILT
========================= */

const projectCards =
    document.querySelectorAll(
        ".project-card"
    );

projectCards.forEach(card => {

    card.addEventListener(
        "mousemove",
        event => {

            if (window.innerWidth < 900)
                return;

            const rect =
                card.getBoundingClientRect();

            const x =
                event.clientX -
                rect.left;

            const y =
                event.clientY -
                rect.top;

            const rotateX =
                ((y / rect.height) - .5)
                * -4;

            const rotateY =
                ((x / rect.width) - .5)
                * 4;

            card.style.transform =
                `perspective(900px)
                 rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-6px)`;
        }
    );

    card.addEventListener(
        "mouseleave",
        () => {

            card.style.transform =
                "";
        }
    );

});


/* =========================
   SMOOTH NAV LINKS
========================= */

document
    .querySelectorAll(
        'a[href^="#"]'
    )
    .forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const target =
                    document.querySelector(
                        link.getAttribute("href")
                    );

                if (!target)
                    return;

                event.preventDefault();

                target.scrollIntoView({
                    behavior: "smooth"
                });

            }
        );

    });


/* =========================
   PREVENT BROKEN VIDEO
========================= */

const video =
    document.querySelector(".hero-video");

video.addEventListener(
    "error",
    () => {

        video.style.display =
            "none";
    }
);
