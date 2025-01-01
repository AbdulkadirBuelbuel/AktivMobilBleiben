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

let header = document.querySelector('header');
header.appendChild(nav);

console.log(header);
