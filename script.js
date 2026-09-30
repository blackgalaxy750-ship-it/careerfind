// ================================
// CareerFind - Main JavaScript
// ================================


// Mobile Menu
const menuButton = document.querySelector(".menu-button");
const navLinks = document.querySelector(".nav-links");

if (menuButton) {
    menuButton.addEventListener("click", () => {

        navLinks.classList.toggle("mobile-active");

    });
}


// Search Button
const searchButton = document.querySelector(".search-button");

const searchInput = document.querySelector(
    ".search-input input"
);

const locationInput = document.querySelector(
    ".location-input input"
);


if (searchButton) {

    searchButton.addEventListener("click", () => {

        const job = searchInput.value.trim();
        const location = locationInput.value.trim();

        if (job === "" && location === "") {

            alert("Please enter a job or location to search.");

            return;
        }

        console.log("Job:", job);
        console.log("Location:", location);

        alert(
            `Searching jobs${job ? ` for "${job}"` : ""}${
                location ? ` in "${location}"` : ""
            }`
        );

    });

}


// Job Card Hover Enhancement

const jobCards = document.querySelectorAll(".job-card");

jobCards.forEach(card => {

    card.addEventListener("mouseenter", () => {
        card.style.cursor = "pointer";
    });

});
