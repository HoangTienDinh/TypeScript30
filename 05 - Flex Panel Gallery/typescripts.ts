/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Flex Panel Gallery
 * Concepts: Flexbox
 * Key takeaways: Leaning on CSS, nesting flexboxes, , using classList.toggle
 * Sidenotes:
 *   Exaggerated cubic bezier transition can add a nice touch.
 *   TransitionEndEvent.propertyName can be used to determine which transition triggered the event.
 */

const panels = document.querySelectorAll('.panel');

function toggleOpen() {
  this.classList.toggle('open');
}

function toggleActive(e) {
  if (e.propertyName.includes('flex')) {
    this.classList.toggle('open-active');
  }
}

panels.forEach(panel => panel.addEventListener('click', toggleOpen));
panels.forEach(panel => panel.addEventListener('transitionend', toggleActive));
