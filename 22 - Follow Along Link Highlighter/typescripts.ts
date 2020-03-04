/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Follow Along Link Highlighter
 * Concepts: Update and move highlighter with mouseenter;
 *   getting entered element's location
 * Key takeaways: getBoundingClientRect + scroll; css translate transform
 * Sidenotes: No additional typing was necessary for TypeScript. Tsc can get the
 *   propper types from querySelectors when element tags are used;
 *   One improvement could be adding the transition after the first highlight, so
 *   it doesn't slide in from the top left.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

// 👀👀👀👀👀👀👀👀👀👀👀👀👀👀👀

const triggers = document.querySelectorAll('a');
const highlight = document.createElement('span');
highlight.classList.add('highlight');
document.body.append(highlight);

function highlightLink() {
  const linkCoords = this.getBoundingClientRect();
  const coords = {
    width: linkCoords.width,
    height: linkCoords.height,
    top: linkCoords.top + window.scrollY,
    left: linkCoords.left + window.scrollX,
  };
  highlight.style.width = `${coords.width + 4}px`;
  highlight.style.height = `${coords.height}px`;
  highlight.style.transform = `translate(${coords.left - 2}px, ${coords.top}px)`;
}

triggers.forEach(a => a.addEventListener('mouseenter', highlightLink));
