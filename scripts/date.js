// date.js
document.addEventListener("DOMContentLoaded", () => {
  const yearSpan = document.querySelector("#currentyear");
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear();
  }
});

// Copyright year
document.querySelector("#year").textContent = new Date().getFullYear();

// Last modified
document.querySelector("#lastModified").textContent = `Last Modified: ${document.lastModified}`;
