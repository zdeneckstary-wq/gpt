const year = document.getElementById('year');
if (year) year.textContent = String(new Date().getFullYear());

const toggle = document.querySelector('.menu-toggle');
const nav = document.getElementById('main-nav');

if (toggle && nav) {
  toggle.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    toggle.setAttribute('aria-expanded', String(isOpen));
  });
}
