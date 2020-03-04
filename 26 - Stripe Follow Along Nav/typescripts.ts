/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Stripe Follow Along Dropdown
 * Concepts: Updating and showing dropdown on "hover"
 * Key takeaways: Use the dropdown's container as the trigger;
 *   Adjust the same background element for each;
 *   Calculate bg size from dropdown's getBoundingClientRect;
 *   Calculate bg coordinates from dropdown's rectangle and
 *   subtract the offset of the container
 * Sidenotes: Further improvement is adding fold-down animation when first entering the ul.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const triggers = document.querySelectorAll('.cool > li')! as NodeListOf<HTMLLIElement>;
const background = document.querySelector('.dropdownBackground')! as HTMLDivElement;
const nav = document.querySelector('.top')! as HTMLElement;

function handleEnter() {
  this.classList.add('trigger-enter');
  setTimeout(() =>
    this.classList.contains('trigger-enter') && this.classList.add('trigger-enter-active'), 150);
  background.classList.add('open');

  const dropdown = this.querySelector('.dropdown');
  const dropdownCoords = dropdown.getBoundingClientRect();
  const navCoords = nav.getBoundingClientRect();

  const coords = {
    width: dropdownCoords.width,
    height: dropdownCoords.height,
    top: dropdownCoords.top - navCoords.top,
    left: dropdownCoords.left - navCoords.left,
  };

  background.style.setProperty('width', `${coords.width}px`);
  background.style.setProperty('height', `${coords.height}px`);
  background.style.setProperty('transform', `translate(${coords.left}px, ${coords.top}px)`);

}

function handleLeave() {
  this.classList.remove('trigger-enter', 'trigger-enter-active');
  background.classList.remove('open');
}

triggers.forEach(trigger => trigger.addEventListener('mouseenter', handleEnter));
triggers.forEach(trigger => trigger.addEventListener('mouseleave', handleLeave));
