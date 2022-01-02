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
const contactForm = document.forms[0];
const emailField = contactForm.elements.email;
const nameField = contactForm.elements.name;
const messageField = contactForm.elements.message;

const heading = createElementWithText('h2', 'Projects');
heading.classList.add('headings');
projectSection.id = 'projects';
projectSection.appendChild(heading);

function createDetailsPopup(object) {
  body.classList.add('disScroll');
  const modal = createElementWithText('div');
  modal.id = 'modal';
  const modalContent = `  <article>
  <h3>${object.name}</h3>
  <img
    id="modal-icon"
    src="./assets/ic_cross.svg"
    alt="menu icon"
    width="25"
    height="19"
  />
  <ul>
    <li>HTML/CSS</li>
    <li>Ruby on Rails</li>
    <li>Javascript</li>
  </ul>
  <div id="mobile-shots">
    <ul>
      <li id="first">
        <img src="./assets/Rectangle34.png" alt="" />
      </li>
      <li id="second">
        <img src="./assets/Rectangle41.png" alt="" />
      </li>
      <li id="third">
        <img src="./assets/Rectangle41.png" alt="" />
      </li>
      <li id="fourth">
        <img src="./assets/Rectangle41.png" alt="" />
      </li>
      <li id="fifth">
        <img src="./assets/Rectangle41.png" alt="" />
      </li>
    </ul>
  </div>
  <div id="desktop-shots">
    <ul>
      <li id="fst">
        <img src="./assets/Rectangle34(1).png" alt="" />
      </li>
      <li id="snd">
        <img src="./assets/Rectangle41(1).png" alt="" />
      </li>
      <li id="trd">
        <img src="./assets/Rectangle41(1).png" alt="" />
      </li>
      <li id="fth">
        <img src="./assets/Rectangle41(1).png" alt="" />
      </li>
      <li id="fith">
        <img src="./assets/Rectangle41(1).png" alt="" />
      </li>
    </ul>
  </div>
  <p>${object.description}</p>
  <footer>
    <div>
      <button>See live</button>
      <button>See Source</button>
    </div>
    <div id="navigate">
      <button>Previous project</button>
      <button>Next project</button>
    </div>
  </footer>
</article>`;
  modal.innerHTML = modalContent;
  projectSection.appendChild(modal);
  const closeButton = document.getElementById('modal-icon');
  closeButton.addEventListener('click', () => {
    body.classList.remove('disScroll');
    modal.remove();
  });
}

const addEvtListenerToCards = (cards, event = 'mouseover') => {
  cards.forEach((card) => {
    if (event === 'mouseover') {
      card.addEventListener(event, () => {
        card.childNodes[3].classList.add('show');
      });
    } else {
      card.addEventListener(event, () => {
        card.childNodes[3].classList.remove('show');
      });
    }
  });
};

function addEvtListenerToButtons(buttons, projectObject) {
  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      createDetailsPopup(projectObject);
    });
  });
}

function createMobileCards() {
  const cardsParent = createElementWithText('div');
  let cardContent = '';
  let buttons;
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
    buttons = document.querySelectorAll('.card button');
    addEvtListenerToButtons(buttons, project);
  });
}

function createDesktopCards() {
  let cardContent = '';
  const cardsParent = createElementWithText('div');
  let cards;
  let cardsButton;

  for (let index = 0; index < projects.length; index += 1) {
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
    cards = document.querySelectorAll('.loss');
    cardsButton = document.querySelectorAll('.loss button');
    addEvtListenerToCards(cards);
    addEvtListenerToCards(cards, 'mouseout');

    addEvtListenerToButtons(cardsButton, projects[index]);
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

function showError(message) {
  const submitButton = document.getElementById('submit-btn');
  const errorElement = submitButton.parentNode.querySelector('span');

  errorElement.innerText = message;
}

function validatemessage() {
  const message = messageField.value.trim();

  if (message === '') {
    return showError('Please enter your message');
  }

  return true;
}

function validateUserName() {
  const name = nameField.value.trim();

  if (name === '') {
    return showError('Name is required');
  }

  return true;
}

function validateEmail() {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  const email = emailField.value.trim();
  const validCheck = !emailRegex.test(email);
  const lettersCheck = email.toLowerCase() !== email;

  if (email === '') {
    return showError('Email is required');
  }

  if (!validCheck && !lettersCheck) {
    contactForm.submit();
    return showError('');
  }

  if (validCheck) {
    return showError('Enter a valid email address');
  }

  if (lettersCheck) {
    return showError('Email must be in lower case');
  }

  return true;
}

contactForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const emailValid = validateEmail();
  const nameValid = validateUserName();
  const messageValid = validatemessage();

  if (nameValid && emailValid && messageValid) {
    contactForm.submit();
  }
});
