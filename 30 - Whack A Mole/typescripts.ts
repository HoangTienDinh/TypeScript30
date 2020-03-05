/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Whack A Mole
 * Concepts: Getting random values; Recursive setTimeout; Game Development
 * Key takeaways: Random from max and min pattern; Recursive call on repeat random hole pattern;
 *    Looping with setTimeout; Stopping one setTimeout loop with another setTimeout;
 *    Preventing automated clicks;
 * Sidenotes: Since hole opbjects are passed around pretty often, it may be useful to create a
 *    separate Hole subtype of HTMLDivElement.
 *    Additional improvements: Stylize start button; save high score list to local storage (or on a server!);
 *      Difficulty settings; Set game length; Progressively get faster moles as time left gets lower.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const holes = document.querySelectorAll('.hole')! as NodeListOf<HTMLDivElement>;
const scoreBoard = document.querySelector('.score')! as HTMLSpanElement;
const moles = document.querySelectorAll('.mole')! as NodeListOf<HTMLDivElement>;
let lastHole: HTMLDivElement;
let timeUp = false;
let score = 0;

function randomTime(min: number, max: number) {
  return Math.round(Math.random() * (max - min) + min);
}

function randomHole(holes: NodeListOf<HTMLDivElement>): HTMLDivElement {
  const idx = Math.floor(Math.random() * holes.length);
  const hole = holes[idx];
  if (hole === lastHole) {
    console.log('SAME HOLE NOT ALLOWED!');
    return randomHole(holes);
  }
  lastHole = hole;
  return hole;
}

function peep() {
  const time = randomTime(200, 1000);
  const hole = randomHole(holes);
  hole.classList.add('up');
  setTimeout(() => {
    hole.classList.remove('up');
    if (!timeUp) peep();
  }, time);
}

function startGame() {
  scoreBoard.textContent = '0';
  timeUp = false;
  score = 0;
  peep();
  setTimeout(() => timeUp = true, 10000);
}

function bonk(e: MouseEvent) {
  if (!e.isTrusted) return; // Take that cheater.
  score++;
  this.classList.remove('up');
  scoreBoard.textContent = String(score);
}

moles.forEach(mole => mole.addEventListener('click', bonk));
