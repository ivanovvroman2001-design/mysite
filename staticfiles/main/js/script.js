document.querySelectorAll('.nav a, .btn').forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    document.querySelector(link.getAttribute('href'))
      .scrollIntoView({ behavior: 'smooth' });
  });
});

const toTop = document.getElementById('toTop');
window.addEventListener('scroll', () => {
  toTop.style.display = window.scrollY > 400 ? 'block' : 'none';
});

toTop.addEventListener('click', () => {
  document.getElementById('top')
    .scrollIntoView({ behavior: 'smooth' });
});

document.getElementById('contactForm').addEventListener('submit', e => {
  e.preventDefault();

  const name = document.getElementById('name').value.trim();
  const email = document.getElementById('email').value.trim();
  const msg = document.getElementById('formMessage');

  if (!name || !email) {
    msg.style.color = 'red';
    msg.textContent = 'Заполните все поля';
    return;
  }

  msg.style.color = 'green';
  msg.textContent = 'Форма отправлена (демо)';
});
