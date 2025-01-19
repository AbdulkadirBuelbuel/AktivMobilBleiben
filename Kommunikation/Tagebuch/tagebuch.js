let currentQuestion = 0;
const questions = document.querySelectorAll('.question');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');

function updateProgress() {
  const progress = ((currentQuestion + 1) / questions.length) * 100;
  progressFill.style.width = progress + "%";
  progressText.textContent = `${currentQuestion + 1}/${questions.length}`;
}

function showQuestion(index) {
  questions.forEach(q => q.classList.remove('active'));
  questions[index].classList.add('active');
  updateProgress();
}

function nextQuestion() {
  if (currentQuestion < questions.length - 1) {
    currentQuestion++;
    showQuestion(currentQuestion);
  }
}

function previousQuestion() {
  if (currentQuestion > 0) {
    currentQuestion--;
    showQuestion(currentQuestion);
  }
}

function restart() {
  currentQuestion = 0;
  showQuestion(currentQuestion);
}

function goHome() {
  window.location.href = "../kommunikation.html";
}

document.addEventListener('DOMContentLoaded', () => {
  showQuestion(currentQuestion);
});