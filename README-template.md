# Frontend Mentor - Launch countdown timer solution

This is a solution to the [Launch countdown timer challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/launch-countdown-timer-N0XkGfyz-). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)
- [Acknowledgments](#acknowledgments)

## Overview

### The challenge

Users should be able to:

- See hover states for all interactive elements on the page
- See a live countdown timer that ticks down every second (start the count at 14 days)
- **Bonus**: When a number changes, make the card flip from the middle

### Screenshot

![](./assets/images/countdown_timer.gif)

### Links

- Solution URL: [Add solution URL here](https://www.frontendmentor.io/solutions/site-launch-countdown-with-animations-using-green-sock-CRYIIdLI7)
- Live Site URL: [Add live site URL here](https://fem-launch-timer.netlify.app)

## My process

### Built with

- Semantic HTML5 markup
- SASS Pre-Processor
- CSS custom properties
- Flexbox
- Javascript functionality
- [Green Sock](https://greensock.com/) - For card animation

### What I learned

Animation is not a strong suit for me. The scaffolding for the flip animation on the cards was something I had to reference several code pens on to get right. This is the method I found others using and it worked for me as well

```html
<div class="countdown-block day-container">
  <span id="days" class="time-element">
    <span class="top">14</span>
    <span class="top-back">
      <span>14</span>
    </span>
    <span class="bottom">14</span>
    <span class="bottom-back">
      <span>14</span>
    </span>
  </span>
  <h3>Days</h3>
</div>
```

I wanted this project to consistently work for demonstration purposes so instead of using as hard set future date to coutdown from I used the built in date method to always set the future date to 14 days from Date now

```js
// On load gets current day plus 14 days so couter always works
let future;
window.onload = () => {
  future = new Date().setDate(new Date().getDate() + 14);
};
```

### Continued development

Use this section to outline areas that you want to continue focusing on in future projects. These could be concepts you're still not completely comfortable with or techniques you found useful that you want to refine and perfect.

**Note: Delete this note and the content within this section and replace with your own plans for continued development.**

### Useful resources

- [Reference Code Pen](https://codepen.io/doriancami/pen/jEJvaV) - I studdied this hard trying to figure out the html layout and css used to line all the contents in the span elements up correctly. I did not have as much luck understanding the JS portion but researching the "TweenMax" used in their JS led me to the Green Sock JS animation library.
- [Simple Countdown Tutorial](https://www.youtube.com/watch?v=Rib69h2DOxg&t=1188s) - This was a shockingly simple tutorial on creating a countdown timer and was also pretty entertaining. This guy ahs a lot of useful content.

## Author

- Website - [Brian Farmer](https://brianlfarmerllc-biosite.netlify.app/)
- GitHub URL: - [GitHub URL](https://github.com/brianlfarmerllc/fem_launch_timer)
- Frontend Mentor - [@brianlfarmerllc](https://www.frontendmentor.io/profile/brianlfarmerllc)
