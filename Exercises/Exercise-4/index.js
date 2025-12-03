const clockElements = {
  hour: document.querySelector(".hour"),
  minute: document.querySelector(".minute"),
  second: document.querySelector(".second"),
  ampmIndicator: document.querySelector(".ampm-indicator")
};

function updateClock() {
   const now = new Date();
   const seconds = now.getSeconds();
   const rawHours = now.getHours();
   const minutes = now.getMinutes();
   const hours = rawHours % 12 || 12;
   const ampm = rawHours >= 12 ? 'PM' : 'AM';
   clockElements.hour.textContent = String(hours).padStart(2, '0');
   clockElements.minute.textContent = String(minutes).padStart(2, '0');
   clockElements.second.textContent = String(seconds).padStart(2, '0');
   clockElements.ampmIndicator.textContent = ampm;
   setInterval(updateClock, 1000);
}

updateClock();
