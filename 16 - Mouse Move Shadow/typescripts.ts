/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Mouse Move Shadow
 * Concepts: CSS text-shadow, mouse position
 * Key takeaways: offset(X|Y), offsetWidth(X|Y), offset(Top|Right|Bottom|Left);
 *    calculating walk
 * Sidenotes: Walk is a "normalized" representation of the distance between
 *    the mouse and the center of the element.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const hero = document.querySelector('.hero')! as HTMLDivElement;
const text = hero.querySelector('h1')! as HTMLHeadingElement;
const maxWalk = 200;

function shadow(e: MouseEvent) {
  const target = e.target! as HTMLElement;

  // Get accurate mouse position
  let { offsetX: x, offsetY: y } = e;
  const { offsetWidth: width, offsetHeight: height } = hero;
  if (target && this !== e.target) {
    x = x + target.offsetLeft;
    y = y + target.offsetTop;
  }

  const xWalk = Math.round((x / width * maxWalk) - (maxWalk / 2));
  const yWalk = Math.round((y / height * maxWalk) - (maxWalk / 2));

  text.style.textShadow = `
    ${xWalk}px ${yWalk}px 2px red,
    ${-xWalk}px ${-yWalk}px 2px blue,
    ${yWalk}px ${xWalk}px 2px green,
    ${-yWalk}px ${-xWalk}px 2px green
  `;
}

hero.addEventListener('mousemove', shadow);