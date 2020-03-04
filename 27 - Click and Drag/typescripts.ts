/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Click and Drag to Scroll
 * Concepts: Mouse events to set a div's horizontal scroll.
 * Key takeaways: Drag and drop event pattern; isDown (isDrawing) pattern;
 *   Recalculate scroll from mousedown event.
 * Sidenotes: Drag and dropping an element can be done similarly.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const slider = document.querySelector('.items')! as HTMLDivElement;
let isDown = false;
let startX: number, scrollLeft: number;

slider.addEventListener('mousedown', (e: MouseEvent) => {
  isDown = true;
  slider.classList.add('active');
  startX = e.pageX - slider.offsetLeft;
  scrollLeft = slider.scrollLeft;
});
slider.addEventListener('mouseleave', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mouseup', () => {
  isDown = false;
  slider.classList.remove('active');
});
slider.addEventListener('mousemove', (e) => {
  if (!isDown) return;
  e.preventDefault();
  const x = e.pageX - slider.offsetLeft;
  const walk = (x - startX) * 3;
  slider.scrollLeft = scrollLeft - walk;
});
