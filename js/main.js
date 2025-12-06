// Starter JS for the site
document.addEventListener('DOMContentLoaded', function () {
  console.log('js/main.js loaded');
  const el = document.createElement('p');
  el.textContent = "This page is powered by a small starter script (js/main.js).";
  document.querySelector('main').appendChild(el);
});
