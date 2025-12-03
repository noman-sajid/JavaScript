const clockElements = {
  hour: document.querySelector(".hour"),
  minute: document.querySelector(".minute"),
  second: document.querySelector(".second")
};

function updateClock() {
   const now = new Date();
   const second = now.getSeconds();
   const rawHours = now.getHours();
   const minutes = now.getMinutes();
   const hours = rawHours % 12 || 12;
   clockElements.hour.textContent = String(hours).padStart(2, '0');
   clockElements.minute.textContent = String(minutes).padStart(2, '0');
   clockElements.second.textContent = String(second).padStart(2, '0');
   setTimeout(updateClock, 1000);
}

updateClock();
