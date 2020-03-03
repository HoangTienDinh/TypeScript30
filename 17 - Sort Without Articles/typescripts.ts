/**
 * JavaScript30 by Wes Bos, https://javascript30.com/
 * TypeScript implementation by Will Wager
 * Project: Sort Without Articles
 * Concepts: Sort function comparator
 * Key takeaways: Sort is easy to customize
 * Sidenotes: Comparator should return 1 if a should go after b, or -1 if before; 0 if equal.
 * Compilation command:
 *   tsc --removeComments --strictNullChecks --noImplicitAny --target es5 typescripts.ts
 */

const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
const articleRegExp = /^(a |the |an )/i;

const sortedBands = bands.sort((a, b) => {
  return a.replace(articleRegExp, '').trim() > b.replace(articleRegExp, '').trim() ? 1 : -1;
});

document.querySelector('#bands')!.innerHTML = sortedBands.map(band => `<li>${band}</li>`).join('');
