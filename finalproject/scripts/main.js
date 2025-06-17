// Dynamic Year and Last Modified
document.getElementById('Year').textContent = new Date().getFullYear();
document.getElementById('lastModified').textContent = 'Last modified: ' + document.lastModified;

// Mobile Menu Toggle
const menuButton = document.querySelector('.menu-button');
const navLinks = document.querySelector('.nav-links');

menuButton.addEventListener('click', () => {
  navLinks.classList.toggle('show');
});

// Basic Shade Converter Example (Dummy Example)
const converterForm = document.getElementById('converterForm');
const resultDiv = document.getElementById('result');

converterForm.addEventListener('submit', function(e) {
  e.preventDefault();
  
  const brand = document.getElementById('brand').value.trim();
  const shade = document.getElementById('shade').value.trim();

  if (brand && shade) {
    resultDiv.innerHTML = `<p>Equivalent shades for <strong>${shade}</strong> in ${brand}:</p>
    <ul>
      <li>Maybelline: 120 Classic Ivory</li>
      <li>Fenty: 190</li>
      <li>NARS: Punjab</li>
    </ul>`;
  } else {
    resultDiv.innerHTML = '<p>Please enter both brand and shade.</p>';
  }
});
