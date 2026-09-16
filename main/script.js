const NavBar = document.getElementById('navbar');
const MenuButton = document.getElementById('menu-button');

MenuButton.addEventListener('click', () => {
    NavBar.classList.toggle('active');
});
