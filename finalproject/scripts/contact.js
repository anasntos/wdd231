document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contact-form');
  const statusDiv = document.getElementById('form-status');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    // Pega valores
    const name = form.name.value.trim();
    const email = form.email.value.trim();
    const subject = form.subject.value.trim();
    const message = form.message.value.trim();

    // Simples validação extra
    if (!name || !email || !subject || !message) {
      statusDiv.textContent = 'Please fill out all fields.';
      statusDiv.style.color = 'red';
      return;
    }

    // Simular envio (pode substituir por backend real depois)
    statusDiv.textContent = 'Sending message...';
    statusDiv.style.color = varGet('--primary-color') || '#6eb3b6';

    setTimeout(() => {
      statusDiv.textContent = 'Thank you for contacting us, ' + name + '! We will get back to you soon.';
      statusDiv.style.color = 'green';
      form.reset();
    }, 1500);
  });
});

// Função para pegar variável CSS
function varGet(varName) {
  return getComputedStyle(document.documentElement).getPropertyValue(varName);
}
