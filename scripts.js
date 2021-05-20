// On load gets current day plus 8 days so couter always works
let future;
window.onload = () => {
  future = new Date().setDate(new Date().getDate() + 8);
};
// DOM selectors
const days = document.getElementById("days");
const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");

//animate countdown span elements
function animateFlip(element, value) {
  const valueInDom = element.querySelector(".bottom-back").innerText;
  const currentValue = value < 10 ? "0" + value : "" + value;

  if (valueInDom === currentValue) return;

  element.querySelector(".top-back span").innerText = currentValue;
  element.querySelector(".bottom-back span").innerText = currentValue;

  gsap.to(element.querySelector(".top"), 0.7, {
    rotationX: "-180deg",
    transformPerspective: 300,
    ease: Quart.easeOut,
    onComplete: function () {
      element.querySelector(".top").innerText = currentValue;
      element.querySelector(".bottom").innerText = currentValue;
      gsap.set(element.querySelector(".top"), { rotationX: 0 });
    },
  });

  gsap.to(element.querySelector(".top-back"), 0.7, {
    rotationX: 0,
    transformPerspective: 300,
    ease: Quart.easeOut,
    clearProps: "all",
  });
}

//count down time from future date
function countdown() {
  const date = new Date().getTime();
  const timeGap = future - date;
  // time intervals from miliseconds
  const gapSec = 1000;
  const gapMin = gapSec * 60;
  const gapHour = gapMin * 60;
  const gapDay = gapHour * 24;
  // calculating the time for day, hour, min, sec
  const textDay = Math.floor(timeGap / gapDay);
  const textHour = Math.floor((timeGap % gapDay) / gapHour);
  const textMin = Math.floor((timeGap % gapHour) / gapMin);
  const textSec = Math.floor((timeGap % gapMin) / gapSec);
  // // set dom elements to values
  // days.innerText = textDay;
  // hours.innerText = textHour;
  // minutes.innerText = textMin;
  // seconds.innerText = textSec;

  animateFlip(days, textDay);
  animateFlip(hours, textHour);
  animateFlip(minutes, textMin);
  animateFlip(seconds, textSec);
}

setInterval(countdown, 1000);
