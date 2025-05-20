// navigation.js
document.addEventListener("DOMContentLoaded", () => {
  const menuButton = document.querySelector("#menu");
  const nav = document.querySelector(".navigation");

  menuButton.addEventListener("click", () => {
    nav.classList.toggle("open");
    menuButton.classList.toggle("open");
  });
});