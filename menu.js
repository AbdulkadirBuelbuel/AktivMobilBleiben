let nav = document.createElement('nav');
let container = document.createElement('div');
container.className = "menu-container";

let circle = document.createElement('div');
circle.id = "bgCircle";

let burger = document.createElement('div');
burger.className = "burger-menu";

let spanUp = document.createElement('span');
spanUp.id = "up";

let spanMid = document.createElement('span');
spanMid.id = "middle";

let spanDown = document.createElement('span');
spanDown.id = "down";

burger.append(spanUp, spanMid, spanDown);
circle.appendChild(burger);

container.appendChild(circle);
nav.appendChild(container);

let menuList = document.createElement('ul');
menuList.className = "menu-list";

const menuItems = [
  "Terminplaner",
  "Lernbereich",
  "Training",
  "Ernährungsbereich",
  "Alltagsversorgung und Sicherheit",
  "Kommunikation",
  "Einstellungen"
];

menuItems.forEach(item => {
  let li = document.createElement('li');
  li.textContent = item;
  menuList.appendChild(li);
});

container.appendChild(menuList);

let header = document.querySelector('header');
header.appendChild(nav);

burger.addEventListener('click', () => {
    menuList.classList.toggle('active');
  
    // Animation für das Burger-Menü
    spanUp.classList.toggle('rotate-up');
    spanMid.classList.toggle('fade-out');
    spanDown.classList.toggle('rotate-down');
  });
  