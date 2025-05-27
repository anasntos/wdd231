// Mostrar ano atual e data de modificação
document.getElementById('last-modified').textContent = document.lastModified;

// Alternar visualização
const gridButton = document.getElementById('grid-view');
const listButton = document.getElementById('list-view');
const directory = document.getElementById('member-directory');

gridButton.addEventListener('click', () => {
  directory.classList.add('grid-view');
  directory.classList.remove('list-view');
});

listButton.addEventListener('click', () => {
  directory.classList.add('list-view');
  directory.classList.remove('grid-view');
});

// Carregar membros com fetch
async function fetchMembers() {
  try {
    const response = await fetch('data/members.json');
    const data = await response.json();
    displayMembers(data);
  } catch (error) {
    console.error('Erro ao carregar os membros:', error);
  }
}

function displayMembers(members) {
  directory.innerHTML = ''; // Limpar antes de renderizar

  members.forEach(member => {
    const card = document.createElement('div');
    card.classList.add('member-card');

    card.innerHTML = `
      <img src="images/${member.image}" alt="${member.name}" loading="lazy" />
      <h3>${member.name}</h3>
      <p>${member.address}</p>
      <p>${member.phone}</p>
      <a href="${member.website}" target="_blank">Visitar site</a>
      <p><strong>Nível:</strong> ${getMembershipName(member.membership)}</p>
      <p>${member.info}</p>
    `;

    directory.appendChild(card);
  });
}

function getMembershipName(level) {
  switch (level) {
    case 3: return 'Gold';
    case 2: return 'Silver';
    case 1: return 'Member';
    default: return 'N/A';
  }
}

fetchMembers();
