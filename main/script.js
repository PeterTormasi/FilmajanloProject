const NavBar = document.getElementById('nav-links');
const MenuButton = document.getElementById('menu-button');

MenuButton.addEventListener('click', () => {
    NavBar.classList.toggle('active');
    MenuButton.classList.toggle('open');
});

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

const movieCards = document.querySelectorAll('.card');
const workshopCards = document.querySelectorAll('.workshop_card');

movieCards.forEach(el => observer.observe(el));
workshopCards.forEach(el => observer.observe(el));

function navigateTo(url) {
  window.location.href = url;
}