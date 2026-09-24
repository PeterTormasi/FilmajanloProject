const NavBar = document.getElementById('nav-links');
const MenuButton = document.getElementById('menu-button');

MenuButton.addEventListener('click', () => {
    NavBar.classList.toggle('active');
    MenuButton.classList.toggle('open');
});

const animatedElements = document.querySelectorAll('.card');

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.75
});

animatedElements.forEach(el => observer.observe(el));



const workshopCards = document.querySelectorAll('.workshop_card');

const workshopObserver = new IntersectionObserver((entries) => {

  entries.forEach(entry => {

    if (entry.isIntersecting) {
      entry.target.classList.add('is-visible');
    }

  });

}, {
  threshold: 0.2
});

workshopCards.forEach((el, index) => {
  el.style.transitionDelay = `${index * 150}ms`;
  workshopObserver.observe(el);
});
