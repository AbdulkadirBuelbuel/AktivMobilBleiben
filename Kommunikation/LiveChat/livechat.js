// Zurück zur vorherigen Seite
function goBack() {
  window.history.back();
}

// Nachricht des Nutzers anzeigen
function showUserMessage() {
  const chatContainer = document.querySelector('.chat-container');

  // Nutzer-Nachricht einfügen
  const userMessage = document.createElement('div');
  userMessage.classList.add('chat-message');
  userMessage.innerHTML = `
    <div class="speech-bubble user-bubble">
      Hallo, danke für die nette Begrüßung.<br>
      Ich fühle mich heute nicht so gut und habe mehr Schmerzen als üblich.<br>
      Gibt es Tipps, wie ich mit plötzlichen Schmerzspitzen umgehen kann?
    </div>
  `;
  chatContainer.appendChild(userMessage);

  // Antwort des Arztes nach 3 Sekunden
  setTimeout(() => {
    const doctorMessage = document.createElement('div');
    doctorMessage.classList.add('chat-message');
    doctorMessage.innerHTML = `
      <img src="doctor-icon.png" alt="Arzt">
      <div class="speech-bubble doctor-bubble">
        Oh je!<br>
        Es tut mir leid zu hören, dass du Schmerzen hast.<br>
        Versuche ein Schmerzmittel einzunehmen und eine Wärmflasche oder einen Kühlpack auf die betroffene Stelle zu legen.<br>
        Wenn die Schmerzen anhalten oder schlimmer werden, kontaktiere bitte deinen Arzt.
      </div>
    `;
    chatContainer.appendChild(doctorMessage);
  }, 3000);

  // Button ausblenden
  document.getElementById('write-message').style.display = "none";
}  