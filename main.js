const day = document.querySelectorAll(".day");
const hour = document.querySelectorAll(".hour");
const minute = document.querySelectorAll(".minute");
const second = document.querySelectorAll(".second");

function dhm(ms) {
  const days = Math.floor(ms / (24 * 60 * 60 * 1000));
  const daysms = ms % (24 * 60 * 60 * 1000);
  const hours = Math.floor(daysms / (60 * 60 * 1000));
  const hoursms = ms % (60 * 60 * 1000);
  const minutes = Math.floor(hoursms / (60 * 1000));
  const minutesms = ms % (60 * 1000);
  const sec = Math.floor(minutesms / 1000);
  return [days, hours, minutes, sec];
}

setInterval(function () {
  let time = new Date("22 Jan 2024 14:00:00") - new Date();
  const getTime = dhm(time);
  day[0].textContent = getTime[0];
  hour[0].textContent = getTime[1];
  minute[0].textContent = getTime[2];
  second[0].textContent = getTime[3];
  day[1].textContent = getTime[0];
  hour[1].textContent = getTime[1];
  minute[1].textContent = getTime[2];
  second[1].textContent = getTime[3];
}, 1000);
