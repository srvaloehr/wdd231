// nav.js
document.addEventListener("DOMContentLoaded", () => {
  const menuBtn = document.getElementById("hambtn");
  const nav = document.querySelector("nav");

  // Toggle mobile menu
  menuBtn.addEventListener("click", () => {
    nav.classList.toggle("show");
  });

  // Highlight active page in nav
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
});
