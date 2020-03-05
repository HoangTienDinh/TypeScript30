/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Countdown Timer
 * Concepts: Using Date and setInterval. Displaying countdowns to the DOM.
 * Key takeaways: Use Date, not a counter with setInterval.
 *   Preceeding zero for single digits pattern.
 * Sidenotes: name attribute allows access through document global, but it's not very
 *   Typescript friendly.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

interface MyDocument extends Document {
  customForm: HTMLFormElement;
}

let countdown: number;
const timerDisplay = document.querySelector('.display__time-left')! as HTMLHeadingElement;
const endTime = document.querySelector('.display__end-time')! as HTMLParagraphElement;
const buttons = document.querySelectorAll('[data-time]')! as NodeListOf<HTMLElement>;

function timer(seconds: number) {
  clearInterval(countdown);
  const now = Date.now();
  const then = now + seconds * 1000;
  displayTimeLeft(seconds);
  displayEndTime(then);

  countdown = setInterval(() => {
    const secondsLeft = Math.round((then - Date.now()) / 1000);
    if (secondsLeft < 0) {
      clearInterval(countdown);
      return;
    }
    displayTimeLeft(secondsLeft);
  }, 1000);
}

function displayTimeLeft(seconds: number) {
  const minutes = Math.floor(seconds / 60);
  const remainderSeconds = seconds % 60;
  const display = `${minutes}:${remainderSeconds < 10 ? '0' : ''}${remainderSeconds}`;
  document.title = display;
  timerDisplay.textContent = display;
}

function displayEndTime(timestamp: number) {
  const end = new Date(timestamp);
  const hour = end.getHours();
  const adjustedHour = hour > 12 ? hour - 12 : hour;
  const minutes = end.getMinutes();
  endTime.textContent = `Be back at ${adjustedHour}:${minutes < 10 ? '0' : ''}${minutes}`;
}

function startTimer() {
  const seconds = Number(this.dataset.time);
  timer(seconds);
}

buttons.forEach(button => button.addEventListener('click', startTimer));
(document as MyDocument).customForm.addEventListener('submit', function (this: HTMLFormElement, e: Event) {
  e.preventDefault();
  const mins = this.minutes.value;
  timer(mins * 60);
  this.reset();
})