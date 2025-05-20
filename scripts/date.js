// date.js
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});
