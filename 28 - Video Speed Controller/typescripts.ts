/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Video Speed Controller
 * Concepts: Calculating percent of element above mouse position; Video API
 * Key takeaways: Use pageX/Y and offsetTop/Left when scrolling doesn't matter.
 *   https://stackoverflow.com/questions/6073505/what-is-the-difference-between-screenx-y-clientx-y-and-pagex-y
 *   https://stackoverflow.com/questions/44172651/difference-between-getboundingclientrect-top-and-offsettop
 * Sidenotes: As a general rule, I'll start casting everything selected from the DOM,
 *   whether the code requires it or not.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const speed = document.querySelector('.speed')! as HTMLDivElement;
const bar = document.querySelector('.speed-bar')! as HTMLDivElement;
const video = document.querySelector('.flex')! as HTMLVideoElement;

function handleMove(e: MouseEvent) {
  const y = e.pageY - this.offsetTop;
  const percent = y / this.offsetHeight;
  const min = 0.4;
  const max = 4;
  const height = Math.round(percent * 100) + '%';
  const playbackRate = percent * (max - min) + min;
  bar.style.height = height;
  bar.textContent = playbackRate.toFixed(2) + 'x';
  video.playbackRate = playbackRate;
}

speed.addEventListener('mousemove', handleMove);
