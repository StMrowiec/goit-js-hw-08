const startButton = document.getElementsByTagName('button')[0];
const stopButton = document.getElementsByTagName('button')[1];
let isChanging = false;

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

function setToTrue() {
  isChanging = true;
  startButton.style.opacity = '50%';
}

function setToFalse() {
  isChanging = false;
  startButton.style.opacity = '100%';
}

setInterval(() => {
  if (isChanging) document.body.style.backgroundColor = getRandomHexColor();
}, 1000);

startButton.addEventListener('click', setToTrue);
stopButton.addEventListener('click', setToFalse);
