const clock = document.querySelector('#clock');

function getTime() {
  const currentTime = new Date();
  let hours = String(currentTime.getHours()).padStart(2, '0');
  let minutes = currentTime.getMinutes().toString().padStart(2, '0');
  let seconds = currentTime.getSeconds().toString().padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}

getTime();
setInterval(getTime, 1000);
