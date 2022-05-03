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
  
  const day = document.getElementById('day');
  const month = document.getElementById('month');
  const year = document.getElementById('year');
  day.innerText = format(time.getDate())
  month.innerText = format(time.getMonth()+1)
  year.innerText = time.getFullYear()

};
setInterval(updateDisplay, 1000);
