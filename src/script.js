const menuToggle = document.getElementById('menu-btn');
const navbar = document.querySelector('div.navbar-menu');

menuToggle.addEventListener('click', () => {
  navbar.classList.toggle('active');
});

document.addEventListener('click', (e) => {
  if (!menuToggle.contains(e.target) && !navbar.contains(e.target)) {
    navbar.classList.remove('active');
  }
});
