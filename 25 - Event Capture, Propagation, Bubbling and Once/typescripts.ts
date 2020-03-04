/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Event Capture, Propogation, Bubbling and Once
 * Concepts: Event propogation - capture & bubbling
 * Key takeaways: Event propogation; listener options - capture, once
 * Sidenotes:
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const divs = document.querySelectorAll('div');
const button = document.querySelector('button')!;

function logText(e: Event) {
  console.log(this.classList.value);
  // e.stopPropagation();
}

divs.forEach(div => div.addEventListener('click', logText, {
  capture: false,
  once: true,
}));

button.addEventListener('click', () => {
  console.log('Click!!!');
}, {
  once: true,
});
