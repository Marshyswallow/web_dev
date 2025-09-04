let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

function start() {
  if (!isRunning) {
    timer = setInterval(updateTime, 1000);
    isRunning = true;
    document.getElementById('start').disabled = true; // Disable the Start button
    document.getElementById('stop').disabled = false; // Enable the Stop button
  }
}

function stop() {
  if (isRunning) {
    clearInterval(timer);
    isRunning = false;
    document.getElementById('start').disabled = false; // Enable the Start button
    document.getElementById('stop').disabled = true; // Disable the Stop button
  }
}

function updateTime() {
  seconds++;
  if (seconds === 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes === 60) {
    minutes = 0;
    hours++;
  }

  document.getElementById('time').textContent = formatTime(hours, minutes, seconds);
}

function formatTime(hours, minutes, seconds) {
  return (
    (hours < 10 ? '0' : '') + hours + ':' +
    (minutes < 10 ? '0' : '') + minutes + ':' +
    (seconds < 10 ? '0' : '') + seconds
  );
}

function reset() {
  clearInterval(timer);
  isRunning = false;
  seconds = 0;
  minutes = 0;
  hours = 0;
  document.getElementById('time').textContent = '00:00:00';
  document.getElementById('start').disabled = false; // Enable the Start button
  document.getElementById('stop').disabled = true; // Disable the Stop button
}
