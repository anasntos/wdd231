// lastModified.js
document.addEventListener("DOMContentLoaded", () => {
  const modifiedParagraph = document.querySelector("#lastModified");
  if (modifiedParagraph) {
    modifiedParagraph.textContent = `Last Modified: ${document.lastModified}`;
  }
});
