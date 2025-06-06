document.addEventListener("DOMContentLoaded", () => {
  const cards = document.querySelectorAll(".card");

  cards.forEach((card, index) => {
    setTimeout(() => {
      card.classList.add("visible");
    }, index * 200); // efeito cascata: 200ms entre cada card
  });
});
