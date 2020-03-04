/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Sticky Nav
 * Concepts: Updating class on scroll
 * Key takeaways: Let CSS do the work; Add padding when nav position changes.
 * Sidenotes: Some HTML5 elements don't implement a custom DOM interface, and use HTMLElement.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const nav = document.querySelector('#main')! as HTMLElement;
const topOfNav = nav.offsetTop;

function fixNav() {
  if (window.scrollY >= topOfNav) {
    document.body.style.paddingTop = nav.offsetHeight + 'px';
    document.body.classList.add('fixed-nav');
  } else {
    document.body.style.paddingTop = '0';
    document.body.classList.remove('fixed-nav');
  }
}

window.addEventListener('scroll', fixNav);