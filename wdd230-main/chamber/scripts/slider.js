// darkModeToggle.js

document.addEventListener("DOMContentLoaded", () => {
    const modeButton = document.querySelector("#mode");
    const main = document.querySelector("main");
    const body = document.body;
    const header = document.querySelector("header");
    const footer = document.querySelector("footer");
    const quoteContainer = document.querySelector(".home-meeting-banner");

    modeButton.addEventListener("click", () => {
        if (modeButton.textContent.includes("🕶️")) {
            // Night mode
            setDarkModeStyles();
            modeButton.textContent = "🔆";
        } else {
            // Light mode
            setLightModeStyles();
            modeButton.textContent = "🕶️";
        }
    });

    function setDarkModeStyles() {
        body.style.background = "#000";
        body.style.color = "#fff";
        main.style.background = "#000";
        main.style.color = "#fff";
        header.style.background = "#333";
        footer.style.background = "#333";
		
        if (quoteContainer) {
            quoteContainer.style.background = "#444";
            quoteContainer.style.color = "#fff";
        }
		
    }

    function setLightModeStyles() {
        body.style.background = "#fff";
        body.style.color = "#000";
        main.style.background = "#fff";
        main.style.color = "#000";
        header.style.background = "#eee";
        footer.style.background = "#eee";
		
        if (quoteContainer) {
            quoteContainer.style.background = "#eee";
            quoteContainer.style.color = "#000";
        }
    }
});
