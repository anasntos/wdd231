fetch('data/members.json')
  .then(res => res.json())
  .then(members => {
    const filtered = members.filter(m => m.membership === 'Gold' || m.membership === 'Silver');
    const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.querySelector('.spotlight-card-container');

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="${member.logo}" alt="Logo of ${member.name}">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}</p>
        <p><strong>Address:</strong> ${member.address}</p>
        <p><a href="${member.website}" target="_blank">Visit Website</a></p>
        <p><em>${member.membership} Member</em></p>
      `;
      container.appendChild(card);
    });
  });
