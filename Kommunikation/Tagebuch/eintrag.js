const userEntry = document.getElementById('user-entry');
const finishButton = document.getElementById('finish-button');
const successPopup = document.getElementById('success-popup');
const closePopupButton = document.getElementById('close-popup');

// Popup anzeigen, wenn das Textfeld gefüllt ist
finishButton.addEventListener('click', () => {
  if (userEntry.value.trim() !== "") {
    successPopup.style.display = 'block';  // Popup einblenden
  } else {
    alert("Bitte schreibe etwas in das Textfeld.");
  }
});

// Popup schließen und Textfeld leeren
closePopupButton.addEventListener('click', () => {
  successPopup.style.display = 'none';    // Popup ausblenden
  userEntry.value = "";                   // Textfeld leeren
});

// Navigation zur Kommunikationsseite
function goToCommunication() {
  window.location.href = "kommunikation.html";
}

// Navigation zur Startseite
function goHome() {
  window.location.href = "index.html";
}