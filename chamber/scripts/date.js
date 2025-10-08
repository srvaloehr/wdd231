document.addEventListener('DOMContentLoaded', function () {
    /* footer script */
    const Year = new Date().getFullYear();
    const YearSpan = document.getElementById('currentyear');

    const lastModifiedDate = document.lastModified;
    const lastModifiedParagraph = document.getElementById('lastModified');

    if (YearSpan) {
        YearSpan.textContent = Year;
    }

    if (lastModifiedParagraph) {
        lastModifiedParagraph.textContent = `Last Modified: ${lastModifiedDate}`;
    }

});
window.addEventListener("DOMContentLoaded", () => {
    const messageContainer = document.createElement("p");
    // Insert message at the top of the main content
    const main = document.querySelector("main");
    main.prepend(messageContainer);

    const lastVisit = localStorage.getItem("lastVisit");
    const now = new Date().toLocaleDateString();

    if (lastVisit) {
        messageContainer.textContent = `Welcome back! Your last visit was on ${lastVisit}.`;
    } else {
        messageContainer.textContent = "Welcome! This is your first visit.";
    }

    // Store current visit date
    localStorage.setItem("lastVisit", now);
});