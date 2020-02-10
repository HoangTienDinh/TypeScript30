/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: TS and CSS Clock
 * Concepts: Transforms and transitions
 * Key takeaways: Using Date, updating CSS with TS.
 * Sidenotes: Disable transition on the reset step to avoid flicker.
 */

const secHand: HTMLElement = document.querySelector('.second-hand');
const minHand: HTMLElement = document.querySelector('.min-hand');
const hourHand: HTMLElement = document.querySelector('.hour-hand');

function setDateLoop(): void {
  const now = new Date();
  const seconds = now.getSeconds();
  const secondsDegrees = (seconds / 60) * 360 + 90;
  if (secondsDegrees === 90) {
    secHand.style.transition = 'none';
  } else {
    secHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
  secHand.style.transform = `rotate(${secondsDegrees}deg)`;

  const mins = now.getMinutes();
  const minsDegrees = (mins / 60) * 360 + 90;
  if (minsDegrees === 90) {
    minHand.style.transition = 'none';
  } else {
    minHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
  minHand.style.transform = `rotate(${minsDegrees}deg)`;

  const hours = now.getHours();
  const hoursDegrees = (hours / 12) * 360 + 90;
  if (hoursDegrees === 90) {
    hourHand.style.transition = 'none';
  } else {
    hourHand.style.transition = 'transform 0.05s cubic-bezier(0.1, 2.7, 0.58, 1)';
  }
  hourHand.style.transform = `rotate(${hoursDegrees}deg)`;

  window.requestAnimationFrame(setDateLoop);
}

setDateLoop();
