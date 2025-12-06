// Starter JS for the site
document.addEventListener('DOMContentLoaded', function () {
  console.log('js/main.js loaded');
  const el = document.createElement('p');
  el.textContent = "This page is powered by a small starter script (js/main.js).";
  document.querySelector('main').appendChild(el);

  const btn = document.getElementById('greetBtn');
  const msg = document.getElementById('message');

  if (btn && msg) {
    btn.addEventListener('click', function () {
      const name = prompt('What is your name?', '') || 'friend';
      const text = `Hello, ${name}! Welcome to Mili's webbie.`;
      msg.textContent = text;
      console.log('Greeted:', name);
    });
  }

  // Gallery click: open image in new tab when clicked
  const gallery = document.querySelector('.gallery-grid');
  if (gallery) {
    gallery.addEventListener('click', (e) => {
      const img = e.target.closest('img');
      if (img) {
        window.open(img.src, '_blank');
      }
    });
  }
});
