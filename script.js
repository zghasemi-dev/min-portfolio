// TEMA

const themeButton = document.getElementById("themeButton");

themeButton.addEventListener("click", function () {

    document.body.classList.toggle("light-theme");

    updateThemeText();

});


function updateThemeText() {

    const currentLanguage = document.documentElement.lang;

    const themeText = themeButton.querySelector("span");

    if (document.body.classList.contains("light-theme")) {

        themeText.textContent =
            currentLanguage === "en"
                ? "Dark mode"
                : "Mörkt tema";

    } else {

        themeText.textContent =
            currentLanguage === "en"
                ? "Light mode"
                : "Ljust tema";

    }

}



// SPRÅK

const languageButtons =
    document.querySelectorAll(".language-button");


const translatedElements =
    document.querySelectorAll("[data-sv][data-en]");


languageButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const selectedLanguage =
            button.dataset.lang;


        document.documentElement.lang =
            selectedLanguage;


        translatedElements.forEach(function (element) {

            if (selectedLanguage === "en") {

                element.textContent =
                    element.dataset.en;

            } else {

                element.textContent =
                    element.dataset.sv;

            }

        });


        languageButtons.forEach(function (langButton) {

            langButton.classList.remove("active");

        });


        button.classList.add("active");


        updateThemeText();

    });

});



// OM MIG SLIDER

const slides =
    document.querySelectorAll(".about-slide");


const slideButtons =
    document.querySelectorAll(".slide-button");


slideButtons.forEach(function (button) {

    button.addEventListener("click", function () {

        const slideIndex =
            Number(button.dataset.slide);


        slides.forEach(function (slide) {

            slide.classList.remove("active");

        });


        slideButtons.forEach(function (slideButton) {

            slideButton.classList.remove("active");

        });


        slides[slideIndex].classList.add("active");

        button.classList.add("active");

    });

});



// OM MIG RUBRIK ANIMATION

const revealElements =
    document.querySelectorAll(".reveal-left");


const revealObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("visible");

            }

        });

    }, {

        threshold: 0.25

    });


revealElements.forEach(function (element) {

    revealObserver.observe(element);

});



// SUDDIG / FADE ÖVERGÅNG MELLAN SEKTIONER

const sections =
    document.querySelectorAll(".full-section");


const sectionObserver =
    new IntersectionObserver(function (entries) {

        entries.forEach(function (entry) {

            if (entry.isIntersecting) {

                entry.target.classList.add("section-visible");

            } else {

                entry.target.classList.remove("section-visible");

            }

        });

    }, {

        threshold: 0.16

    });


sections.forEach(function (section) {

    sectionObserver.observe(section);

});