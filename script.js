document.addEventListener("DOMContentLoaded", function () {
    let currentPage = window.location.pathname.split("/").pop(); // Get current file name
    if (currentPage === "") currentPage = "index.html"; // Default to index.html

    let navLinks = document.querySelectorAll(".navLinks");

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Apply active class
        }
    });
});
