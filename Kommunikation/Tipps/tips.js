// Tabs & Inhalt verbinden
const steps = document.querySelectorAll('.progress-step');
const sections = document.querySelectorAll('.tip-section');

// Tab wechseln
steps.forEach(step => {
  step.addEventListener('click', () => {
    // Alle Tabs deaktivieren
    steps.forEach(s => s.classList.remove('active'));
    sections.forEach(sec => sec.classList.remove('active'));

    // Aktiven Tab setzen
    step.classList.add('active');
    document.getElementById(step.dataset.target).classList.add('active');
  });
});

// Zurück-Button Funktionalität
document.getElementById('back-button').addEventListener('click', () => {
  alert("Zurück zur vorherigen Seite");
});
