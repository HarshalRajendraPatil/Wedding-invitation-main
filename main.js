// Variables for showing the animations
const sections = document.querySelectorAll("section");
const homeSec = document.querySelector(".homePage");
const aboutSec = document.querySelector(".about");
const weddingSec = document.querySelector(".wedding");
const gallerySec = document.querySelector(".gallery");
const groom = document.querySelector(".groom");
const bride = document.querySelector(".bride");
const gName = document.querySelector(".gName");
const bName = document.querySelector(".bName");
const emoji = document.querySelector(".emoji");
const timeLeft = document.querySelector(".timeLeft");
const mhendi = document.querySelector(".mhendi");
const haldi = document.querySelector(".haldi");
const marriage = document.querySelector(".marriage");
const map = document.querySelector(".location");
const box = document.querySelector(".box");
const dream = document.querySelectorAll(".dream");

if (homeSec.classList.contains("show-animate")) {
  gName.classList.add("animate-gName");
  bName.classList.add("animate-bName");
  emoji.classList.add("animate-emoji");
  timeLeft.classList.add("animate-timeLeft");
} else {
  timeLeft.classList.remove("animate-timeLeft");
  gName.classList.remove("animate-gName");
  bName.classList.remove("animate-bName");
  emoji.classList.remove("animate-emoji");
}

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY;
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight;

    if (top >= offset && top < offset + height) {
      sec.classList.add("show-animate");
    } else {
      sec.classList.remove("show-animate");
    }

    if (homeSec.classList.contains("show-animate")) {
      gName.classList.add("animate-gName");
      bName.classList.add("animate-bName");
      emoji.classList.add("animate-emoji");
      timeLeft.classList.add("animate-timeLeft");
    } else {
      timeLeft.classList.remove("animate-timeLeft");
      gName.classList.remove("animate-gName");
      bName.classList.remove("animate-bName");
      emoji.classList.remove("animate-emoji");
    }

    if (aboutSec.classList.contains("show-animate")) {
      groom.classList.add("animate-groom");
      bride.classList.add("animate-bride");
    } else {
      groom.classList.remove("animate-groom");
      bride.classList.remove("animate-bride");
    }

    if (weddingSec.classList.contains("show-animate")) {
      mhendi.classList.add("animate-gName");
      haldi.classList.add("animate-emoji");
      marriage.classList.add("animate-bName");
      map.classList.add("animate-map");
    } else {
      map.classList.remove("animate-map");
      mhendi.classList.remove("animate-gName");
      haldi.classList.remove("animate-emoji");
      marriage.classList.remove("animate-bName");
    }

    if (gallerySec.classList.contains("show-animate")) {
      box.classList.add("animate-box");
      dream.forEach((d) => d.classList.add("animate-dream"));
    } else {
      box.classList.remove("animate-box");
      dream.forEach((d) => d.classList.remove("animate-dream"));
    }
  });
};

// Variables for showing time-left
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
