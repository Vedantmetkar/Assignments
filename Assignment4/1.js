function swapTheme() {
  const appDiv = document.getElementById('app');
  const btn = document.getElementById('swap');

  if (appDiv.classList.contains('day')) {
    appDiv.classList.replace('day', 'night');
    btn.classList.replace('button_day', 'button_night');
  } else {
    appDiv.classList.replace('night', 'day');
    btn.classList.replace('button_night', 'button_day');
  }
}