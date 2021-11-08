const menuButton = document.querySelector('nav > img');
const mobileMenu = document.querySelector('nav > div');
const header = document.querySelector('header');

function checkIfMenuOpen(menu, button) {
  if (menu.classList.contains('show')) {
    button.src = 'assets/ic_cross.svg';
  } else {
    button.src = 'assets/ic_menu.svg';
  }
}

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  // menuButton.src = 'assets/ic_cross.svg';
  header.classList.toggle('mobile');
  checkIfMenuOpen(mobileMenu, menuButton);
});
