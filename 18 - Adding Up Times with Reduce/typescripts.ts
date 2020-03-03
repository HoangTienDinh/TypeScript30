/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Adding up times with reduce
 * Concepts: Map, reduce, calculating times
 * Key takeaways: Mapping step by step can be more readable, but combining
 *   into a single map or reduce is less expensive.
 * Sidenotes: Targeted es6 to get Array.from
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es6 typescripts.ts
 */

const timeNodes = Array.from(document.querySelectorAll('[data-time]'));
console.time('map and reduce');
const seconds = timeNodes
  .map((node: HTMLElement) => node.dataset.time)
  .map(timeCode => {
    if (!timeCode) return 0;
    const [mins, secs] = timeCode.split(':').map(Number);
    return (mins * 60) + secs;
  })
  .reduce((total, vidSeconds) => total + vidSeconds);
console.timeEnd('map and reduce');

let secondsLeft = seconds;
const hours = Math.floor(secondsLeft / 3600);
secondsLeft = secondsLeft % 3600;
const minutes = Math.floor(secondsLeft / 60);
secondsLeft = secondsLeft % 60;
console.log(`Map and reduce: ${hours}:${minutes}:${secondsLeft}`);


console.time('just reduce');
const redSeconds = timeNodes.reduce((totalSeconds: number, node: HTMLElement) => {
  const [mins, secs] = node.dataset.time!.split(':').map(Number);
  return totalSeconds + mins * 60 + secs;
}, 0);
console.timeEnd('just reduce');
console.log(`Just reduce: ${Math.floor(redSeconds / 3600)}:${Math.floor((redSeconds % 3600) / 60)}:${redSeconds % 60}`);
