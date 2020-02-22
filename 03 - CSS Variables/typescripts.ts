/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: CSS Variables
 * Concepts: Dynamically updating CSS Variables
 * Key takeaways: CSS variables syntax, CSS variables cascade.
 * Sidenotes: AKA "CSS custom properties"
 */

const inputs: NodeList = document.querySelectorAll('.controls input');

function handleUpdate() {
  const suffix = this.dataset.sizing || '';
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));
