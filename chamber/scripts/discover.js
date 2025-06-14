const container = document.getElementById('cards-container');

fetch('data/places.json')
  .then(response => response.json())
  .then(data => {
    data.forEach(place => {
      const card = document.createElement('article');
      card.classList.add('card');

      card.innerHTML = `
        <h2>${place.name}</h2>
        <p><strong>Address:</strong> ${place.address}</p>
        <p>${place.description}</p>
      `;

      container.appendChild(card);
    });
  })
  .catch(error => {
    console.error('Error loading JSON:', error);
    container.innerHTML = "<p>Failed to load places.</p>";
  });
