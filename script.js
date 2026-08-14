const letters = document.querySelectorAll('.letter');
const progressFill = document.getElementById('progress-fill');
const progressText = document.getElementById('progress-text');
const loader = document.getElementById('loader');
const mainContent = document.getElementById('main-content');

let progress = 0;
const duration = 2200;
const interval = 30;
const step = 100 / (duration / interval);

letters.forEach((letter, index) => {
  setTimeout(() => {
    letter.classList.add('show');
  }, 200 + index * 300);
});

const timer = setInterval(() => {
  progress += step;
  if (progress >= 100) {
    progress = 100;
    clearInterval(timer);

    setTimeout(() => {
      loader.classList.add('fade-out');
      setTimeout(() => {
        loader.style.display = 'none';
        mainContent.classList.remove('hidden');
        mainContent.classList.add('show');
      }, 800);
    }, 300);
  }

  progressFill.style.width = progress + '%';
  progressText.textContent = Math.floor(progress) + '%';
}, interval);
