const menuButton = document.querySelector('nav > img');
const mobileMenu = document.querySelector('nav > div');
const header = document.querySelector('header');
const navLinks = document.querySelector('nav a');
const body = document.querySelector('body');

function checkIfMenuOpen(menu, button) {
  if (menu.classList.contains('show')) {
    button.src = 'assets/ic_cross.svg';
    body.classList.add('disScroll');
    header.classList.add('mobile');
  } else {
    button.src = 'assets/ic_menu.svg';
    body.classList.remove('disScroll');
    header.classList.remove('mobile');
  }
}

navLinks.addEventListener('click', () => {
  mobileMenu.classList.remove('show');
  checkIfMenuOpen(mobileMenu, menuButton);
});

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  checkIfMenuOpen(mobileMenu, menuButton);
});
