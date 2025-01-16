// Inhalte für die Kästen definieren
const contentSets = [
    [ 
        { img: 'icons/alltag.svg', text: 'Alltagsübungen' },
        { img: 'icons/dehnung.svg', text: 'Dehnübungen' },
        { img: 'icons/mobilitaet.svg', text: 'Mobilitätsübungen' },
        { img: 'icons/kraft.svg', text: 'Kraftübungen' }
    ],
    [
        { img: 'icons/ausdauer.svg', text: 'Gleichgewicht und Stabilität' },
        { img: 'icons/balance.svg', text: 'Propriozeptionstraining' },
        { img: 'icons/entspannung.svg', text: 'Entspannung' },
        { img: 'icons/yoga.svg', text: 'Koordinationsübungen' }
    ]
];

let currentSet = 0; // Start mit dem ersten Inhalt

const cards = document.querySelectorAll('.exercise-card');
const nextButton = document.getElementById('next-content');
const prevButton = document.getElementById('prev-content');
const dots = document.querySelectorAll('.dot');

// Funktion zum Aktualisieren des Inhalts
function updateContent(direction) {
    if (direction === 'next') {
        currentSet = (currentSet + 1) % contentSets.length; // Vorwärts navigieren
    } else if (direction === 'prev') {
        currentSet = (currentSet - 1 + contentSets.length) % contentSets.length; // Rückwärts navigieren
    }

    // Inhalte aktualisieren
    cards.forEach((card, index) => {
        const img = card.querySelector('img');
        const text = card.querySelector('p');

        img.src = contentSets[currentSet][index].img;
        text.textContent = contentSets[currentSet][index].text;
    });

    // Dots aktualisieren
    dots.forEach(dot => dot.classList.remove('active'));
    dots[currentSet].classList.add('active');
}

// Event Listener für die Pfeile
nextButton.addEventListener('click', () => updateContent('next'));
prevButton.addEventListener('click', () => updateContent('prev'));