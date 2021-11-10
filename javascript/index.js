const projects = [
  {
    name: 'Project name goes here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: '',
    source: '',
    images: [],
    technoligies: [],
  },
  {
    name: 'Project name goes here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: '',
    source: '',
    images: [],
    technoligies: [],
  },
  {
    name: 'Project name goes here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: '',
    source: '',
    images: [],
    technoligies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  },
  {
    name: 'Project name goes here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: '',
    source: '',
    images: [],
    technoligies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  },
  {
    name: 'Project name goes here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: '',
    source: '',
    images: [],
    technoligies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  },
  {
    name: 'Project name goes here',
    description:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisiUt aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
    url: '',
    source: '',
    images: [],
    technoligies: ['HTML/CSS', 'Ruby on Rails', 'JavaScript'],
  },
];

function createElementWithText(tag, text = null) {
  const element = document.createElement(tag);
  element.textContent = text;
  return element;
}

const menuButton = document.querySelector('nav > img');
const mobileMenu = document.querySelector('nav > div');
const header = document.querySelector('header');
const navLinks = document.querySelectorAll('nav a');
const body = document.querySelector('body');
const aboutSection = document.getElementById('about-me');
const projectSection = createElementWithText('section');
const main = document.querySelector('main');

const heading = createElementWithText('h2', 'Projects');
heading.classList.add('headings');
projectSection.id = 'projects';
projectSection.appendChild(heading);

function createMobileCards() {
  let cardContent = '';
  const cardsParent = createElementWithText('div');
  projects.forEach((project) => {
    cardContent += `<div class="card">
<figure>
  <img src="./assets/Rectangle_6.png" alt="project one screenshot" />
</figure>
<section>
  <h3>${project.name}</h3>
  <ul>
    <li>${project.technoligies[0]}</li>
    <li>${project.technoligies[1]}</li>
    <li>${project.technoligies[2]}</li>
  </ul>
  <button class="secondary-dark" type="button">
    See this project
  </button>
</section>
</div>`;
    cardsParent.innerHTML = cardContent;
    projectSection.appendChild(cardsParent);
  });
}

function createDesktopCards() {
  let cardContent = '';
  const cardsParent = createElementWithText('div');

  for (let index = 0; index < projects.length; index++) {
    let id;
    let image;

    switch (index) {
      case 1:
        id = 'fstp';
        image = './assets/Rectangle27.png';
        break;
      case 2:
        id = 'sndp';
        image = './assets/Rectangle21.png';
        break;
      case 3:
        id = 'frtp';
        image = './assets/Rectangle25.png';
        break;
      case 4:
        id = 'sxhp';
        image = './assets/Rectangle26.png';
        break;
      case 5:
        id = 'fftp';
        image = './assets/Rectangle47.png';
        break;
      default:
        id = 'thrdp';
        image = './assets/Rectangle46.png';
    }

    cardContent += `<div id=${id} class="loss" tabindex="0">
    <figure>
      <img
        src=${image}
        alt="project one screenshot"
      />
    </figure>
    <section>
      <h3>Project name goes</h3>
      <ul>
        <li>HTML/CSS</li>
        <li>Ruby on Rails</li>
        <li>+1</li>
      </ul>
      <button class="primary-white" type="button">
        See this project
      </button>
    </section>
  </div>`;
    cardsParent.innerHTML = cardContent;
    projectSection.appendChild(cardsParent);
  }
}

const load = () => {
  main.insertBefore(projectSection, aboutSection);
  if (window.innerWidth < 992) {
    createMobileCards();
  } else {
    createDesktopCards();
  }
};

window.onload = load;

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

function addEvtListenerToNavlinks() {
  navLinks.forEach((link) => {
    link.addEventListener('click', () => {
      mobileMenu.classList.remove('show');
      checkIfMenuOpen(mobileMenu, menuButton);
    });
  });
}

addEvtListenerToNavlinks();

menuButton.addEventListener('click', () => {
  mobileMenu.classList.toggle('show');
  checkIfMenuOpen(mobileMenu, menuButton);
});
