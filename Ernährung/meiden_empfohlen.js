const circles = document.querySelectorAll('.circle');
const scrollContainer = document.querySelector('.scroll-container');
const prevButton = document.getElementById('prev-button');
const nextButton = document.getElementById('next-button');
const overlay = document.getElementById('overlay');
const popupText = document.getElementById('popup-text');
const closePopup = document.getElementById('close-popup');

// Popup öffnen und HTML interpretieren
circles.forEach(circle => {
  circle.addEventListener('click', () => {
    popupText.innerHTML = circle.getAttribute('data-info');  // <--- innerHTML statt textContent
    overlay.style.display = 'flex';
  });
});

// Popup schließen
closePopup.addEventListener('click', () => {
  overlay.style.display = 'none';
});

// Kreise nach rechts rotieren (→)
nextButton.addEventListener('click', () => {
  const firstCircle = scrollContainer.firstElementChild;
  scrollContainer.appendChild(firstCircle);
  highlightCenterCircle();
});

// Kreise nach links rotieren (←)
prevButton.addEventListener('click', () => {
  const lastCircle = scrollContainer.lastElementChild;
  scrollContainer.prepend(lastCircle);
  highlightCenterCircle();
});

// Aktiven Kreis hervorheben
function highlightCenterCircle() {
  const middleX = window.innerWidth / 2;

  document.querySelectorAll('.circle').forEach(circle => {
    const rect = circle.getBoundingClientRect();
    const circleCenter = rect.left + rect.width / 2;

    if (Math.abs(circleCenter - middleX) < 100) {
      circle.classList.add('active');
    } else {
      circle.classList.remove('active');
    }
  });
}

// Initialer Fokus
highlightCenterCircle();
