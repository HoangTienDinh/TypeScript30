/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Geolocation
 * Concepts: Geolocation API
 * Key takeaways: https://developer.mozilla.org/en-US/docs/Web/API/Geolocation_API
 * Sidenotes: Limited browsers; must be over https
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const arrow = document.querySelector(".arrow")! as SVGElement;
const speed = document.querySelector(".speed-value")! as HTMLSpanElement;

navigator.geolocation.watchPosition(
  data => {
    console.log(data);
    if (data.coords.speed) {
      speed.textContent = data.coords.speed.toFixed(2);
    } else {
      speed.textContent = "0";
    }
    arrow.style.transform = `rotate(${data.coords.heading}deg)`;
  },
  () => alert("We're gonna need those perms, buddy.")
);
