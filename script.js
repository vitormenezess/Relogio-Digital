"use strict";
const format = (tempo) => (tempo < 10 ? `0${tempo}` : tempo);

const updateDisplay = () => {
  const time = new Date();
  const hour = document.getElementById("hour");
  const minutes = document.getElementById("minute");
  const second = document.getElementById("second");

  hour.innerText = format(time.getHours());
  minutes.innerText = format(time.getMinutes());
  second.textContent = format(time.getSeconds());
};
setInterval(updateDisplay, 1000);
