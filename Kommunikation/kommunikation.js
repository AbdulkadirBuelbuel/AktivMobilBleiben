const pages = document.querySelectorAll('.page');
const scrollThumb = document.getElementById('scroll-thumb');
let currentPage = 0;

// Funktion zum Wechseln der Seiten
function switchPage() {
  pages.forEach((page, index) => {
    page.classList.toggle('active', index === currentPage);
  });

  // Scroll-Animation
  scrollThumb.style.transform = `translateY(${currentPage * 50}px)`;
}

// Automatischer Seitenwechsel
document.addEventListener('wheel', (event) => {
  if (event.deltaY > 0 && currentPage < pages.length - 1) {
    currentPage++;
  } else if (event.deltaY < 0 && currentPage > 0) {
    currentPage--;
  }
  switchPage();
});

// Notfallbutton Aktion
document.querySelector('.emergency-button').addEventListener('click', () => {
  alert('Notfallkontakte werden angezeigt!');
});
