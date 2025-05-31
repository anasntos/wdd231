fetch('data/members.json')
  .then(res => res.json())
  .then(members => {
    if (!Array.isArray(members)) {
      console.error('Formato inválido de dados dos membros.');
      return;
    }

    const filtered = members.filter(m => m.membership === 'Gold' || m.membership === 'Silver');
    const selected = filtered.sort(() => 0.5 - Math.random()).slice(0, 3);
    const container = document.querySelector('.spotlight-card-container');

    selected.forEach(member => {
      const card = document.createElement('div');
      card.classList.add('spotlight-card');
      card.innerHTML = `
        <img src="${member.logo}" alt="Logo of ${member.name}" onerror="this.src='images/placeholder.png';">
        <h3>${member.name}</h3>
        <p><strong>Phone:</strong> ${member.phone}<
