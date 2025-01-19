// ----------------------------- //
//        SEITENWECHSEL          //
// ----------------------------- //

// Weiterleitung zur Antwortseite
function navigateToAnswer1() {
  window.location.href = "antwort1.html";
}

function navigateToAnswer2() {
  window.location.href = "antwort2.html";
}

function navigateToAnswer3() {
  window.location.href = "antwort3.html";
}

// Weiterleitung zur Fragen-Seite
function navigateToQuestion() {
  window.location.href = "fragen.html";
}

// Zurück zur FAQ-Seite
function goBack() {
  window.location.href = "faq.html";
}

// Zurück zur Startseite
function goHome() {
  window.location.href = "index.html";
}

// ----------------------------- //
//        AUDIO-FUNKTION         //
// ----------------------------- //

// Überprüfen, ob der Audio-Button existiert
const audioButton = document.getElementById('audio-button');

if (audioButton) {
  audioButton.addEventListener('click', function () {
    const audioText = `
      Das Autofahren sollte erst wieder aufgenommen werden, wenn du das Bein vollständig kontrollieren kannst und keine Schmerzen mehr hast.
      Dies ist meist nach etwa sechs Wochen möglich. Bitte hole dir die Freigabe von deinem Arzt oder deiner Ärztin,
      bevor du wieder am Straßenverkehr teilnimmst.
    `;
  
    const speech = new SpeechSynthesisUtterance(audioText);
    speech.lang = "de-DE";
    window.speechSynthesis.speak(speech);
  });
}

// ----------------------------- //
//   FRAGE SENDEN - BUTTON LOGIK //
// ----------------------------- //

// Den Button, das Eingabefeld und den Popup auswählen
const userQuestionInput = document.getElementById('user-question');
const sendButton = document.getElementById('send-button');
const popupOverlay = document.getElementById('popup-overlay');
const closePopup = document.getElementById('close-popup');
const popupBackButton = document.getElementById('popup-back-button');

// Überwacht die Eingabe im Textfeld
userQuestionInput.addEventListener('input', () => {
  if (userQuestionInput.value.trim() !== "") {
    sendButton.classList.remove('hidden');  // Button anzeigen 
  } else {
    sendButton.classList.add('hidden');     // Button ausblenden
  }
});

// Button klickt und zeigt den Popup an
sendButton.addEventListener('click', () => {
  popupOverlay.classList.remove('hidden');  // Popup anzeigen
});

// Popup schließen (X-Button) → Textfeld leeren
closePopup.addEventListener('click', () => {
  popupOverlay.classList.add('hidden');     // Popup ausblenden
  userQuestionInput.value = "";             // Textfeld leeren
  sendButton.classList.add('hidden');       // Button wieder ausblenden
});

// Zurück zur Übersicht
popupBackButton.addEventListener('click', () => {
  window.location.href = "faq.html";  // Zur Übersicht weiterleiten
});