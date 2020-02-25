/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Key Sequence Detection
 * Concepts: Recording and checking key presses
 * Key takeaways: Only save as much as you need.
 * Sidenotes: global function needs to be declared to avoid ts error;
 *   Must target es6 for string.includes.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es6 typescripts.ts
 */

declare function cornify_add(): void;

const pressed: string[] = [];
const secretCode = 'willwags';

window.addEventListener('keyup', (e) => {
  pressed.push(e.key);
  // pressed.splice(-secretCode.length - 1, pressed.length - secretCode.lenght); ???
  // pressed.splice(0, pressed.length - secretCode.length); Better
  while (pressed.length > secretCode.length) { // My preferred
    pressed.shift();
  }

  if (pressed.join('').includes(secretCode)) {
    cornify_add();
  }
  console.log(pressed);
});
