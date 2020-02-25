/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Hold Shift to Check Multiple Checkboxes
 * Concepts: Checkbox inputs, detecting the shift key
 * Key takeaways: inBetween pattern, click event on checkboxes
 * Sidenotes: A shift to uncheck easily follows from this.
 *   The last item doesn't have checked set during the loop, but its always
 *   already checked so it doesn't need to be.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const checkboxes = document.querySelectorAll('.inbox input[type="checkbox"]');

let lastChecked: HTMLInputElement;

function handleCheck(e: MouseEvent) {
  let inBetween = false;
  if (this.checked) {
    if (e.shiftKey) {
      checkboxes.forEach((checkbox: HTMLInputElement) => {
        if (checkbox === this || checkbox === lastChecked) {
          inBetween = !inBetween;
        }

        if (inBetween) {
          checkbox.checked = true;
        }
      });
    }
    lastChecked = this;
  }

}

checkboxes.forEach(checkbox => checkbox.addEventListener('click', handleCheck));