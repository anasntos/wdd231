const posts = [
  {
    title: "Top 5 Foundation Trends for 2025",
    date: "June 15, 2025",
    content: "Discover the latest foundation trends, from dewy finishes to full coverage options. Learn how to choose the perfect foundation for your skin type and tone."
  },
  {
    title: "How to Match Your Foundation Like a Pro",
    date: "May 30, 2025",
    content: "Matching foundation can be tricky! Here are some expert tips to help you find your perfect shade and avoid common mistakes."
  },
  {
    title: "Why Undertones Matter in Foundation",
    date: "May 10, 2025",
    content: "Understanding your skin undertones is key to selecting the right foundation shade. Learn how to identify undertones and which shades work best."
  }
];

function loadPosts() {
  const container = document.getElementById('posts-container');
  container.innerHTML = '';

  posts.forEach(post => {
    const postDiv = document.createElement('article');
    postDiv.classList.add('post');

    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <div class="date">${post.date}</div>
      <p>${post.content}</p>
    `;

    container.appendChild(postDiv);
  });
}

document.addEventListener('DOMContentLoaded', loadPosts);

// Função para obter posts do localStorage (ou padrão)
function getPosts() {
  const savedPosts = localStorage.getItem('communityPosts');
  if (savedPosts) {
    return JSON.parse(savedPosts);
  } else {
    // Posts padrão se não tiver nada salvo ainda
    return [
      {
        title: "Top 5 Foundation Trends for 2025",
        date: "June 15, 2025",
        content: "Discover the latest foundation trends, from dewy finishes to full coverage options. Learn how to choose the perfect foundation for your skin type and tone."
      },
      {
        title: "How to Match Your Foundation Like a Pro",
        date: "May 30, 2025",
        content: "Matching foundation can be tricky! Here are some expert tips to help you find your perfect shade and avoid common mistakes."
      },
      {
        title: "Why Undertones Matter in Foundation",
        date: "May 10, 2025",
        content: "Understanding your skin undertones is key to selecting the right foundation shade. Learn how to identify undertones and which shades work best."
      }
    ];
  }
}

// Função para salvar posts no localStorage
function savePosts(posts) {
  localStorage.setItem('communityPosts', JSON.stringify(posts));
}

// Função para renderizar posts na página
function loadPosts() {
  const container = document.getElementById('posts-container');
  const posts = getPosts();

  container.innerHTML = '';

  posts.forEach(post => {
    const postDiv = document.createElement('article');
    postDiv.classList.add('post');

    postDiv.innerHTML = `
      <h2>${post.title}</h2>
      <div class="date">${post.date}</div>
      <p>${post.content}</p>
    `;

    container.appendChild(postDiv);
  });
}

// Função para lidar com o envio do formulário
function handleFormSubmit(event) {
  event.preventDefault();

  const titleInput = document.getElementById('post-title');
  const contentInput = document.getElementById('post-content');

  const newPost = {
    title: titleInput.value.trim(),
    content: contentInput.value.trim(),
    date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
  };

  if (!newPost.title || !newPost.content) {
    alert('Please fill in both the title and content!');
    return;
  }

  const posts = getPosts();
  posts.unshift(newPost); // adiciona no começo da lista

  savePosts(posts);
  loadPosts();

  // Limpar formulário
  titleInput.value = '';
  contentInput.value = '';
}

// Evento DOM
document.addEventListener('DOMContentLoaded', () => {
  loadPosts();

  const form = document.getElementById('new-post-form');
  form.addEventListener('submit', handleFormSubmit);
});
