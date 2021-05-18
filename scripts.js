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

//
function countdown() {
  const date = new Date().getTime();
  const timeGap = future - date;
  //
  const gapSec = 1000;
  const gapMin = gapSec * 60;
  const gapHour = gapMin * 60;
  const gapDay = gapHour * 24;

  const textDay = Math.floor(timeGap / gapDay);
  const textHour = Math.floor((timeGap % gapDay) / gapHour);
  const textMin = Math.floor((timeGap % gapHour) / gapMin);
  const textSec = Math.floor((timeGap % gapMin) / gapSec);

  days.innerText = textDay;
  hours.innerText = textHour;
  minutes.innerText = textMin;
  seconds.innerText = textSec;
}

setInterval(countdown, 1000);
